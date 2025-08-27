import React from 'react'
import newArrival5 from '../../Assets/newArrival5.jpg';
import portfolio1 from '../../Assets/portfolio1.jpg';
import portfolio2 from '../../Assets/portfolio2.jpg';
import portfolio3 from '../../Assets/portfolio3.jpg';
import portfolio4 from '../../Assets/portfolio4.jpg';
import portfolio6 from '../../Assets/portfolio6.jpg';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


export default function GallerySlider() {
  return (
    <div className=''>
      <Swiper
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
        slidesPerView={1}
      >
        <SwiperSlide><img src={newArrival5} alt="img1" className='w-full h-[400px] object-cover' /></SwiperSlide>
        <SwiperSlide> <img src={portfolio1} alt="img1" className='w-full h-[400px] object-cover' /></SwiperSlide>
        <SwiperSlide><img src={portfolio2} alt="img1" className='w-full h-[400px] object-cover' /></SwiperSlide>
        <SwiperSlide> <img src={portfolio3} alt="img1" className='w-full h-[400px] object-cover' /></SwiperSlide>
        <SwiperSlide><img src={portfolio4} alt="img1" className='w-full h-[400px] object-cover' /></SwiperSlide>
        <SwiperSlide> <img src={portfolio6} alt="img1" className='w-full h-[400px] object-cover' /></SwiperSlide>

      </Swiper>
    </div>

  )
}
