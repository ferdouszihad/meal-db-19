import { Suspense, use, useState } from "react";
import Categories from "./components/Categories";
import Navbar from "./components/Navbar";
import {
  fetchCategories,
  fetchCategoryFoods,
  fetchSearchedFoods,
} from "./utilities/loader";
import Loading from "./components/Loading";
import Meals from "./components/Meals";

const categoryPromise = fetchCategories();
function App() {
  const [counter, setCounter] = useState(0);
  const [activeCat, setActiveCat] = useState("");

  const categories = use(categoryPromise);
  const [searchVal, setSearchVal] = useState("");

  return (
    <>
      <h2 className="py-1 bg-base-200 text-center">
        You have got {counter}% discount
      </h2>
      <Navbar setSearchVal={setSearchVal} setCounter={setCounter}></Navbar>
      <div className="grid grid-cols-12 gap-5 w-11/12 mx-auto py-10">
        <div className="col-span-3 h-screen overflow-x-scroll">
          <h2 className="text-2xl font-bold text-center sticky top-0 bg-white bg-opacity-50">
            Categories
          </h2>
          <Suspense fallback={<Loading></Loading>}>
            <Categories
              activeCat={activeCat}
              setActiveCat={setActiveCat}
              categories={categories}
            ></Categories>
          </Suspense>
        </div>

        <div className="col-span-9">
          {searchVal ? (
            <Suspense fallback={<Loading></Loading>}>
              <Meals
                activeCat={searchVal}
                promise={fetchSearchedFoods(searchVal)}
              ></Meals>
            </Suspense>
          ) : activeCat ? (
            <Suspense fallback={<Loading></Loading>}>
              <Meals
                activeCat={activeCat}
                promise={fetchCategoryFoods(activeCat)}
              ></Meals>
            </Suspense>
          ) : (
            <p className="text-center">please Select a Category</p>
          )}
          {/* {activeCat ? (
            <Suspense fallback={<Loading></Loading>}>
              <Meals
                activeCat={activeCat}
                promise={fetchCategoryFoods(activeCat)}
              ></Meals>
            </Suspense>
          ) : (
            <p className="text-center">please Select a Category</p>
          )} */}
        </div>
      </div>
    </>
  );
}

export default App;
