import "./Navbar.css";
import logo from "../../assets/images/logo.png";
const Navbar = () => {
  return (
    <nav className="container">
      <img src={logo} alt="Opti Choice Logo" />
      <ul>
        <li>Men</li>
        <li>Women</li>
        <li>Sunglasses</li>
        <li>Prescription Glasses</li>
        <li>Virtual Try-On</li>
        <li>
          <button className="btn">Login</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
