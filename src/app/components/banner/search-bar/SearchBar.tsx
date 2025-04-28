
import { IoIosSearch } from "react-icons/io";

const SearchBar = () => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search Best Buy"
        className="w-[30rem] py-3.5 px-3 bg-white outline-none rounded-[3px]"
      />
      <span className="absolute right-4 top-4">
        <IoIosSearch className="text-blue-700 w-6 h-6" />
      </span>
    </div>
  );
};

export default SearchBar;
