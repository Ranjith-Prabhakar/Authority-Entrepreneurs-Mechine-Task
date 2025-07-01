import Category from "./components/Category";
import FilterBarHead from "./components/FilterBarHead";
import "./filterBar.css";
export default function () {
  return (
    <div className="filter-bar-wrapper">
      <FilterBarHead />
      <Category />
      {/* <div className="fiter-bar-category">
        
        <div className="">search brand </div>
        <div className="">
          drop down
          <div className="">price indicator</div>
          <div className="">price indicatior</div>
        </div>
      </div> */}
      <div className="fiter-bar-price"></div>
      <div className="fiter-bar-rating"></div>
    </div>
  );
}
