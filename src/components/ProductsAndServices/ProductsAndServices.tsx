import React from "react";
import "./styles.css";

const ProductsAndServices: React.FC = () => {
  return (
    <div id="products-and-services" className="products-services-container">
      <h2>Produtos e Serviços</h2>
      <img
        src="https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:2000/https://cdn.gamma.app/2cocvxlbdtwp7ex/aa9e804184e340879475e5f453a380ec/original/blob.png"
        alt="Três diferentes arranjos de flores"
      />
      <div className="product-option-container">
        <div className="option">
          <h3>Arranjos Florais</h3>
          <ul>
            <li>Buquês de flores frescas</li>
            <li>Arranjos em vasos</li>
            <li>Cestas ou caixas decorativas</li>
            <li>Coroas de flores</li>
          </ul>
        </div>
        <div className="option">
          <h3>Flores de Corte e em Vasos</h3>
          <ul>
            <li>
              Flores de corte frescas (rosas, lírios, orquídeas, girassóis,
              etc.)
            </li>
            <li>
              Plantas de interior (suculentas, cactos, orquídeas, samambaias,
              bonsais)
            </li>
          </ul>
        </div>
        <div className="option">
          <h3>Produtos Complementares</h3>
          <ul>
            <li>Itens de Jardinagem</li>
            <li>Vasos</li>
            <li>Suportes para plantas</li>
            <li>Velas aromáticas</li>
            <li>Enfeites para jardim</li>
          </ul>
        </div>
        <div className="option">
          <h3>Serviços</h3>
          <ul>
            <li>Itens de Jardinagem</li>
            <li>Vasos</li>
            <li>Suportes para plantas</li>
            <li>Velas aromáticas</li>
            <li>Enfeites para jardim</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductsAndServices;
