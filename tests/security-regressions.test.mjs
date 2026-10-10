import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const read = (path) => readFileSync(new URL(path, import.meta.url), "utf8");
const app = read("../src/App.tsx");
const vercel = JSON.parse(read("../vercel.json"));
const securityPlan = read("../docs/security-hardening-plan.md");

test("Vercel security headers remain configured", () => {
  const headers = vercel.headers.flatMap((entry) => entry.headers);
  const values = new Map(headers.map(({ key, value }) => [key, value]));

  assert.equal(values.get("X-Content-Type-Options"), "nosniff");
  assert.equal(values.get("X-Frame-Options"), "SAMEORIGIN");
  assert.equal(values.get("Referrer-Policy"), "strict-origin-when-cross-origin");
  assert.ok(values.has("Permissions-Policy"));
});

test("Vercel SPA fallback rewrite remains configured", () => {
  assert.ok(vercel.rewrites.some(
    ({ source, destination }) => source === "/(.*)" && destination === "/",
  ));
});

test("password settings stay masked and are not rendered as current plaintext", () => {
  assert.match(app, /<input type="password" placeholder="New User-Admin password" value=\{newUserAdminPw\}/);
  assert.match(app, /<input type="password" placeholder="New Complaint-Admin password" value=\{newComplaintAdminPw\}/);
  assert.match(app, /<input type="password" placeholder="Password" value=\{pw\}/);
  assert.doesNotMatch(app, /Current:\s*\{\s*(?:userAdminPassword|complaintAdminPassword)\s*\}/);
});

test("full blocked-user subscription is gated to user-management admins", () => {
  const effect = app.match(
    /\/\/ Load the blocked-user list only for admins who can manage users\.([\s\S]*?)\/\/ Cache media for instant load/,
  )?.[1];

  assert.ok(effect, "blocked-user subscription effect should be present");
  assert.match(effect, /if\s*\(!isAdmin\s*\|\|\s*!canManageUsers\)/);
  assert.match(effect, /onSnapshot\(collection\(db, "blockedUsers"\)/);
});

test("remaining authentication and Firestore risks stay explicitly documented", () => {
  assert.match(securityPlan, /admin login check runs in the browser/i);
  assert.match(securityPlan, /allows unrestricted writes to `users`/i);
  assert.match(securityPlan, /Do not deploy restrictive rules until/i);
});


test("server-side authentication rollout documents required safety gates", () => {
  const runbook = read("../docs/server-auth-migration-runbook.md");

  assert.match(runbook, /custom claims.*trusted server/i);
  assert.match(runbook, /HttpOnly.*Secure/i);
  assert.match(runbook, /CSRF protection/i);
  assert.match(runbook, /forced password-reset path/i);
  assert.match(runbook, /Do not.*active rules|does not change the active rules/i);
});
