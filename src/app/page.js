"use client";

import CategoryGrid from "../components/CategoryGrid";
import FAB from "../components/FAB";

export default function Page() {
  return (
    <main className="p-4 space-y-6">
      <img
        src="/images/gaon.jpg"
        alt="Gram Sabha Pahrajpur"
        className="w-full h-64 object-cover rounded-lg shadow-md"
      />

      <CategoryGrid />
      <FAB />
    </main>
  );
}
