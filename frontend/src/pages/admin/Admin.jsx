import React, { use, useContext, useEffect } from 'react'
import Navbar from '../../Components/navbar';
import { Link, useNavigate } from 'react-router-dom';
import { MdDashboard, MdVerifiedUser } from 'react-icons/md';
import Banner from '../Shop/Banner';
import ProductForm from './ProductForm';
import Footer from '../../Components/Footer';
import { MyContext } from '../../context/UserContext';

function Admin() {

    const {user} = useContext(MyContext);

    const navigate = useNavigate()
    useEffect(()=>{ 
         if(user?.isAdmin !== 1) { 
            navigate("/")
         }
    },[]);

    return (
        <>
        <Navbar/>
        <Banner title={'Admin'}/>
        <ProductForm/>
        <Footer/>
        </>
    )
}

export default Admin;