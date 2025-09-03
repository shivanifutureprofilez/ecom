import React from 'react'
import Navbar from '../../Components/navbar';
import Banner from '../Shop/Banner';
import Newsletter from '../Home/Newsletter';
import Footer from '../../Components/Footer';
import ProfileSections from './ProfileSections';

function Profile() {
  return (
    <div>
        <Navbar/>
        <Banner title={"My Profile"}/>
        <ProfileSections/>
        <Newsletter bg={"bg-[#f5f5f5]"}/>
        <Footer/>
    </div>
  )
}

export default Profile;