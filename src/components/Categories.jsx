import CategoryCard from "./CategoryCard";

const Categories = ({ setSearchVal, categories, activeCat, setActiveCat }) => {
  // const categories = use(promise) || [];
  console.log(categories);
  return (
    <div className="my-5 px-10 grid grid-cols-1 gap-5 justify-center ">
      {categories.categories.map((cat) => (
        <CategoryCard
          setSearchVal={setSearchVal}
          activeCat={activeCat}
          setActiveCat={setActiveCat}
          key={cat.idCategory}
          cat={cat}
        ></CategoryCard>
      ))}
    </div>
  );
};

export default Categories;
