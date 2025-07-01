import Category from "./components/Category";
import FilterBarHead from "./components/FilterBarHead";
import Price from "./components/Price";
import Rating from "./components/Rating";
import "./filterBar.css";
export default function () {
  return (
    <div>
      <FilterBarHead />
      <Category />
      <Price />
      <Rating />
    </div>
  );
}
