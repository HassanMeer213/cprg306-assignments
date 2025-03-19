"use client";

export default function Item({ item, onSelect }) {
  return (
    <li
      onClick={() => onSelect(item.name)}
      className="cursor-pointer p-2 border rounded hover:bg-gray-100"
    >
      {item.name}
    </li>
  );
}
