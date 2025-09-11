import React from 'react'
import Navbar from '../../Components/navbar'
import Banner from '../Shop/Banner'
import Newsletter from '../Home/Newsletter';
import Footer from '../../Components/Footer';
import CheckoutForm from './CheckoutForm';

function Checkout() {
  return (
    <>
        <Navbar/>
        <Banner title={"Checkout"}/>
        <CheckoutForm/>
        <Newsletter bg={"bg-[#f5f5f5]"}/>
        <Footer/>
    </>
  )
}

export default Checkout;