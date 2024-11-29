import React from "react";
import "./styles.css";
import x from "../../assets/X.svg";
import Carrousel from "../Carrousel/Carrousel";

interface CarrouselModalProps {
  closeCarrouselModal: () => void;
  initialSlide: number;
}

const CarrouselModal: React.FC<CarrouselModalProps> = ({
  closeCarrouselModal,
  initialSlide,
}) => {
  return (
    <div className="carrousel-modal-container">
      <button onClick={closeCarrouselModal}>
        <img src={x} alt="X" />
      </button>
      <Carrousel initialSlide={initialSlide} />
    </div>
  );
};

export default CarrouselModal;
