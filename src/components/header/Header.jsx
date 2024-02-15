import "./header.css";
import logo from "../../assets/img/caffe-logo-white.png";
// import { MenuContext } from "../../menuContext";
import { useContext } from "react";
import { MenuContext } from "../../menuContext";
import Menu from "../menu/Menu";

const Header = () => {
  const { toggleMenu } = useContext(MenuContext);

  return (
    <header>
      <img src={logo} alt="prueba" className="logo-caffe" />
      <Menu />
      <div className="menu-tools">
        <a onClick={toggleMenu}>
          <i className="fa-sharp fa-solid fa-bars menu-icon"></i>
        </a>
        <i className="fa-sharp fa-solid fa-cart-shopping cart-icon"></i>
        <i className="fa-sharp fa-solid fa-right-to-bracket login-icon"></i>
      </div>
    </header>
  );
};

export default Header;
