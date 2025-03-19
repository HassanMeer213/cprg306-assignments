"use client";
import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItem, setSelectedItem] = useState("");

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  function handleItemSelect(itemName) {
    const cleanedName = itemName.split(",")[0].trim();
    setSelectedItem(cleanedName);
  }

  return (
    <div className="flex gap-4 p-4">
      <div className="flex-1">
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div className="flex-1">
        <MealIdeas ingredient={selectedItem} />
      </div>
    </div>
  );
}
