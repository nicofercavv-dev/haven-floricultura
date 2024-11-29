import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
import flower1 from "../../assets/flower.svg";
import flower2 from "../../assets/flower2.svg";
import flower3 from "../../assets/flower3.svg";

const MainProducts: React.FC = () => {
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
      { threshold: 0.1 } // O elemento deve estar 50% visível
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
      className={`animated-element ${
        inView ? "in-view" : ""
      } main-products-container`}
    >
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
