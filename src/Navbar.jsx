
import { BrowserRouter, NavLink } from "react-router-dom";
// import { Link } from "react-router-dom";

const Navbar = () => {
  return (
      <div className="Navbar">
      <h1 className="navbar-logo">
        <NavLink to="/home" className={({ isActive }) => (isActive ? 'active' : '')}>LexCam</NavLink>
      </h1>
      <ul className="navbar-menu">
        <li className="navbar-item">
            <NavLink className="siderbar" style={({isActive}) => { return { color: 'blue', borderBottom: isActive ? '5px solid white' : 'none' }}} to="/penal">Code penal</NavLink>
          </li>
          <li className="navbar-item">
            <NavLink className="siderbar" style={({isActive}) => { return { color: 'blue', borderBottom: isActive ? '5px solid white' : 'none'}}} to="/civil" >Code civil</NavLink>
          </li>
          <li className="navbar-item">
            <NavLink className="siderbar"  style={({isActive}) => { return { color: 'blue', borderBottom: isActive ? '5px solid white' : 'none'}}} to="/travail">Code du Travail</NavLink>
          </li>
          <li className="navbar-item">
            <NavLink className="siderbar" style={({isActive}) => { return { color: 'blue', borderBottom: isActive ? '5px solid white' : 'none'}}} to="/raod" >Code de la Route</NavLink>
          </li>
          <li className="navbar-item">
            <NavLink className="siderbar"  style={({isActive}) => { return { color: 'blue', borderBottom: isActive ? '5px solid white' : 'none'}}} to="/impot">Code des impots</NavLink>
          </li>
      </ul>
    </div>
  );
};

export default Navbar;