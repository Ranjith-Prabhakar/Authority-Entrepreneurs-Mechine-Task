import "./category.css";
import SearchBar from "./SearchBar";
import CategoryList from "./CategoryList";
import Accordion from "../../../../components/ui/Accordion";
import { useEffect, useState } from "react";
import useGetCategories from "../../../../hooks/getCategories";
import { useSetFilter } from "../../../../hooks/setFilter";
export default function () {
  let [on, setOn] = useState(true);
  let categories = useGetCategories();
  const [selected, setSelected] = useState([]);
  const setFilter = useSetFilter();

  useEffect(() => {
    if (categories.length > 0) {
      setSelected(Array(categories.length).fill(0));
      // setFilter(selected, "category");
    }
  }, [categories]);
  return (
    <div className="filter-category-wrapper">
      <Accordion head="Category" on={on} setOn={setOn}>
        <SearchBar />
        <div className="category-list-wrapper">
          {categories &&
            categories.map((category, index) => (
              <CategoryList
                key={category}
                onClick={() => {
                  selected[index] = selected[index] === 0 ? 1 : 0;
                  setSelected([...selected]);
                }}
                status={selected[index]}
                category={category}
              />
            ))}
        </div>
      </Accordion>
    </div>
  );
}
