import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

function Tags() {
    return (
        <div className='border-t border-b border-[#e5e7eb] mt-5 sm:mt-7 lg:mt-10 py-5 sm:py-7 lg:py-10' >
            <div className='md:flex justify-between items-center text-center '>
                <div className='flex items-center justify-center gap-4'>
                    <h6 className='font-medium text-base block mt-2'>Tags: </h6>
                    <div className=' flex flex-wrap gap-[10px]'>
                        <button className='border py-[7px]  px-[8px] hover:bg-yellow-700 hover:text-white'><span className="pl-2 pr-2 font-normal">Chair</span></button>
                        <button className='border py-[7px]  px-[8px] hover:bg-yellow-700 hover:text-white'><span className="pl-2 pr-2">Art & Paint</span></button>
                        <button className='border py-[7px]  px-[8px] hover:bg-yellow-700 hover:text-white'><span className="pl-2 pr-2">Mirror</span></button>
                        <button className='border py-[7px]  px-[8px] hover:bg-yellow-700 hover:text-white'><span className="pl-2 pr-2">Table</span></button>
                        <button className='border py-[7px]  px-[8px] hover:bg-yellow-700 hover:text-white'><span className="pl-2 pr-2">Lamp</span></button>
                    </div>
                </div>
                <div className='flex items-center justify-left md:justify-center gap-4 mt-3 md:mt-0'>
                    <h6 className='font-medium text-base block '>Share:</h6>
                    <ul className='flex items-center gap-6 '>
                        <li className="flex items-center gap-2"><FaFacebookF className='hover:text-yellow-700' /> </li>
                        <li className="flex items-center gap-2"><FaTwitter className='hover:text-yellow-700' /> </li>
                        <li className="flex items-center gap-2"><FaInstagram className='hover:text-yellow-700' /> </li>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Tags;