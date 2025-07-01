import Category from "./components/Category";
import FilterBarHead from "./components/FilterBarHead";
import Price from "./components/Price";
import "./filterBar.css";
export default function () {
  return (
    <div className="filter-bar-wrapper">
      <FilterBarHead />
      <Category />
      <Price />
    </div>
  );
}
