import React from 'react'
import { CiDeliveryTruck } from "react-icons/ci";
import { GiReturnArrow } from "react-icons/gi";
import { MdOutlinePayment } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
export const Importance = () => {
  return (
    <div className='bg-[#f5f5f5] dark:bg-dark-secondary py-10 px-5 md:px-7 lg:px-16 xl:px-24  sm:pt-0 max-w-8xl  mx-auto pb-0'>
    <div className='bg-[#f5f5f5] '>
        <div className=' md:border-b border-bdr-clr dark:border-bdr-clr-dark'>
          <h6 className='font-semibold text-[28px] md:text-3xl text-center  sm:text-left mt-4 p-0 pt-1 md:pt-12 mx-5'>Why You Choose Us</h6><br/>
          {/* upper border line */}
          {/* <div className='w-[1px] h-[120px] absolute pl-1 top-[30%] hidden 2xl:block border-1 border-dashed border-primary'></div> */}
        </div>
    </div>
    <div className='bg-[#f5f5f5] s-py-100 max-w-8xl display:flex-center left-0 right-0 pl-5'>
        <div className="grid grid-cols-1  md:grid-cols-4 pb-8 md:pb-12">
          <div className="px-2 md:px-6 text-left md:text-left  md:border-b border-bdr-clr dark:border-bdr-clr-dark  ">
            <CiDeliveryTruck className="text-4xl text-yellow-700 mb-4 md:mx-0 mt-7" />
            <h5 className="font-semibold text-xl md:text-lg">Free Shipping</h5>
            <p className="mt-2 text-xs text-gray-700 mb-2">
              Enjoy free shipping on all orders, 
              making your shopping experience 
              even more convenient. Get your 
              favorite products delivered.
            </p>
          </div>
          <div className="px-2 md:px-6 text-left md:text-left md:border-b border-bdr-clr dark:border-bdr-clr-dark ">
            <GiReturnArrow className="text-3xl text-yellow-700 mb-4 md:mx-0 mt-7" />
            <h5 className="font-semibold text-xl md:text-lg">Fast Delivery</h5>
            <p className="mt-2 text-xs text-gray-700 mb-2">
              Receive your products quickly 
              with our reliable delivery 
              partners across the country.
            </p>
          </div>


          <div className=" px-2 md:px-6 text-left md:text-left md:border-b border-bdr-clr dark:border-bdr-clr-dark ">
            <MdOutlinePayment className="text-3xl text-yellow-700 mb-4  md:mx-0 mt-7" />
            <h5 className="font-semibold text-xl md:text-lg">Secure Payments</h5>
            <p className="mt-2 text-xs text-gray-700 mb-2">
              Shop with confidence using 
              our secure and encrypted 
              payment system.
            </p>
          </div>

          <div className=" px-2 md:px-6 text-left md:text-left md:border-b border-bdr-clr dark:border-bdr-clr-dark">
            <RiCustomerService2Fill className="text-3xl text-yellow-700 mb-4  md:mx-0 mt-7" />
            <h5 className="font-semibold text-xl md:text-lg">Customer Support</h5>
            <p className="mt-2 text-xs text-gray-700 mb-2">
              Our dedicated customer support team 
              is here to assist you every step 
              of the way. Reach out to us anytime
              for prompt, friendly help.
            </p>
          </div>
        </div>
    </div>
    </div>
  )
}

