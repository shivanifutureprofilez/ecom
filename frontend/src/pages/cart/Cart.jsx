import React from 'react'
import Navbar from '../../Components/navbar';
import Banner from '../Shop/Banner';
import Newsletter from '../Home/Newsletter';
import Footer from '../../Components/Footer';
import ProductList from './ProductList';
import Total from './Total';

function Cart() {
  return (
    <div>
        <Navbar/>
        <Banner title={"Cart"}/>
        
        <ProductList/>
        <Newsletter bg={"bg-[#f5f5f5]"}/>
        <Footer/>
    </div>
  )
}

export default Cart;