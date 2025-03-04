"use client";

// item-list.js
import React, { useState } from 'react';
import Item from './item';  // Assuming Item component is in item.js
import itemsData from './items.json';  // Importing the items data

const ItemList = () => {
  const [sortBy, setSortBy] = useState("name");  // Default sorting by name
  const [groupByCategory, setGroupByCategory] = useState(false);  // To toggle grouping by category

  // Sorting the items based on the sortBy state
  const sortedItems = [...itemsData].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);  // Sort by name
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);  // Sort by category
    }
    return 0;
  });

  // Grouping the items by category if the groupByCategory state is true
  const groupedItems = groupByCategory
    ? sortedItems.reduce((groups, item) => {
        if (!groups[item.category]) {
          groups[item.category] = [];
        }
        groups[item.category].push(item);
        return groups;
      }, {})
    : { 'All Items': sortedItems };  // If not grouping, show all items under "All Items"

  return (
    <div>

      {/* Sorting Buttons */}
      <div className="mb-4">
        <button
          onClick={() => setSortBy("name")}
          className={`mr-2 ${sortBy === "name" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`mr-2 ${sortBy === "category" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          Sort by Category
        </button>

        {/* Group by Category Button */}
        <button
          onClick={() => setGroupByCategory(prev => !prev)}
          className={`mr-2 ${groupByCategory ? "bg-green-500 text-white" : "bg-gray-200"}`}
        >
          {groupByCategory ? "Ungroup by Category" : "Group by Category"}
        </button>
      </div>

      {/* Render Grouped Items */}
      {Object.keys(groupedItems).map((category) => (
        <div key={category}>
          <h3 className="text-lg font-semibold capitalize">{category}</h3>
          <ul className="mb-4">
            {groupedItems[category].map((item) => (
              <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ItemList;

