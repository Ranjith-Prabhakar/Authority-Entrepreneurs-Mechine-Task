import "./category.css";
import SearchBar from "./SearchBar";
import CategoryList from "./CategoryList";
import Accordion from "../../../../components/ui/Accordion";
import { useState } from "react";
import useGetCategories from "../../../../hooks/getCategories";
export default function () {
  let [on, setOn] = useState(true);
  let categories = useGetCategories();
  return (
    <div className="filter-category-wrapper">
      <Accordion head="Category" on={on} setOn={setOn}>
        <SearchBar />
        <div className="category-list-wrapper">
          {categories &&
            categories.map((category) => (
              <CategoryList key={category} category={category} />
            ))}
        </div>
      </Accordion>
    </div>
  );
}
