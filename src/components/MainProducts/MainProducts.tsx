import React from "react";
import "./styles.css";
import flower1 from "../../assets/flower.svg";
import flower2 from "../../assets/flower2.svg";
import flower3 from "../../assets/flower3.svg";

const MainProducts: React.FC = () => {
  return (
    <div className="main-products-container">
      <h2>Principais Produtos</h2>
      <div className="product-options">
        <div className="product-option">
          <img src={flower1} alt="Ícone de flor" className="flower-icon" />
          <h3>Arranjos Florais Personalizados</h3>
          <div className="product-image-1" />
          <p>Criamos arranjos únicos que refletem seu estilo e ocasião.</p>
        </div>
        <div className="product-option">
          <img src={flower2} alt="Ícone de flor" className="flower-icon" />
          <h3>Flores de Corte</h3>
          <div className="product-image-2" />
          <p>Oferecemos uma variedade de flores frescas para você escolher.</p>
        </div>
        <div className="product-option">
          <img src={flower3} alt="Ícone de flor" className="flower-icon" />
          <h3>Buquês Personalizados</h3>
          <div className="product-image-3" />
          <p>Crie um buquê especial para presentear alguém que você ama.</p>
        </div>
      </div>
    </div>
  );
};

export default MainProducts;
