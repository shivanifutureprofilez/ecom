import React, { useState } from 'react'
import newArrival1 from '../../Assets/newArrival1.jpg';
import newArrival2 from '../../Assets/newArrival2.jpg';
import newArrival3 from '../../Assets/newArrival3.jpg';
import newArrival4 from '../../Assets/newArrival4.jpg';
import newArrival5 from '../../Assets/newArrival5.jpg';

const PhotoGrid = () => {
    const [calender, setCalender] = useState("day");
    return (
        <div className='sm:container sm:mx-auto'>
            <div className='mt-12  '>
                <div className='container mx-auto'>


                    <div className="flex flex-wrap items-center justify-between mb-6  p-5 md:p-0">
                        <h2 className="text-2xl md:text-3xl font-semibold leading-none text-gray-800 pt-9 ">Best Seller</h2>
                        <div className='flex justify-center items-center text-center gap-4 sm:gap-6 pt-9  '>
                            <p onClick={() => { setCalender("day") }}
                                className='text-black font-semibold text-[14px] cursor-pointer md:text-[18px] capitalize hover:underline active:underline '>
                                day
                            </p>
                            <p
                                className='text-black font-semibold text-[14px] cursor-pointer md:text-[18px] capitalize hover:underline active:underline '
                                onClick={() => { setCalender("week") }}>
                                week
                            </p>
                            <p
                                className='text-black font-semibold text-[14px] cursor-pointer md:text-[18px] capitalize hover:underline active:underline '
                                onClick={() => { setCalender("month") }}>
                                month
                            </p>
                        </div>
                    </div>
      <hr className="mb-8" />

                    {calender === "day" && (
                        <div className='md:flex md:flex-wrap  '>
                            <div className='flex-[25%] p-2 md:px-2    '>
                                <img src={newArrival1} alt="img1" className='mb-3 md:h-[350px]' />
                                <img src={newArrival2} alt="img1" className='mb-3 md:h-[350px]' />
                            </div>
                            <div className='flex-[25%] p-2 md:px-2 '>
                                <img src={newArrival3} alt="img1" className='mb-3  md:h-[350px]' />
                                <img src={newArrival4} alt="img1" className='mb-3  md:h-[350px]' />
                            </div>
                            <div className='flex-[50%] p-2 md:px-2'>
                                <img src={newArrival5} alt="img1" className=' md:h-[715px] ' />
                            </div>
                        </div>
                    )}
                    {calender === "week" && (
                        <div className='md:flex md:flex-wrap '>
                            <div className='flex-[50%] px-3 md:px-2'>
                                <img src={newArrival5} alt="img1" className='md:h-[715px]  mb-3' />
                            </div>
                            <div className='flex-[25%] px-3 md:px-2 '>
                                <img src={newArrival1} alt="img1" className='mb-3  md:h-[350px]'  />
                                <img src={newArrival2} alt="img1" className='mb-3 md:h-[350px]' />
                            </div>
                            <div className='flex-[25%] px-3 md:px-2 '>
                                <img src={newArrival3} alt="img1" className='mb-3 md:h-[350px]' />
                                <img src={newArrival4} alt="img1" className='mb-3 md:h-[350px]' />
                            </div>

                        </div>
                    )}
                    {calender === "month" && (
                        <div className='md:flex md:flex-wrap '>
                            <div className='flex-[25%] px-4 md:px-2 '>
                                <img src={newArrival1} alt="img1" className='mb-3' />
                            </div>
                            <div className='flex-[25%] px-4 md:px-2 '>
                                <img src={newArrival3} alt="img1" className='mb-3' />
                            </div>
                            <div className='flex-[50%] px-4 md:px-2'>
                                <img src={newArrival5} alt="img1" className='mb-3' />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default PhotoGrid