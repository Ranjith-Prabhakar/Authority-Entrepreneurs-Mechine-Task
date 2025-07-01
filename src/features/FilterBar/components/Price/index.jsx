import "./price.css";
import PriceFilter from "./PriceFilter";
import Accordion from "../../../../components/ui/Accordion";
import { useState } from "react";
export default function () {
  let [on, setOn] = useState(true);
  return (
    <div className="filter-category-wrapper">
      {/* header drop down */}
      <Accordion head="Price" on={on} setOn={setOn}></Accordion>
      {/* <PriceFilter /> */}
      {/* search bar */}
    </div>
  );
}
