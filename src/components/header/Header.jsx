import "./header.css";
import logo from "../../assets/img/caffe-logo-white.png";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="prueba" className="logo-caffe" />
      <nav id="navbar">
        <ul className="navbar-list">
          <li>
            <a href="#featured">Destacados</a>
          </li>
          <li>
            <a href="#contact">Contacto</a>
          </li>
        </ul>
      </nav>
      <div className="menu-tools">
        <i className="fa-sharp fa-solid fa-bars menu-icon"></i>
        <i className="fa-sharp fa-solid fa-cart-shopping cart-icon"></i>
        <i className="fa-sharp fa-solid fa-right-to-bracket login-icon"></i>
      </div>
    </header>
  );
};

export default Header;
