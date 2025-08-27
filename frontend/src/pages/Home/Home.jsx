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
            <Navbar />

            <Banner />
            <NewArrival bg={"bg-[#f5f5f5]"} text={"text-black"}/>
            <Importance />
            <PhotoGrid />
            <NewArrival title={"Trending"}/>
            <HomeSwiper />
            <Blogs/>
            <Newsletter   bg={"bg-[#f5f5f5]"} text={"text-black"}/>
           <Footer bg={"bg-white"} text={"text-gray-400"}/>
            
            
        </div>
    )
}
