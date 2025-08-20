import React, { useState } from 'react'
import newArrival1 from '../../Assets/newArrival1.jpg';
import newArrival2 from '../../Assets/newArrival2.jpg';
import newArrival3 from '../../Assets/newArrival3.jpg';
import newArrival4 from '../../Assets/newArrival4.jpg';
import newArrival5 from '../../Assets/newArrival5.jpg';

const PhotoGrid = () => {
    const [calender, setCalender] = useState("day");
    return (
        <div className='max-w-6xl mx-auto mt-12 px-4'>
            <div className='flex justify-between items-center'>
                <div>
                    <h2 className='text-3xl font-bold text-gray-800'>Best Seller</h2>
                    <hr className="mb-8" />
                </div>    
                
                
                <div className='flex justify-center items-center text-center gap-3 '>
                    <p onClick={() => { setCalender("day") }}
                        className='text-black font-normal text-[14px] capitalize hover:underline active:underline '>
                        day
                    </p>
                    <p
                        className='text-black font-normal text-[14px] capitalize hover:underline active:underline '
                        onClick={() => { setCalender("week") }}>
                        week
                    </p>
                    <p
                        className='text-black font-normal text-[14px] capitalize hover:underline active:underline '
                        onClick={() => { setCalender("month") }}>
                        month
                    </p>
                </div>
                
                
            </div>
              {calender === "day" && (
                <div className='flex flex-wrap px-2'>
                    <div className='flex-[25%] px-2'>
                        <img src={newArrival1} alt="img1" className='mb-4'/>
                        <img src={newArrival2} alt="img1"/>
                    </div>
                    <div className='flex-[25%] px-2'>
                        <img src={newArrival3} alt="img1" className='mb-4'/>
                        <img src={newArrival4} alt="img1"/>
                    </div>
                    <div className='flex-[50%] px-2'>
                        <img src={newArrival5} alt="img1" className='md:h-[590px]'/>
                    </div>
                </div>
            )}
              {calender === "week" && (
                <div className='flex flex-wrap px-2'>
                      <div className='flex-[50%] px-2'>
                        <img src={newArrival5} alt="img1"/>
                    </div>
                    <div className='flex-[25%] px-2'>
                        <img src={newArrival1} alt="img1" />
                        <img src={newArrival2} alt="img1"/>
                    </div>
                    <div className='flex-[25%] px-2'>
                        <img src={newArrival3} alt="img1"/>
                        <img src={newArrival4} alt="img1"/>
                    </div>
                  
                </div>
            )}
            {calender === "month" && (
                <div className='flex flex-wrap px-2'>
                    <div className='flex-[25%] px-2'>
                        <img src={newArrival1} alt="img1"/>
                    </div>
                    <div className='flex-[25%] px-2'>
                        <img src={newArrival3} alt="img1"/>
                    </div>
                    <div className='flex-[50%] px-2'>
                        <img src={newArrival5} alt="img1"/>
                    </div>
                </div>
            )}
        </div>
    )
}

export default PhotoGrid