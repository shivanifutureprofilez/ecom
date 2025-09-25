import { LiaSignatureSolid } from "react-icons/lia";
import { Swiper, SwiperSlide } from 'swiper/react';
import { GiGooeySword } from "react-icons/gi";
import { SiCocacola } from "react-icons/si";
import { GiAnthem } from "react-icons/gi";
import { GiAqueduct } from "react-icons/gi";
import { GiBlackBridge } from "react-icons/gi";
import { GiBinoculars } from "react-icons/gi";
import { GiBrainTentacle } from "react-icons/gi";
import { SiTheboringcompany } from "react-icons/si";
import { SiGnuicecat } from "react-icons/si";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Autoplay, Navigation } from "swiper/modules";
import { MdAdd } from "react-icons/md";
export default function HomeSwiper() {
  return (
    <div className="bg-[#f5f5f5]">
    {/* <div className="container mx-auto bg-[#f5f5f5]"> */}
      <div className=' bg-[#f5f5f5] container mx-auto p-5  mt-10 text-black  flex justify-center item-center '>
        <div className="max-w-full    bg-[#f5f5f5]">
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
      
      <SwiperSlide className=""><SiTheboringcompany className=" mb-4  w-full mx-auto" size={100} /></SwiperSlide>
      <SwiperSlide className=""><SiGnuicecat className=" mb-4  w-full mx-auto" size={100} /></SwiperSlide>
      <SwiperSlide className=""><LiaSignatureSolid className=" mb-4  w-full mx-auto" size={100} /></SwiperSlide>
      <SwiperSlide><MdAdd className=" mb-4  text-center w-full mx-auto" size={100} /></SwiperSlide>
      <SwiperSlide><GiGooeySword className=" mb-4  text-center w-full mx-auto" size={100} /></SwiperSlide>
      <SwiperSlide><SiCocacola className=" mb-4  text-center w-full mx-auto" size={100} /></SwiperSlide>
      <SwiperSlide><GiAnthem className=" mb-4 text-center w-full mx-auto" size={100} /></SwiperSlide>
      <SwiperSlide><GiAqueduct className=" mb-4  text-center w-full mx-auto" size={100} /></SwiperSlide>
      <SwiperSlide><GiBlackBridge className=" mb-4  text-center w-full mx-auto" size={100} /></SwiperSlide>
      <SwiperSlide><GiBinoculars className=" mb-4  text-center w-full mx-auto" size={100} /></SwiperSlide>
      <SwiperSlide><GiBrainTentacle className=" mb-4  text-center w-full mx-auto" size={100} /></SwiperSlide>
      
    </Swiper>
    </div>
    </div>
    {/* </div> */}
    </div>
  )
}
