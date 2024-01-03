import "./header.css";
import logo from "../../assets/img/caffe-logo-white.png";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="prueba" className="logo-caffe" />
      <nav id="navbar">
        <ul className="navbar-list">
          <li>Tienda</li>
          <li>Destacados</li>
          <li>Nosotros</li>
        </ul>
      </nav>
      <div className="menu-tools">
        <i className="fa-sharp fa-solid fa-cart-shopping"></i>
        <i className="fa-sharp fa-solid fa-right-to-bracket"></i>
      </div>
    </header>
  );
};

export default Header;
