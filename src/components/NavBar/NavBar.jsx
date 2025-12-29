import { NavLink } from "react-router-dom";

import "./NavBar.css";
function NavBar() {
  return (
    <nav className="menu">
      <NavLink to="/" className="menu__link">
        Home
      </NavLink>
      <NavLink to="/reviews" className="menu__link">
        Emoji Reviews
      </NavLink>
      <NavLink to="/about-me" className="menu__link">
        About Me
      </NavLink>
    </nav>
  );
}

export default NavBar;
