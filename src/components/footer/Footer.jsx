import "./footer.css";

const Footer = () => {
  return (
    <footer id="contact">
      <div className="footer-top-container">
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-x-twitter"></i>
        <i class="fa-brands fa-square-facebook"></i>
      </div>
      <div className="footer-middle-container">
        <p className="phone-footer">
          <i class="fa-brands fa-whatsapp"></i> +54 9 351 351351
        </p>
        <p className="adress-footer">
          <i class="fa-sharp fa-solid fa-map-pin"></i> Av. Madrid 35, Córdoba,
          Argentina.
        </p>
      </div>
      <div className="footer-bottom-container">
        <p>Todos los derechos reservados. Copyright 2023.</p>
        <p>Desarrollado por Gastón Capdevila.</p>
      </div>
    </footer>
  );
};

export default Footer;
