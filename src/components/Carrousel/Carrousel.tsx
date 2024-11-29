import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper"; // Importa o tipo

import "../../../node_modules/swiper/swiper-bundle.css";
import "../../../node_modules/swiper/modules/free-mode.css";
import "../../../node_modules/swiper/modules/navigation.css";
import "../../../node_modules/swiper/modules/thumbs.css";

import "./styles.css";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";

interface CarrouselProps {
  initialSlide: number;
}

const Carrousel: React.FC<CarrouselProps> = ({ initialSlide }) => {
  // Atualize para usar SwiperClass como tipo
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  window.addEventListener('resize', () => {
    if (window.innerWidth < 1025) return setIsMobileScreen(true);
  });

  const styles = {
    "--swiper-navigation-color": "#fcfbf8",
  } as React.CSSProperties;

  return (
    <>
      <Swiper
        style={styles}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
        initialSlide={initialSlide}
      >
        {[...Array(9)].map((_, index) => (
          <SwiperSlide key={`slide-${index}`}>
            <img
              src={`${location.origin}/images/img-${index + 1}.jpg`}
              alt={`Imagem ${index + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={(swiper) => setThumbsSwiper(swiper)}
        spaceBetween={10}
        slidesPerView={isMobileScreen ? 3 : 9}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {[...Array(9)].map((_, index) => (
          <SwiperSlide key={`thumb-${index}`}>
            <img
              className="lower-slider-img"
              src={`${location.origin}/images/img-${index + 1}.jpg`}
              alt={`Thumbnail ${index + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carrousel;
