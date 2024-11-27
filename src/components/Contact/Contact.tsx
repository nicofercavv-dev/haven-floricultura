import React from "react";
import "./styles.css";

const Contact: React.FC = () => {
  return (
    <div id="contact" className="contact-container">
      <h2>Entre em Contato</h2>
      <div className="options-container">
        <div className="contact-option">
          <h3>Telefone</h3>
          <p>(99) 99146-3464</p>
        </div>
        <div className="contact-option">
          <h3>Instagram</h3>
          <p>@havenfloricultura</p>
        </div>
        <div className="contact-option">
          <h3>Email</h3>
          <a href="mailto:haven@floricultura.com.br" target="_blank">
            haven@floricultura.com.br
          </a>
        </div>
        <div className="contact-option">
          <h3>Endereço</h3>
          <p>Rua Alegre, 123, Centro - Açailândia- MA</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
