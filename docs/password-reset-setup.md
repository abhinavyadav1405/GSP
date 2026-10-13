# GSP password-reset email setup (staging)

This guide configures the Resend key without putting it in source code, `.env`, GitHub commits, or chat.

## 1. Rotate the Resend key

A Resend API key was shared in a chat. Revoke that key in Resend and create a replacement. Do not reuse the exposed key.

## 2. Add the secret to Google Cloud Secret Manager

1. Open https://console.cloud.google.com/security/secret-manager?project=gsp-staging-cf7e9
2. Confirm the selected project is **gsp-staging-cf7e9**.
3. Select **Create secret**.
4. Secret name: `RESEND_API_KEY` (exact spelling).
5. Paste the new Resend API key into the secret value field.
6. Keep the default replication settings unless your project policy requires otherwise, then create the secret.
7. Do not paste the key into GitHub files, browser source code, Vercel environment variables, screenshots, or chat.

If Google Cloud asks to enable Secret Manager API, enable it for the staging project and repeat these steps.

## 3. Sender configuration

The code defaults to `GSP <onboarding@resend.dev>`. Resend's test sender is for limited testing and does not guarantee delivery to all recipients. To send production email to users, use a domain you own and verify it in Resend, then configure the `GSP_RESET_FROM` function parameter to an address on that verified domain.

The reset link base defaults to `https://gram-sabha-pahrajpur.vercel.app/`. Keep this aligned with the actual deployed GSP site.

## 4. Deploy and test

Creating the secret does not deploy Cloud Functions by itself. After the Firebase Functions code has been deployed to the staging project, test with a known registered email address and confirm:
- a reset email is delivered;
- the link opens the GSP reset screen;
- the token expires after 30 minutes and cannot be reused;
- the password can be changed and then used to sign in.

Do not deploy to production until staging checks pass.

## Security notes

- Never commit API keys or service-account JSON.
- If a key is exposed, revoke it and replace it.
- Avoid sharing screenshots that show secrets, authorization codes, or session URLs.
