"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  // Sort items based on the selected sort option
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div>
      <div className="flex justify-between mb-4">
        <button
          className={`px-4 py-2 mr-2 ${sortBy === "name" ? "bg-blue-500" : "bg-blue-700"}`}
          onClick={() => setSortBy("name")}
        >
          Sort by Name
        </button>
        <button
          className={`px-4 py-2 ${sortBy === "category" ? "bg-blue-500" : "bg-blue-700"}`}
          onClick={() => setSortBy("category")}
        >
          Sort by Category
        </button>
      </div>
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
            onSelect={() => onItemSelect(item)}
          />
        ))}
      </ul>
    </div>
  );
}