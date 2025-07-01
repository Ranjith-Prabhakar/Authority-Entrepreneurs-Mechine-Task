import { TiTick } from "react-icons/ti";
import "./categoryList.css";
export default function ({ title, stock, status }) {
  return (
    <div className="category-list">
      <div className="category-title-n-stock">
        <h4>{title}</h4>
        <p>{stock}</p>
      </div>
      {status && <TiTick />}
    </div>
  );
}
