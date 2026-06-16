"use client";

import { useState } from "react";
import ReportForm from "./ReportForm";

export default function FAB() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && (
        <div className="fixed bottom-20 right-4 bg-white p-4 rounded-xl shadow-xl w-72">
          <ReportForm />
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-4 right-4 w-14 h-14 rounded-full bg-green-600 text-white text-2xl shadow-lg"
      >
        +
      </button>
    </>
  );
}
