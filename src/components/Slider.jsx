import React from 'react';
import { slider1, slider2 } from '../assets';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Slider = () => {
    return (
      <Swiper
        spaceBetween={25}
        breakpoints={{
            768: {
                slidesPerView: 2,
              },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className={`bg-slider sm:px-20 sm:py-6 px-6 py-4`}
      >
        <SwiperSlide><img src={slider1} alt="Slider1" className="d-block shadow-lg rounded w-100 mb-2" /></SwiperSlide>
        <SwiperSlide><img src={slider2} alt="Slider1" className="d-block shadow-lg rounded w-100 mb-2" /></SwiperSlide>
        <SwiperSlide><img src={slider1} alt="Slider1" className="d-block shadow-lg rounded w-100 mb-2" /></SwiperSlide>
        <SwiperSlide><img src={slider2} alt="Slider1" className="d-block shadow-lg rounded w-100 mb-2" /></SwiperSlide>
        <SwiperSlide><img src={slider1} alt="Slider1" className="d-block shadow-lg rounded w-100 mb-2" /></SwiperSlide>
        <SwiperSlide><img src={slider2} alt="Slider1" className="d-block shadow-lg rounded w-100 mb-2" /></SwiperSlide>
        <SwiperSlide><img src={slider1} alt="Slider1" className="d-block shadow-lg rounded w-100 mb-2" /></SwiperSlide>
        <SwiperSlide><img src={slider2} alt="Slider1" className="d-block shadow-lg rounded w-100 mb-2" /></SwiperSlide>
      </Swiper>
    );
  }

export default Slider
