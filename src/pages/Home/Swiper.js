import { LiaSignatureSolid } from "react-icons/lia";
import { Swiper, SwiperSlide } from 'swiper/react';
import { GiGooeySword } from "react-icons/gi";
import { SiCocacola } from "react-icons/si";
import { GiAnthem } from "react-icons/gi";
import { GiAqueduct } from "react-icons/gi";
import { GiBlackBridge } from "react-icons/gi";
import { GiBinoculars } from "react-icons/gi";
import { GiBrainTentacle } from "react-icons/gi";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Autoplay, Navigation } from "swiper/modules";
import { MdAdd } from "react-icons/md";
// Import Swiper styles

export default () => {
  return (
    <div className='p-[40px] bg-[#f5f5f5] mt-10 text-black items-center  flex  justify-center'>
      <Swiper
        spaceBetween={30}
        //  slidesPerView={8}
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
        breakpoints={
          {
            468: {
              slidesPerView: 1,
            },
            767: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 7,
            },
          }
        }
      >
      <SwiperSlide className=""><LiaSignatureSolid className=" mb-4 text-yellow-700  w-full mx-auto" size={100} /></SwiperSlide>
      <SwiperSlide><MdAdd className=" mb-4  text-yellow-700 text-center w-full mx-auto" size={100} /></SwiperSlide>
      <SwiperSlide><GiGooeySword className=" mb-4  text-yellow-700 text-center w-full mx-auto" size={100} /></SwiperSlide>
      <SwiperSlide><SiCocacola className=" mb-4  text-yellow-700 text-center w-full mx-auto" size={100} /></SwiperSlide>
      <SwiperSlide><GiAnthem className=" mb-4  text-yellow-700 text-center w-full mx-auto" size={100} /></SwiperSlide>
      <SwiperSlide><GiAqueduct className=" mb-4  text-yellow-700 text-center w-full mx-auto" size={100} /></SwiperSlide>
      <SwiperSlide><GiBlackBridge className=" mb-4  text-yellow-700 text-center w-full mx-auto" size={100} /></SwiperSlide>
      <SwiperSlide><GiBinoculars className=" mb-4  text-yellow-700 text-center w-full mx-auto" size={100} /></SwiperSlide>
      <SwiperSlide><GiBrainTentacle className=" mb-4  text-yellow-700 text-center w-full mx-auto" size={100} /></SwiperSlide>
    </Swiper>
    </div >
  );
};