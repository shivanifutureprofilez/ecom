import React from 'react'
// import Card from '../../Components/Card';
import newArrival1 from '../../Assets/newArrival1.jpg';
import newArrival2 from '../../Assets/newArrival2.jpg';
import newArrival3 from '../../Assets/newArrival3.jpg';
import newArrival4 from '../../Assets/newArrival4.jpg';
import shop5 from '../../Assets/shop5.jpg'
import shop6 from '../../Assets/Blog3.jpg'
import shop7 from '../../Assets/shop7.jpg'
import shop8 from '../../Assets/shop8.jpg'
import shop9 from '../../Assets/shop9.jpg'
import shop10 from '../../Assets/shop10.jpg'
import shop11 from '../../Assets/shop11.jpg'
import shop12 from '../../Assets/shop5.jpg'
// import Card from './Card';
import Navbar from '../../Components/navbar';
// import Card from '../../Components/ProductItem';
import Banner from './Banner';
import Filter from './Filter';
import Footer from '../../Components/Footer'
import Newsletter from '../Home/Newsletter';
import ProductItem from '../../Components/ProductItem';

function Shop() {


    const products=[
        {
              img: newArrival1,
              price: "$25.75",
              name: "White Minimal Chair",
            },
            {
              img: newArrival2,
              price: "$122.75",
              name: "Preminu Luxury Sofa",
            },
            {
              img: newArrival3,
              price: "$140.99",
              name: "Table With Pops",
            },
            {
              img: newArrival4,
              price: "$122.75",
              name: "Luxury Lamp for Wall",
            },
             {
              img: shop5,
              price: "$122.75",
              name: "Luxury Lamp for Wall",
            },
            {
              img: shop6,
              price: "$122.75",
              name: "Luxury Lamp for Wall",
            },
             {
              img: shop7,
              price: "$122.75",
              name: "Luxury Lamp for Wall",
            },
            {
              img: shop8,
              price: "$122.75",
              name: "Luxury Lamp for Wall",
            },
            {
              img: shop9,
              price: "$122.75",
              name: "Luxury Lamp for Wall",
            },
            {
              img: shop10,
              price: "$122.75",
              name: "Luxury Lamp for Wall",
            },
            {
              img: shop11,
              price: "$122.75",
              name: "Luxury Lamp for Wall",
            },
            {
              img: newArrival2,
              price: "$122.75",
              name: "Luxury Lamp for Wall",
            },
    ];
    
  return (
    <>
    <Navbar/>
    <Banner title={"Shop"}/>
    <Filter/>

    <section className="max-w-6xl mx-auto px-4">
      
      <hr className="mb-8" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductItem product={product} />
        ))}
      </div>
       <button className='border py-[7px] align-center mt-14 mb-8 ml-[514px] hover:bg-black hover:text-white'><span className="pl-2 pr-2">Load More</span></button>
    </section>

    <Newsletter bg={"bg-[#f5f5f5]"} text={"text-"}/>
    <Footer bg={"bg-white"} text={"text-black"}/>
    </>
  )
}

export default Shop;