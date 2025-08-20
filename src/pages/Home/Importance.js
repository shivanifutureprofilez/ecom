import React from 'react'
import { CiDeliveryTruck } from "react-icons/ci";
import { GiReturnArrow } from "react-icons/gi";
import { MdOutlinePayment } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
export const Importance = () => {
  return (
    <div className='bg-[#f5f5f5] s-py-100 max-w-8xl display:flex-center left-0 right-0'>
        <div className=' border-b border-bdr-clr dark:border-bdr-clr-dark'>
          <h6 className='font-semibold text-[24px] lg:text-2xl text-center  sm:text-left mt-4 p-4 pl-1 pt-10 mx-5'>Why You Choose Us</h6><br/>
          {/* upper border line */}
          {/* <div className='w-[1px] h-[120px] absolute pl-1 top-[30%] hidden 2xl:block border-1 border-dashed border-primary'></div> */}
        </div>
        <div className="flex flex-col md:flex-row items-stretch justify-center divide-x divide-dashed divide-gray-300 pb-20">

          <div className="flex-1 px-6 text-center md:text-left  border-b border-bdr-clr dark:border-bdr-clr-dark  ">
            <CiDeliveryTruck className="text-3xl text-yellow-700 mb-4 mx-auto md:mx-0 mt-4" />
            <h5 className="font-semibold text-xl md:text-2xl">Free Shipping</h5>
            <p className="mt-2 text-xs text-gray-700 mb-2">
              Enjoy free shipping on all orders, <br />
              making your shopping experience <br />
              even more convenient. Get your <br />
              favorite products delivered.
            </p>
          </div>
          <div className="flex-1 px-6 text-center md:text-left border-b border-bdr-clr dark:border-bdr-clr-dark ">
            <GiReturnArrow className="text-3xl text-yellow-700 mb-4 mx-auto md:mx-0 mt-4" />
            <h5 className="font-semibold text-xl md:text-2xl">Fast Delivery</h5>
            <p className="mt-2 text-xs text-gray-700 mb-2">
              Receive your products quickly <br />
              with our reliable delivery <br />
              partners across the country.
            </p>
          </div>


          <div className="flex-1 px-6 text-center md:text-left border-b border-bdr-clr dark:border-bdr-clr-dark ">
            <MdOutlinePayment className="text-3xl text-yellow-700 mb-4 mx-auto md:mx-0 mt-4" />
            <h5 className="font-semibold text-xl md:text-2xl">Secure Payments</h5>
            <p className="mt-2 text-xs text-gray-700 mb-2">
              Shop with confidence using <br />
              our secure and encrypted <br />
              payment system.
            </p>
          </div>

          <div className="flex-1 px-6 text-center md:text-left border-b border-bdr-clr dark:border-bdr-clr-dark">
            <RiCustomerService2Fill className="text-3xl text-yellow-700 mb-4 mx-auto md:mx-0 mt-4" />
            <h5 className="font-semibold text-xl md:text-2xl">Fast Delivery</h5>
            <p className="mt-2 text-xs text-gray-700 mb-2">
              Our dedicated customer support team <br />
              is here to assist you every step <br />
              of the way. Reach out to us anytime<br />
              for prompt, friendly help.<br />
            </p>
          </div>
        </div>
    </div>
  )
}

