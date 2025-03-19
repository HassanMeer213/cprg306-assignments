"use client";
import { useEffect, useState } from "react";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function fetchMealIdeas() {
      if (!ingredient) return;
      const cleanedIngredient = ingredient.split(",")[0].trim();
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${cleanedIngredient}`
      );
      const data = await response.json();
      setMeals(data.meals || []);
    }
    fetchMealIdeas();
  }, [ingredient]);

  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Meal Ideas</h2>
      <ul>
        {meals.map((meal) => (
          <li key={meal.idMeal} className="p-2 border-b">
            <img src={meal.strMealThumb} alt={meal.strMeal} className="w-20 h-20 rounded" />
            {meal.strMeal}
          </li>
        ))}
      </ul>
    </div>
  );
}
