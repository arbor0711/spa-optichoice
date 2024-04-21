import { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo.png";
const Navbar = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? setDark(true) : setDark(false);
    });
  }, []);

  return (
    <nav className={`container ${dark ? "dark" : ""}`}>
      <img src={logo} alt="Opti Choice Logo" />
      <ul>
        <li>Men</li>
        <li>Women</li>
        <li>Sunglasses</li>
        <li>Prescription Glasses</li>
        <li>
          <button className="btn">Login</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
