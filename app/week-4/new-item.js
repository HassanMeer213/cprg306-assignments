"use client";
import { useState } from "react";

const NewItem = () => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < 20) setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <div className="bg-white p-4 rounded shadow-md text-black flex items-center space-x-4">
        <button
          onClick={decrement}
          disabled={quantity === 1}
          className={`px-4 py-2 rounded bg-gray-500 text-white ${quantity === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          -
        </button>
        <span className="text-xl">{quantity}</span>
        <button
          onClick={increment}
          disabled={quantity === 20}
          className={`px-4 py-2 rounded bg-blue-500 text-white ${quantity === 20 ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default NewItem;
