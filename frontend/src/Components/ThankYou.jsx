import React from 'react'
import { MdDoneOutline } from "react-icons/md";
import { CiFaceSmile } from "react-icons/ci";

function ThankYou() {
    return (
        <div className='container mx-auto'>
            <div className='absolute top-[45%] left-[42%]'>
                <div className='flex '>
                    <h1 className='font-semibold text-2xl   md:text-3xl text-center  sm:text-left '>Order Confirmed </h1>
                    <MdDoneOutline size={32} className=' text-green-500 pl-2' />
                </div>
                <div className='flex '>
                    <h3 className='align-center font-semibold text-2xl   md:text-3xl text-center  sm:text-left '>Thank You So Much for Choosing Furnixar</h3>
                    <CiFaceSmile size={32} className=' text-green-500 pl-2'/>
                </div>
            </div> 
        </div>
    )
}

export default ThankYou;