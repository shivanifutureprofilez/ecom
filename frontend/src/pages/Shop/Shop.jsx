import React, { useState } from 'react'
import Navbar from '../../Components/navbar';
import Banner from './Banner';
import Filter from './Filter';
import Footer from '../../Components/Footer'
import Newsletter from '../Home/Newsletter';
import Listing from './Listing';

function Shop() {

  const [category, setCategory] = useState('all');
  const [select, setSelect] = useState('');

  return (
    <>
      <Navbar />
      <Banner title={"Shop"} />
      <Filter category={category} setCategory={setCategory} select={select} setSelect={setSelect}/>
      <div className="container  mx-auto py-5 ">  
        {/* <hr className="mb-8" /> */}
        <Listing  category={category} select={select} />
        {/* <div className="flex justify-center items-center">
          <button className='border py-[7px] rounded-lg mt-14 mb-8 hover:bg-black hover:text-white'>
            <span className="pl-2 pr-2">Load More</span>
          </button>
        </div> */}
      </div>
      <Newsletter bg={"bg-[#f5f5f5]"} text={"text-black"} />
      <Footer bg={"bg-white"} text={"text-black"} />
    </>
  )
}

export default Shop;