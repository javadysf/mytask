import SearchIcon from "../../../assets/img/search.png";

export const SearchBar = () => {
  return (
    <div className="relative bg-white border rounded-3xl px-2">
      <input
        as="input"
        className="w-52 text-sm h-8 outline-none bg-transparent pl-1 "
        placeholder="Search"
      />
      <img
        src={SearchIcon}
        alt="search icon"
        className="absolute right-3 top-[6px] w-5 h-5"
      />
    </div>
  );
};