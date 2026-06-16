"use client";

export default function CategoryGrid() {
  const categories = [
    "Safai",
    "Bijli",
    "Pani",
    "Road",
    "Health",
    "Education",
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {categories.map((cat, i) => (
        <div
          key={i}
          className="p-4 text-center bg-white rounded-xl shadow cursor-pointer hover:bg-green-100"
        >
          {cat}
        </div>
      ))}
    </div>
  );
}
