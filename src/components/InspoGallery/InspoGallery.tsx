import React, { useEffect, useRef, useState } from "react";
import "./styles.css";

interface InspoGalleryProps {
  openCarrouselModal: (initialSlide: number) => void;
}

const InspoGallery: React.FC<InspoGalleryProps> = ({ openCarrouselModal }) => {
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
      } inspo-gallery-container`}
    >
      <h2>Galeria de Inspiração</h2>
      <div className="photos-container">
        <div className="gallery-photo" onClick={() => openCarrouselModal(0)}>
          <img
            className="img-1"
            src="https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/height:400/https://cdn.gamma.app/2cocvxlbdtwp7ex/6369e288545c47dbb0f48214cf410942/original/blob.png"
            alt="Três potes de vidro com flores"
          />
        </div>
        <div className="gallery-photo" onClick={() => openCarrouselModal(1)}>
          <img
            className="img-2"
            src="https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/height:400/https://cdn.gamma.app/2cocvxlbdtwp7ex/b4d317e59e3446879ea50896eae3549b/original/blob.png"
            alt="Dois potes de vidro com água e flores"
          />
        </div>
        <div className="gallery-photo" onClick={() => openCarrouselModal(2)}>
          <img
            className="img-3"
            src="https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/height:400/https://cdn.gamma.app/2cocvxlbdtwp7ex/8bceaf72a6ca4fe9a9caace385b7a0cb/original/blob.png"
            alt="Vaso de flores"
          />
        </div>
        <div className="gallery-photo" onClick={() => openCarrouselModal(3)}>
          <img
            className="img-4"
            src="https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/height:400/https://cdn.gamma.app/2cocvxlbdtwp7ex/434523105a2c42c0a92ed1c4aca31842/original/blob.png"
            alt="Mesa ornamentada com flores"
          />
        </div>
        <div className="gallery-photo" onClick={() => openCarrouselModal(4)}>
          <img
            className="img-5"
            src="https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/height:400/https://cdn.gamma.app/2cocvxlbdtwp7ex/beb7b3e4b9a44b03b0094125c98e0b0c/original/blob.png"
            alt="Banco ornamentado"
          />
        </div>
        <div className="gallery-photo" onClick={() => openCarrouselModal(5)}>
          <img
            className="img-6"
            src="https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/height:400/https://cdn.gamma.app/2cocvxlbdtwp7ex/62b373cf53714e0dbab70f60f19eeec7/original/blob.png"
            alt="Placa suspensa com flores"
          />
        </div>
        <div className="gallery-photo" onClick={() => openCarrouselModal(6)}>
          <img
            className="img-7"
            src="https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/height:400/https://cdn.gamma.app/2cocvxlbdtwp7ex/0869465a43b64394ac575e5dfce2dbc7/original/blob.png"
            alt="Buquê de flores"
          />
        </div>
        <div className="gallery-photo" onClick={() => openCarrouselModal(7)}>
          <img
            className="img-8"
            src="https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/height:400/https://cdn.gamma.app/2cocvxlbdtwp7ex/f858250c7de14eaaa127a6afcde69b1f/original/blob.png"
            alt="Mini buquês"
          />
        </div>
        <div className="gallery-photo" onClick={() => openCarrouselModal(8)}>
          <img
            className="img-9"
            src="https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/height:400/https://cdn.gamma.app/2cocvxlbdtwp7ex/3c4d39938f7e47d494f998ef0c36a3a5/original/blob.png"
            alt="Buquê enrolado em papel"
          />
        </div>
      </div>
    </div>
  );
};

export default InspoGallery;
