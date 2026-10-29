import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const loaderStartedAt = Date.now();
const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  React.createElement(
    React.StrictMode,
    null,
    React.createElement(App, null)
  )
);

// Hide the static HTML loader after the app has had a short chance to mount.
// Do not rely only on window.load: external stylesheets/fonts can delay that
// event and leave the loader covering the entire application indefinitely.
let loaderFinished = false;
let fallbackTimer: number | undefined;

const finishLoading = () => {
  if (loaderFinished) return;
  loaderFinished = true;
  if (fallbackTimer !== undefined) window.clearTimeout(fallbackTimer);

  const loader = document.getElementById("gsp-loader");
  if (!loader) return;

  const minimumTimeRemaining = Math.max(0, 900 - (Date.now() - loaderStartedAt));
  window.setTimeout(() => {
    loader.classList.add("gsp-loader-hidden");
    window.setTimeout(() => loader.remove(), 500);
  }, minimumTimeRemaining);
};

// Normal path: finish as soon as the page load event fires.
// Fallback: ensure a slow or stalled external resource cannot trap visitors
// behind the HTML loader forever.
if (document.readyState === "complete") {
  finishLoading();
} else {
  window.addEventListener("load", finishLoading, { once: true });
  fallbackTimer = window.setTimeout(finishLoading, 3000);
}
