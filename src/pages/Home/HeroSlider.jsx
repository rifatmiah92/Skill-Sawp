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
            src="https://i.pinimg.com/736x/2c/d6/27/2cd6272b1970c05b56e5faad87ea4fc6.jpg"
            alt="Slide 1"
            className="w-full h-[400px] object-cover rounded-2xl"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://i.pinimg.com/736x/37/3c/c4/373cc464e9476d98bfc1d406739d46f3.jpg"
            alt="Slide 2"
            className="w-full h-[400px] object-cover rounded-2xl"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://i.pinimg.com/736x/53/e9/0f/53e90fe8cf1cf0f02beb7c25ad9fd22f.jpg"
            alt="Slide 3"
            className="w-full h-[400px] object-cover rounded-2xl"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
