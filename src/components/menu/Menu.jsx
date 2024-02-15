import "./menu.css";
import React, { useContext } from "react";
import { MenuContext } from "../../menuContext";

const Menu = () => {
  const { menu } = useContext(MenuContext);

  return (
    <nav className={`navbar ${menu ? "isActive" : ""}`}>
      <ul className="navbar-list">
        <li>
          <a href="#featured">Destacados</a>
        </li>
        <li>
          <a href="#about-us">Nosotros</a>
        </li>
        <li>
          <a href="#products">Productos</a>
        </li>
        <li>
          <a href="#contact">Contacto</a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
