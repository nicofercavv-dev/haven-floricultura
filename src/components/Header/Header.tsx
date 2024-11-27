import React from "react";
import "./styles.css";

const Header: React.FC = () => {
  return (
    <div className="header-container">
      <h1 className="header-title">HAVEN</h1>
      <ul className="navigation">
        <li>
          <a
            href="#about"
            onClick={() =>
              document
                .getElementById("about")!
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Sobre
          </a>
        </li>
        <li>
          <a
            href="#products-and-services"
            onClick={() =>
              document
                .getElementById("products-and-services")!
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Produtos e Serviços
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={() =>
              document
                .getElementById("contact")!
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Contato
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
