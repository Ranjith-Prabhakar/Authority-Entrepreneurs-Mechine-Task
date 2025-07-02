import "./sortBar.css";
import { MdTune } from "react-icons/md";
import { TfiViewList } from "react-icons/tfi";
export default function SortBar() {
  return (
    <div className="sorted-bar-wrapper">
      <div className="sorted-bar-wrapper-top-section">
        {" "}
        <div className="sorted-bar-wrapper-left-section">
          <TfiViewList />
          <MdTune />
        </div>
        <div className="sorted-bar-wrapper-right-section">
          <h5>
            <span>Sorted by :</span> popular
          </h5>
        </div>
      </div>
      <div className="sorted-bar-wrapper-bottom-section"></div>
    </div>
  );
}
