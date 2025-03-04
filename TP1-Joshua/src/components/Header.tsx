import "../styling/Header.css";
import logo from "../assets/logo.svg";
import { Link } from "react-router";

function Header() {
  return (
    <>
      <div className="header">
        <Link to="/">
          <img className="imgLogo" src={logo} alt="Logo" />
          <h2>MySpace</h2>
        </Link>
      </div>
    </>
  );
}

export default Header;
