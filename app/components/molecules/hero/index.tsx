"use client";
import React from "react";
import SwiperCore, { Pagination, Autoplay, Lazy, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";

SwiperCore.use([Navigation, Pagination, Autoplay, Lazy]);

function Hero() {
  return (
    <div className="w-full relative">
      <Swiper
        effect="fade"
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        autoplay={{ delay: 3000 }}
        modules={[Pagination, Autoplay, Lazy]}
      >
        <SwiperSlide>
          <img
            fetchPriority="high"
            src="./images/hero.png"
            alt="Hero"
            className="object-cover object-center w-full h-64 md:h-screen"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            fetchPriority="high"
            src="./images/hero.png"
            alt="Hero"
            className="object-cover object-center w-full h-64 md:h-screen"
          />
        </SwiperSlide>
      </Swiper>
      <div
        className="swiper-button-next"
        style={{
          position: "absolute",
          top: "50%",
          right: 20,
          transform: "translateY(-50%)",
          background: "#fff",
          color: "black",
          padding: "10px",
          zIndex: 10,
        }}
      >
        <IoIosArrowForward size={24} />
      </div>
      <div
        className="swiper-button-prev"
        style={{
          position: "absolute",
          top: "50%",
          left: 20,
          transform: "translateY(-50%)",
          background: "#fff",
          color: "black",
          padding: "10px",
          zIndex: 10,
        }}
      >
        {/* icon */}
        <IoIosArrowBack color="black" size={24} />
      </div>
    </div>
  );
}

export default Hero;
