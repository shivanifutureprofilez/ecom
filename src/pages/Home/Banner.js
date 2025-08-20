import React from 'react'
import banner from '../../Assets/banner.jpg';
import { FaLongArrowAltRight } from "react-icons/fa";
export default function Banner() {
  return (
    <div className="relative w-full ">
      <img
        src={banner}
        alt="banner"
        className="w-full h-[500px] object-cover md:h-auto"
      />
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h3 className="text-3xl sm:text-2xl md:text-6xl lg:text-7xl">
          <span><br /></span>A Collection of World Top Class
          <span className=" text-yellow-500 font-sans italic"> Furniture</span>
        </h3>
        <a href="/shop" className=" text-blue-900 text-lg font-medium underline hover:text-yellow-700">
          Go to Shop &#8594;
        </a>
      </div>
    </div>
  )
}

