
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <h1 className="navbar-logo">
        <Link to="/home">LexCam</Link>
      </h1>
      <ul className="navbar-menu">
        <li className="navbar-item">
          <Link to="/penal">Code penal</Link>
        </li>
        <li className="navbar-item">
          <Link to="/">Code civil</Link>
        </li>
        <li className="navbar-item">
          <Link to="/">Code du Travail</Link>
        </li>
        <li className="navbar-item">
          <Link to="/">Code de la Route</Link>
        </li>
        <li className="navbar-item">
          <Link to="/">Code des impots</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;