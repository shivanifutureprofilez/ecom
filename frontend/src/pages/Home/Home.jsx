import React from 'react'
import Banner from "./Banner"
import CategoryBar from './CategoryBar'
import NewArrival from './NewArrival'
import Newsletter from './Newsletter'
import PhotoGrid from './PhotoGrid'
import HomeSwiper from './HomeSwiper'
import { Importance } from './Importance'
import Navbar from '../../Components/navbar'
import Blogs from './Blogs'
import Footer from '../../Components/Footer'
export default function Home() {
    return (
        <div>
{/* 
            <div className='p-6 box flex items-center  bg-red-500 w-full'>
                <div className='bg-yellow-500 h-[200px] '>sdfsdfsd</div>
                <div className='bg-blue-500 h-[100px] '>sdfsdfsd</div>
                <div className='bg-green-500 '>sdfsdfsd</div>
            </div> */}



            <Navbar />
            <Banner />
            <NewArrival bg={"bg-[#f5f5f5]"} text={"text-black"} />
            <Importance />
            <PhotoGrid />
            <NewArrival title={"Trending"} />
            <HomeSwiper />
            <Blogs />
            <Newsletter bg={"bg-[#f5f5f5]"} text={"text-black"} />
            <Footer bg={"bg-white"} text={"text-gray-400"} />
        </div>
    )
}
