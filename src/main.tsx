import React from "react";
import ReactDOM from "react-dom/client";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("GSP root element is missing");
const root = ReactDOM.createRoot(rootElement);

class AppErrorBoundary extends React.Component<{ children: React.ReactNode }, { error: Error | null }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error: Error) {
    return { error };
  }
  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("GSP app render failed:", error, info.componentStack);
  }
  render() {
    if (this.state.error) return <StartupError error={this.state.error} />;
    return this.props.children;
  }
}

function StartupError({ error }: { error: Error }) {
  const message = error?.message || String(error);
  return (
    <main style={{ minHeight: "100vh", padding: "28px 18px", display: "grid", placeItems: "center", background: "#f7f4ff", color: "#28224d", fontFamily: "system-ui, sans-serif" }}>
      <section style={{ maxWidth: 560, width: "100%", background: "#fff", border: "1px solid #e2def5", borderRadius: 18, padding: 22, boxShadow: "0 12px 35px rgba(40,34,77,.08)" }}>
        <h1 style={{ fontSize: 21, margin: "0 0 10px" }}>GSP Preview start nahi ho paya</h1>
        <p style={{ fontSize: 14, lineHeight: 1.6, margin: "0 0 14px" }}>App start hote waqt error aaya. Neeche diya gaya error support ke liye bhejein. OTP ya Firebase secret key share na karein.</p>
        <pre style={{ whiteSpace: "pre-wrap", overflowWrap: "anywhere", padding: 12, borderRadius: 10, background: "#f3f0ff", color: "#a12626", fontSize: 12 }}>{message}</pre>
        <button onClick={() => window.location.reload()} style={{ marginTop: 12, padding: "10px 15px", border: 0, borderRadius: 9, background: "#5b4bd8", color: "#fff", fontWeight: 700 }}>Dobara koshish karein</button>
      </section>
    </main>
  );
}

function StartupFallback({ message }: { message: string }) {
  return (
    <main style={{ minHeight: "100vh", padding: 24, background: "#f7f4ff", color: "#28224d", fontFamily: "system-ui, sans-serif" }}>
      <h1>GSP Preview load nahi hua</h1>
      <p>JavaScript module load karte waqt error aaya:</p>
      <pre style={{ whiteSpace: "pre-wrap", overflowWrap: "anywhere", color: "#a12626" }}>{message}</pre>
      <button onClick={() => window.location.reload()}>Reload</button>
    </main>
  );
}

const loaderStartedAt = Date.now();
const hideLoader = () => {
  const loader = document.getElementById("gsp-loader");
  if (!loader) return;
  loader.classList.add("gsp-loader-hidden");
  window.setTimeout(() => loader.remove(), 500);
};
window.setTimeout(hideLoader, 1200);

import("./App")
  .then(({ default: App }) => {
    root.render(
      <React.StrictMode>
        <AppErrorBoundary>
          <App />
        </AppErrorBoundary>
      </React.StrictMode>
    );
  })
  .catch((error: unknown) => {
    console.error("GSP app failed to load:", error);
    const message = error instanceof Error ? error.message : String(error);
    root.render(<StartupFallback message={message} />);
  })
  .finally(() => {
    const minimumTimeRemaining = Math.max(0, 900 - (Date.now() - loaderStartedAt));
    window.setTimeout(hideLoader, minimumTimeRemaining);
  });

window.addEventListener("error", (event) => {
  console.error("GSP global error:", event.error || event.message);
});
window.addEventListener("unhandledrejection", (event) => {
  console.error("GSP unhandled promise rejection:", event.reason);
});
