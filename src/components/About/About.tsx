import React from "react";
import "./styles.css";

const About: React.FC = () => {
  return (
    <div className="about-container" id="about">
      <h2>Sobre a Haven</h2>
      <div className="about-topics">
        <div>
          <h3>Nossa História</h3>
          <p>
            A Haven Floricultura é mais do que uma empresa da região. Somos uma
            família de mentes criativas com uma visão ousada para o mundo. Desde
            nossa fundação em 2024, nossa missão tem sido simples e ambiciosa:
            Oferecer experiências memoráveis e encantadoras.
          </p>
        </div>
        <div>
          <h3>Compromisso</h3>
          <p>
            Acreditamos que a criatividade é a força que impulsiona a inovação e
            é isso que nos mantém sempre avançando.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
