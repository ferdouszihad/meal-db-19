import { use } from "react";
import MealCard from "./MealCard";

const Meals = ({ promise, activeCat }) => {
  const { meals } = use(promise) || [];

  if (!Array.isArray(meals)) {
    return <h1>No Data Found</h1>;
  }
  return (
    <div>
      <h2 className="text-center text-4xl font-bold">{activeCat}</h2>
      <div className="grid grid-cols-3">
        {meals?.map((meal) => (
          <MealCard key={meal.idMeal} meal={meal}></MealCard>
        ))}
      </div>
    </div>
  );
};

export default Meals;
