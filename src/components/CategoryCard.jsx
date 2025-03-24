const CategoryCard = ({ cat, activeCat, setActiveCat }) => {
  return (
    <div
      onClick={() => setActiveCat(cat.strCategory)}
      className={`flex cursor-pointer duration-300 hover:bg-base-200 hover:shadow-xl items-center justify-between rounded-xl  gap-2 shadow px-5 py-2 ${
        activeCat == cat.strCategory && "bg-primary"
      } `}
    >
      <div className="rounded-lg border">
        <img
          className="w-20 h-20 object-cover rounded"
          src={cat.strCategoryThumb}
          alt=""
        />
      </div>

      <h2>{cat.strCategory}</h2>
    </div>
  );
};

export default CategoryCard;
