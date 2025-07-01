import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import "./pagination.css";
export default function Pagination({
  paginationHandler,
  buttonCount,
  currentTab = 1,
}) {
  let inputArray = new Array(buttonCount).fill(0);
  return (
    <div className="pagination">
      <div className="pagination-icons">
        <IoIosArrowBack />
      </div>
      <div className="pagination-nums-tab-wrapper">
        {inputArray.map((_, index) => (
          <div
            onClick={() => paginationHandler(index + 1)}
            key={index}
            className={`${
              currentTab === index + 1 ? "active" : ""
            } pagination-nums-tab `}
          >
            {index + 1}
          </div>
        ))}
      </div>
      <div className="pagination-icons">
        <IoIosArrowForward />
      </div>
    </div>
  );
}
