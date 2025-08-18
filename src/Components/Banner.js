import React from 'react'
import banner from '../Assets/banner.jpg';

export const Banner = () => {
  return (
    // <div className='banner'>
    //  <img
    //     src={banner} 
    //     alt="Hero"
    //     className="w-full mt-4"
    //   />
    //   <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
    //     <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
    //       A Collection of World<br />Top Class <span className="text-yellow-700 italic">Furniture</span>
    //     </h1>
    //     <a href="/shop" className="text-blue-900 text-lg font-medium underline hover:text-yellow-700">
    //       Go to Shop
    //     </a>
    // </div>

     <div className="relative w-full h-[700px]">
      <img
        src={banner}
        alt="Hero"
        className="w-full h-full object-cover"
      />
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h3 class="text-3xl sm:text-2xl md:text-6xl lg:text-7xl leading-snug sm:leading-snug md:leading-snug lg:leading-snug">
            <span><br></br></span>A Collection of World Top Class 
            <span class="font-secondary text-primary font-normal"> Furniture</span>
            </h3>
        <a href="/shop" className="text-blue-900 text-lg font-medium underline hover:text-yellow-700">
          Go to Shop ->
        </a>
      </div>
    </div>
  )
}
