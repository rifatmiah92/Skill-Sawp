import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules"; // ✅ Pagination + Autoplay support

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const HeroSlider = () => {
  return (
    <div className="hero-slider w-full max-w-6xl mx-auto mt-6">
      <Swiper
        modules={[Pagination, Autoplay]} // ✅ এখানে Pagination ও Autoplay
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }} // ✅ Auto slide every 3s
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        className="rounded-2xl shadow-lg"
      >
        <SwiperSlide>
          <img
            src="https://i.postimg.cc/LX5p2VZg/12.jpg"
            alt="Slide 1"
            className="w-full h-[400px] object-cover rounded-2xl"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://i.pinimg.com/736x/01/3a/9a/013a9a763684472490af6bc7aabfbfa8.jpg"
            alt="Slide 2"
            className="w-full h-[400px] object-cover rounded-2xl"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://i.pinimg.com/1200x/c6/b0/ba/c6b0ba7fb9ed102e6536bc8824173a1e.jpg"
            alt="Slide 3"
            className="w-full h-[400px] object-cover rounded-2xl"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
