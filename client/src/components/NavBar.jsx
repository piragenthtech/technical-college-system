import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/Students">Students</NavLink>
        </li>
        <li>
          <NavLink to="/Staff">Staff</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
