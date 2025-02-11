"use client";
import React, { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < 20) setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="bg-black min-h-screen flex justify-center items-center">
      <div className="flex items-center gap-4 bg-white p-4 rounded-lg">
        {/* Decrement Button */}
        <button
          onClick={decrement}
          disabled={quantity === 1}
          className={`px-4 py-2 rounded-md text-white ${
            quantity === 1 ? "bg-gray-400 cursor-not-allowed" : "bg-gray-600 hover:bg-gray-500"
          }`}
        >
          -
        </button>

        {/* Quantity Display */}
        <span className="text-black text-2xl font-semibold">{quantity}</span>

        {/* Increment Button */}
        <button
          onClick={increment}
          disabled={quantity === 20}
          className={`px-4 py-2 rounded-md text-white ${
            quantity === 20 ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-500"
          }`}
        >
          +
        </button>
      </div>
    </div>
  );
}

