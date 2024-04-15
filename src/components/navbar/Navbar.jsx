import "./Navbar.css";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  return (
    <nav className="container">
      <img src={logo} alt="Logo image for Optic Choice company" />
      <ul>
        <li>Home</li>
        <li>Glasses</li>
        <li>About Us</li>
        <li>Testimonials</li>
        <li>
          <button className="btn">Contact Us</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
