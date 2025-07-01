import { IoIosArrowDown } from "react-icons/io";
import "./navbar.css";
export default function () {
  return (
    <ul className="navbar-wrapper">
      <div className="navbar-item-wrapper">
        <li>Zoffi</li>
        <IoIosArrowDown />
      </div>
      <li>Become a Seller</li>
      <div className="navbar-item-wrapper">
        <li>More</li>
        <IoIosArrowDown />
      </div>
      <li>Cart</li>
    </ul>
  );
}
