import React, { useEffect, useRef, useState } from "react";
import "./styles.css";

const MissionVisionAndValues: React.FC = () => {
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
    <div className="main-container">
      <div
        ref={targetRef}
        className={`animated-element ${
          inView ? "in-view" : ""
        } mission-topics-container`}
      >
        <h2>Missão, Visão e Valores</h2>
        <div className="mission-topics-inner-container">
          <div className="topic">
            <div className="number">1</div>
            <div className="topic-text">
              <h3>Missão</h3>
              <p>
                Oferecer experiências memoráveis e encantadoras através de
                arranjos florais elegantes e personalizados. Proporcionando aos
                clientes momentos especiais com toda beleza e emoção de nossas
                flores e arranjos com criatividade e estilo.
              </p>
            </div>
          </div>
          <div className="topic">
            <div className="number">2</div>
            <div className="topic-text">
              <h3>Visão</h3>
              <p>
                Ser a floricultura de referência da região, conhecida pela nossa
                criatividade e produtos e serviços de alta qualidade.
              </p>
            </div>
          </div>
          <div className="topic">
            <div className="number">3</div>
            <div className="topic-text">
              <h3>Valores</h3>
              <p>
                Inovação, criatividade, responsabilidade ambiental, excelência,
                comunicação e confiança.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={targetRef}
        className={`animated-element ${inView ? "in-view" : ""} partners-image`}
      />
    </div>
  );
};

export default MissionVisionAndValues;
