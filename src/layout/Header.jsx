import logoImage from "../assets/logo.png";
import NavBar from "../components/layout/NavBar";
import SearchBar from "../components/layout/SearchBar";
import "./header.css";
export default function () {
  return (
    <header>
      <div className="logo">
        <img src={logoImage} alt="logo-image" />
      </div>
      <SearchBar />
      <NavBar />
    </header>
  );
}
