import "./menu.css";
import React, { useContext } from "react";
import { MenuContext } from "../../menuContext";
import { Link } from "react-router-dom";

const Menu = () => {
  const { menu } = useContext(MenuContext);

  return (
    <nav className={`navbar ${menu ? "isActive" : ""}`}>
      <ul className="navbar-list">
        <li>
          <Link to="/">Destacados</Link>
        </li>
        <li>
          <Link to="/about">Nosotros</Link>
        </li>
        <li>
          <Link to="/products">Productos</Link>
        </li>
        <li>
          <Link to="/contact">Contacto</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
