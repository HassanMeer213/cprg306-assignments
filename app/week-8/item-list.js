"use client";
import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  return (
    <ul className="p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Shopping List</h2>
      {items.map((item) => (
        <Item key={item.id} item={item} onSelect={onItemSelect} />
      ))}
    </ul>
  );
}
