import React from 'react'
import Navbar from '../../Components/navbar';
import Banner from '../Shop/Banner';
import PhotoGrid from '../Home/PhotoGrid';
import Newsletter from '../Home/Newsletter';
import Footer from '../../Components/Footer';
import Gallery from './Gallery';

function Portfolio() {
  return (
    <div>
        <Navbar/>
        <Banner title={"Portfolio"}/>
        <Gallery/>
        <Newsletter bg={"bg-[#f5f5f5]"} text={"text-black"}/>
        <Footer bg={"bg-white"} text={"text-black"}/>
    </div>
  )
}

export default Portfolio;