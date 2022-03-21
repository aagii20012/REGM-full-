import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function ImageSlide() {
  let slide = [];
  for (var i = 0; i < 6; i++) {
    let key = "slide" + i;
    let url = "img/slide/Bitmap (" + i + ").jpg";
    let title = "imgTitle (" + i + ")";
    slide.push(
      <SwiperSlide key={key}>
        <img src={url} alt={title} style={{ width: "100%" }} />
      </SwiperSlide>
    );
  }

  return (
    <Swiper
      spaceBetween={25}
      slidesPerView={6}
      loop={true}
      autoplay={{
        delay: 2000,
      }}
      modules={[Autoplay]}
      onSwiper={(swipper) => console.log(swipper)}>
      {slide.map((slide) => slide)}
    </Swiper>
  );
}

export default ImageSlide;
