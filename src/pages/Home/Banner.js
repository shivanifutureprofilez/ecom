import React from 'react'
import banner from '../../Assets/banner.jpg';
export default function Banner() {
  return (
    <div className="relative w-full ">
      <img
        src={banner}
        alt="banner"
        className="w-full h-[500px] object-cover md:h-auto"
      />
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h5 className="text-2xl sm:text-2xl md:text-6xl text-left">
          <span><br /></span>A Collection of World <br/>Top Class
          <span className=" text-yellow-500 Dancing italic"> Furniture</span>
        </h5>
        <a href="/shop" className=" text-blue-900 text-lg text-left pl-0 font-medium underline hover:text-yellow-700">
          Go to Shop &#8594;
        </a>
      </div>
    </div>
  )
}

