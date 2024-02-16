import "./contact.css";

function Contact() {
  return (
    <div className="form-container">
      <h2 className="contact-title">Contactanos</h2>
      <form action="#" className="form-contact">
        <div className="form-name">
          <label htmlFor="name">Nombre</label>
          <input type="text" id="name" required />
        </div>

        <div className="form-surname">
          <label htmlFor="surname">Apellido</label>
          <input type="text" id="surname" required />
        </div>

        <div className="form-email">
          <label htmlFor="email">Correo Electrónico</label>
          <input type="email" id="email" required />
        </div>

        <div className="form-message">
          <label htmlFor="message">Asunto</label>
          <textarea id="message" rows="4" required></textarea>
        </div>
        <button type="submit" className="form-btn">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Contact;
