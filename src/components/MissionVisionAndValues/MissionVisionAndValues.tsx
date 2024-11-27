import React from "react";
import "./styles.css";

const MissionVisionAndValues: React.FC = () => {
  return (
    <div className="main-container">
      <div className="mission-topics-container">
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
      <div className="partners-image" />
    </div>
  );
};

export default MissionVisionAndValues;
