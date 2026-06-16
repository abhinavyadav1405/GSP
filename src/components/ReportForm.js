"use client";

import { useRef } from "react";

export default function ReportForm() {
  const inputRef = useRef(null);

  const startListening = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Speech recognition not supported");
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "hi-IN";
    recognition.start();

    recognition.onresult = (event) => {
      const text = event.results[0][0].transcript;
      if (inputRef.current) {
        inputRef.current.value = text;
      }
    };
  };

  return (
    <div className="space-y-3">
      <input
        ref={inputRef}
        placeholder="Apni problem likhein..."
        className="w-full p-2 border rounded"
      />

      <button
        type="button"
        onClick={startListening}
        className="px-4 py-2 bg-green-600 text-white rounded"
      >
        🎤 Bol kar likho
      </button>
    </div>
  );
}
