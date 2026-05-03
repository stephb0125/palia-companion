import { useState } from "react";

const resources = [
  { name: "Copper Ore", location: "Bahari Bay" },
  { name: "Wood", location: "Kilima Forest" },
  { name: "Stone", location: "Everywhere" },
];

export default function ResourceFinder() {
  const [search, setSearch] = useState("");

  const filtered = resources.filter((r) =>
    r.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-2">Resource Finder</h2>

      <input
        className="border p-2 w-full mb-3"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />

      {filtered.map((r, i) => (
        <div key={i} className="border-b p-2">
          {r.name} — {r.location}
        </div>
      ))}
    </div>
  );
}
