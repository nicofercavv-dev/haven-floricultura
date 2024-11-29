import React, { useEffect, useRef, useState } from "react";
import "./styles.css";

const About: React.FC = () => {
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
    <div className="about-container" id="about">
      <h2
        ref={targetRef}
        className={`animated-element ${inView ? "in-view" : ""}`}
      >
        Sobre a Haven
      </h2>
      <div className="about-topics">
        <div>
          <h3
            ref={targetRef}
            className={`animated-element ${inView ? "in-view" : ""}`}
          >
            Nossa História
          </h3>
          <p
            ref={targetRef}
            className={`animated-element ${inView ? "in-view" : ""}`}
          >
            A Haven Floricultura é mais do que uma empresa da região. Somos uma
            família de mentes criativas com uma visão ousada para o mundo. Desde
            nossa fundação em 2024, nossa missão tem sido simples e ambiciosa:
            Oferecer experiências memoráveis e encantadoras.
          </p>
        </div>
        <div>
          <h3
            ref={targetRef}
            className={`animated-element ${inView ? "in-view" : ""}`}
          >
            Compromisso
          </h3>
          <p
            ref={targetRef}
            className={`animated-element ${inView ? "in-view" : ""}`}
          >
            Acreditamos que a criatividade é a força que impulsiona a inovação e
            é isso que nos mantém sempre avançando.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
