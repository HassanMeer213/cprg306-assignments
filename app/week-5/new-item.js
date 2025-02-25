"use client";
import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = { name, quantity, category };
    console.log(item);
    alert(`Item Added:\nName: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);

    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-900 text-white shadow-md rounded-lg mt-6">
      <h2 className="text-xl font-bold mb-4">Add New Item</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Item Name Input */}
        <div>
          <label className="block font-medium">Item Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-2 rounded-lg border-gray-300 text-black"
          />
        </div>

        {/* Quantity Selector */}
        <div>
          <label className="block font-medium">Quantity</label>
          <div className="flex items-center space-x-2 bg-white p-2 rounded-lg text-black w-1/2">
            <button
              type="button"
              className="bg-gray-400 text-white rounded-lg px-3"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
              -
            </button>
            <span className="px-3">{quantity}</span>
            <button
              type="button"
              className="bg-blue-500 text-white rounded-lg px-3"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>
        </div>

        {/* Category Dropdown */}
        <div>
          <label className="block font-medium">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 rounded-lg text-black bg-white"
          >
            {[
              "Produce",
              "Dairy",
              "Bakery",
              "Meat",
              "Frozen Foods",
              "Canned Goods",
              "Dry Goods",
              "Beverages",
              "Snacks",
              "Household",
              "Other",
            ].map((cat) => (
              <option key={cat} value={cat.toLowerCase()}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Add Button */}
        <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-lg">
          Add Item
        </button>
      </form>
    </div>
  );
}
