import { NavLink } from "react-router-dom";

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <ul className="nav flex-column">
        <li className="nav-item">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/global-state" className="nav-link">
            Global State
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/products" className="nav-link">
            Products
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
