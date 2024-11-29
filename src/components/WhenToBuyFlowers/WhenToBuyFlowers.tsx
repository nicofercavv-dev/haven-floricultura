import React, { useEffect, useRef, useState } from "react";
import "./styles.css";

const WhenToBuyFlowers: React.FC = () => {
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
      { threshold: 0.5 } // O elemento deve estar 50% visível
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
      } when-to-buy-container`}
    >
      <h2>Quando comprar flores</h2>
      <div className="motives-list">
        <div className="motive-option">
          <div className="box-1">1</div>
          <div className="motive-text motive-text-1">
            <h3>Aniversários</h3>
            <p>Celebre com estilo e beleza, criando um presente memorável.</p>
            <div className="separator" />
          </div>
        </div>
        <div className="motive-option">
          <div className="box-2">2</div>
          <div className="motive-text motive-text-2">
            <h3>Casamentos</h3>
            <p>Enfeite seu dia especial com arranjos únicos e sofisticados.</p>
            <div className="separator" />
          </div>
        </div>
        <div className="motive-option">
          <div className="box-3">3</div>
          <div className="motive-text motive-text-3">
            <h3>Eventos Corporativos</h3>
            <p>Crie um ambiente elegante e acolhedor para seus eventos .</p>
            <div className="separator" />
          </div>
        </div>
        <div className="motive-option">
          <div className="box-4">4</div>
          <div className="motive-text   motive-text-4">
            <h3>Datas Especiais</h3>
            <p>
              Cada detalhe da Haven é pensado para criar um ambiente de paz e
              inspiração, proporcionando aos nossos clientes uma experiência de
              beleza natural e serenidade.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhenToBuyFlowers;
