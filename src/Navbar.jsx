import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <h1 className="navbar-logo">
        <Link to="/home">LexCam</Link>
      </h1>
      <ul className="navbar-menu">
      <li className="navbar-item">
          <NavLink to="/penal" className={({ isActive }) => (isActive ? 'active' : '')}>Code penal</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/civil" className={({ isActive }) => (isActive ? 'active' : '')}>Code civil</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/travail" className={({ isActive }) => (isActive ? 'active' : '')}>Code du Travail</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/raod" className={({ isActive }) => (isActive ? 'active' : '')}>Code de la Route</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/impot" className={({ isActive }) => (isActive ? 'active' : '')}>Code des impots</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;