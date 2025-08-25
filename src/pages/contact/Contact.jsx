import React from 'react'
import Navbar from '../../Components/navbar';
import Banner from '../Shop/Banner';
import ContactForm from './ContactForm';
import Newsletter from '../Home/Newsletter';
import Footer from '../../Components/Footer';
import Map from './Map';

function Contact() {
  return (
    <div>
        <Navbar/>
        <Banner title={"Contact Us"}/>
        <ContactForm/>
        <Map/>
        <Newsletter bg={"bg-[#f5f5f5]"} text={"text-black"}/>
        <Footer/>
    </div>
  )
}

export default Contact;