import React from 'react'
import banner from '../../Assets/banner.jpg';
import CategoryBar from './CategoryBar';
export default function Banner() {
  return (
    <div className="mx-auto container justify-item-center lg:max-w-full">
    <div className="relative w-full ">
      
      <img
        src={banner}
        alt="Home Banner"
        className="mx-auto max-w-full h-[500px] object-cover md:h-auto"
      />
      
      <div className="absolute max-w-[751px] top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        <h5 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-snug sm:leading-snug md:leading-snug lg:leading-snug">
          A Collection of World Top Class
          <span className=" text-yellow-500 Dancing italic"> Furniture</span>
          
        </h5>
        <div className=''>
          <a href="/shop" className=" text-black text-sm md:text-lg text-left pl-1 font-medium hover:underline hover:text-yellow-700">
            <span className=' justify-left'>Go to Shop &#8594; </span>
          </a>
        </div>
      </div>

    </div>
    <CategoryBar />
    </div>
  )
}

