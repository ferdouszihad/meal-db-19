const MealCard = ({ meal }) => {
  return (
    <div className="card bg-base-100  shadow-sm">
      <figure className="px-10 pt-10">
        <img src={meal.strMealThumb} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{meal.strMeal}</h2>

        <div className="card-actions">
          <button className="btn btn-primary">View Recipe</button>
        </div>
      </div>
    </div>
  );
};

export default MealCard;
