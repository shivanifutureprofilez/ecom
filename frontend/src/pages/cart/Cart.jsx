import React from 'react'
import Navbar from '../../Components/navbar';
import Banner from '../Shop/Banner';
import Newsletter from '../Home/Newsletter';
import Footer from '../../Components/Footer';

function Cart() {
  return (
    <div>
        <Navbar/>
        <Banner title={"Cart"}/>
        <Newsletter bg={"bg-[#f5f5f5]"}/>
        <Footer/>
    </div>
  )
}

export default Cart;