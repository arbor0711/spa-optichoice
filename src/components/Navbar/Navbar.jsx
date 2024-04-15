import "./Navbar.css";
import logo from "../../assets/images/logo.png";
const Navbar = () => {
  return (
    <nav className="container">
      <img src={logo} alt="Opti Choice Logo" />
      <ul>
        <li>Home</li>
        <li>Glasses</li>
        <li>About</li>
        <li>Testimonials</li>
        <li>
          <button className="btn">Contact</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
