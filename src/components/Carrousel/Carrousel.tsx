import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

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
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fcfbf8",
          "--swiper-pagination-color": "#fcfbf8",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
        initialSlide={initialSlide}
      >
        <SwiperSlide>
          <img src={`${location.origin}/images/img-1.jpg`} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={`${location.origin}/images/img-2.jpg`} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={`${location.origin}/images/img-3.jpg`} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={`${location.origin}/images/img-4.jpg`} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={`${location.origin}/images/img-5.jpg`} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={`${location.origin}/images/img-6.jpg`} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={`${location.origin}/images/img-7.jpg`} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={`${location.origin}/images/img-8.jpg`} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={`${location.origin}/images/img-9.jpg`} />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={9}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="lower-slider-img"
            src={`${location.origin}/images/img-1.jpg`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="lower-slider-img"
            src={`${location.origin}/images/img-2.jpg`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="lower-slider-img"
            src={`${location.origin}/images/img-3.jpg`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="lower-slider-img"
            src={`${location.origin}/images/img-4.jpg`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="lower-slider-img"
            src={`${location.origin}/images/img-5.jpg`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="lower-slider-img"
            src={`${location.origin}/images/img-6.jpg`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="lower-slider-img"
            src={`${location.origin}/images/img-7.jpg`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="lower-slider-img"
            src={`${location.origin}/images/img-8.jpg`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="lower-slider-img"
            src={`${location.origin}/images/img-9.jpg`}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carrousel;
