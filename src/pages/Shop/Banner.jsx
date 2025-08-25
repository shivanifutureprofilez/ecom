import React from 'react'
import banner from '../../Assets/banner.jpg'
import breadcumb from '../../Assets/breadcumb.jpg'

function Banner({title="Shop"}) {
  return (
    <div className='flex flex-wrap items-center relative   '>
        <img src={breadcumb}  className=' h-[300px] object-cover'></img>    
        
        <div className='w-full h-full bg-[#000] opacity-[0.4] absolute'></div>
        <div className='absolute w-full left-[0px] top-[50%] text-center z-[9px] '>
          <h2 className=" text-white text-center text-center text-xl">
            <span><br /></span>{title} 
          </h2>
          <a href="/" className=" text-white text-center pl-0 font-normal underline hover:text-yellow-700">
            home /&nbsp; 
          </a>
          <a href="" className=" text-white text-center pl-0 font-normal underline hover:text-yellow-700">
            {title}
          </a>
        </div>
         {/* <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center pt-[85px]">
      </div> */}
    </div>
  )
}

export default Banner;
    // background: #00000030;
    // width: 100%;
    // height: 100%;
    // position: absolute;
    // top: 0;
    // left: 0;