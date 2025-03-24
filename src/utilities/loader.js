export const fetchCategories = async () => {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );
  return res.json();
};
export const fetchCategoryFoods = async (category) => {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category.toLowerCase()}`
  );
  return res.json();
};
export const fetchSearchedFoods = async (text) => {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?f=${text}`
  );
  return res.json();
};
