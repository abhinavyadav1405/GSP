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

// Keep the animated logo visible until the document has loaded and the app
// has had time to mount, then fade it away.
let loaderFinished = false;
const finishLoading = () => {
  if (loaderFinished) return;
  loaderFinished = true;
  const loader = document.getElementById("gsp-loader");
  if (!loader) return;
  const minimumTimeRemaining = Math.max(0, 900 - (Date.now() - loaderStartedAt));
  window.setTimeout(() => {
    loader.classList.add("gsp-loader-hidden");
    window.setTimeout(() => loader.remove(), 500);
  }, minimumTimeRemaining);
};

if (document.readyState === "complete") {
  finishLoading();
} else {
  window.addEventListener("load", finishLoading, { once: true });
}
