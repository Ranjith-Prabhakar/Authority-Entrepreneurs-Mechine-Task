import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import "./pagination.css";
export default function Pagination({ buttonCount, currentTab = 1 }) {
  console.log(buttonCount);
  let inputArray = new Array(buttonCount).fill(0);
  console.log(inputArray);
  return (
    <div className="pagination">
      <div className="pagination-icons">
        <IoIosArrowBack />
      </div>
      <div className="pagination-nums-tab-wrapper">
        {inputArray.map((_, index) => (
          <div
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
