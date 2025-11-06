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
            src="/images/slide1.jpg"
            alt="Slide 1"
            className="w-full h-[400px] object-cover rounded-2xl"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="/images/slide2.jpg"
            alt="Slide 2"
            className="w-full h-[400px] object-cover rounded-2xl"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="/images/slide3.jpg"
            alt="Slide 3"
            className="w-full h-[400px] object-cover rounded-2xl"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
