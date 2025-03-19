import { useState } from "react";
import { v4 as uuidv4 } from "uuid"; // Generates unique IDs

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Other");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return; // Prevent empty names

    const newItem = {
      id: uuidv4(),
      name,
      quantity: parseInt(quantity),
      category,
    };

    onAddItem(newItem);
    setName(""); // Clear input fields after adding
    setQuantity(1);
    setCategory("Other");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-md mb-4">
      <div className="flex flex-col space-y-2">
        <input
          type="text"
          placeholder="Item Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border rounded-md p-2"
        />

        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="border rounded-md p-2"
        />

        <select value={category} onChange={(e) => setCategory(e.target.value)} className="border rounded-md p-2">
          <option>Fruits</option>
          <option>Vegetables</option>
          <option>Dairy</option>
          <option>Meat</option>
          <option>Snacks</option>
          <option>Beverages</option>
          <option>Grains</option>
          <option>Other</option>
        </select>

        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
          Add Item
        </button>
      </div>
    </form>
  );
}
