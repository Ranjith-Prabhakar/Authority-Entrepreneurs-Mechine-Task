import SearchIcon from "../ui/SearchIcon";
import "./searchBar.css";
export default function () {
  return (
    <div className="search-bar-wrapper">
      <input
        className="search-box"
        type="text"
        name=""
        id=""
        placeholder="Search Here..."
      />
      <div className="search-icon-wrapper">
        <SearchIcon />
      </div>
    </div>
  );
}
