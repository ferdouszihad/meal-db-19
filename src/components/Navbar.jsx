const Navbar = ({ counter, setCounter, setSearchVal }) => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <h2 className="py-1 bg-base-200 text-center">
        You have got {counter}% discount
      </h2>
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Recipie Hub</a>
      </div>
      <div className="flex gap-2">
        <input
          onChange={(e) => setSearchVal(e.target.value)}
          type="text"
          placeholder="Search"
          className="input input-bordered w-24 md:w-auto"
        />
        <div className="">
          <div role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                onClick={() => setCounter((count) => count + 1)}
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
