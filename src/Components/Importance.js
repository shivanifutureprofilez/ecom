import React from 'react'
import { CiDeliveryTruck } from "react-icons/ci";
import { GiReturnArrow } from "react-icons/gi";
import { MdOutlinePayment } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
export const Importance = () => {
  return (
    <div className='bg-[#f5f5f5] px-4 py-8 '>
        <div className=' border-b border-bdr-clr dark:border-bdr-clr-dark'>
          <h5 className='font-semibold sm:text-3xl lg:text-3xl text-center  sm:text-left mt-4 p-4 pl-1 mx-10'>Why You Choose Us</h5>
          {/* upper border line */}
          <div className='w-[1px] h-[120px] absolute pl-1 top-[30%] hidden 2xl:block border-1 border-dashed border-primary'></div>
        </div>
        <div className="flex flex-col md:flex-row items-stretch justify-center divide-x divide-dashed divide-gray-300">

          <div className="flex-1 px-6 text-center md:text-left">
            <CiDeliveryTruck className="text-3xl text-yellow-700 mb-4 mx-auto md:mx-0" />
            <h5 className="font-semibold text-xl md:text-2xl">Free Shipping</h5>
            <p className="mt-2 text-xs text-gray-700">
              Enjoy free shipping on all orders, <br />
              making your shopping experience <br />
              even more convenient. Get your <br />
              favorite products delivered.
            </p>
          </div>
          <div className="flex-1 px-6 text-center md:text-left">
            <GiReturnArrow className="text-3xl text-yellow-700 mb-4 mx-auto md:mx-0" />
            <h5 className="font-semibold text-xl md:text-2xl">Fast Delivery</h5>
            <p className="mt-2 text-xs text-gray-700">
              Receive your products quickly <br />
              with our reliable delivery <br />
              partners across the country.
            </p>
          </div>


          <div className="flex-1 px-6 text-center md:text-left">
            <MdOutlinePayment className="text-3xl text-yellow-700 mb-4 mx-auto md:mx-0" />
            <h5 className="font-semibold text-xl md:text-2xl">Secure Payments</h5>
            <p className="mt-2 text-xs text-gray-700">
              Shop with confidence using <br />
              our secure and encrypted <br />
              payment system.
            </p>
          </div>

          <div className="flex-1 px-6 text-center md:text-left">
            <RiCustomerService2Fill className="text-3xl text-yellow-700 mb-4 mx-auto md:mx-0" />
            <h5 className="font-semibold text-xl md:text-2xl">Fast Delivery</h5>
            <p className="mt-2 text-xs text-gray-700">
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

