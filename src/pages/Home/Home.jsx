import React from 'react'
import Banner from "./Banner"
import CategoryBar from './CategoryBar'
import NewArrival from './NewArrival'
import Newsletter from './Newsletter'
import PhotoGrid from './PhotoGrid'
import Swiper from './Swiper'
import { Importance } from './Importance'
import Navbar from '../../Components/navbar'
import Blogs from './Blogs'
import Footer from './Footer'
export default function Home() {
    return (
        <div>
            <Navbar />

            <Banner />
            <CategoryBar />
            <NewArrival />
            <Importance />
            <PhotoGrid />
            <NewArrival title={"Trending"}/>
            <Swiper />
            <Blogs/>
            <Newsletter />
           <Footer/>
            
            
        </div>
    )
}
