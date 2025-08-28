import React from 'react'
import banner from '../../Assets/banner.jpg';
import CategoryBar from './CategoryBar';
export default function Banner() {
  return (
    <div className="mx-auto container xl:max-w-[1440px]">
    <div className="relative w-full ">
      <img
        src={banner}
        alt="Home Banner"
        className="w-full h-[500px] object-cover md:h-auto"
      />
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h5 className="text-3xl font-semibold md:text-4xl xl:text-6xl text-left">
          <span><br /></span>A Collection of World <br />Top Class
          <span className=" text-yellow-500 Dancing italic"> Furniture</span>
          <br />
          <a href="/shop" className=" text-black text-sm md:text-lg text-left pl-1 font-medium underline hover:text-yellow-700">
            <span className=' justify-left'>Go to Shop &#8594; </span>
          </a>
        </h5>

      </div>

    </div>
    <CategoryBar />
    </div>
  )
}

