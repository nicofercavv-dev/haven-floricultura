import React, { useEffect, useRef, useState } from "react";
import "./styles.css";

const Contact: React.FC = () => {
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
      id="contact"
      className={`animated-element ${
        inView ? "in-view" : ""
      } contact-container`}
    >
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
