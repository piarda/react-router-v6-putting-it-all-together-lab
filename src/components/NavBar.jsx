import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        end
        className={({ isActive }) => (isActive ? 'active-link' : undefined)}
      >
        Home
      </NavLink>
      <NavLink
        to="/directors"
        className={({ isActive }) => (isActive ? 'active-link' : undefined)}
      >
        Directors
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? 'active-link' : undefined)}
      >
        About
      </NavLink>
    </nav>
  );
}

export default NavBar;
