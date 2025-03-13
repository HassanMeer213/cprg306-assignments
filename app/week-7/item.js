export default function Item({ item }) {
  if (!item || typeof item !== "object") {
    console.error("Received undefined or invalid item:", item);
    return null; // Prevent crash
  }

  // Define emojis for each category
  const categoryEmojis = {
    Fruits: "🍎",
    Vegetables: "🥕",
    Dairy: "🥛",
    Meat: "🍖",
    Snacks: "🍫",
    Beverages: "🥤",
    Grains: "🍞",
    Other: "🛒",
  };

  // Assign an emoji based on category or use a default
  const emoji = categoryEmojis[item.category?.trim()] || "🛍️";

  return (
    <li className="border p-2 flex items-center justify-between bg-white rounded-lg shadow-md mb-2 px-4 py-3">
      <span className="text-xl">{emoji}</span>
      <span className="flex-1 ml-3 text-gray-700">
        <strong>{item.name}</strong> - {item.quantity} ({item.category})
      </span>
    </li>
  );
}
