import React, { useEffect, useRef, useState } from "react";
import "./styles.css";

const ProductsAndServices: React.FC = () => {
  const [inView, setInView] = useState(false);
  const [scrollingDown, setScrollingDown] = useState(true);
  const lastScrollTop = useRef(0);
  const targetRef = useRef(null);

  // Monitorando a direção do scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop.current) {
        // Rolando para baixo
        setScrollingDown(true);
      } else {
        // Rolando para cima
        setScrollingDown(false);
      }

      lastScrollTop.current = scrollTop <= 0 ? 0 : scrollTop; // Evita valores negativos
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Observer para detectar quando o componente entra em vista
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Se o elemento entrou em vista e estamos rolando para baixo, ativa a animação
        if (entry.isIntersecting && scrollingDown) {
          setInView(true); // Ativa a animação
        }
      },
      { threshold: 0.2 } // O elemento deve estar 50% visível
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [scrollingDown]);

  return (
    <div
      ref={targetRef}
      id="products-and-services"
      className={`animated-element ${
        inView ? "in-view" : ""
      } products-services-container`}
    >
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
