import React from 'react'
import { CiDeliveryTruck } from "react-icons/ci";
import { GiReturnArrow } from "react-icons/gi";
import { MdOutlinePayment } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
export const Importance = () => {
  return (
    <div className='bg-[#f5f5f5] py-16'>
    <div className='container mx-auto'>

      <div className=' dark:bg-dark-secondary  sm:pt-0   mx-auto pb-0'>
        <div className='bg-[#f5f5f5]  mx-auto  '>
            <div className=' md:border-b border-bdr-clr dark:border-bdr-clr-dark'>
              <h6 className='font-semibold text-2xl   md:text-3xl text-center  sm:text-left  '>Why You Choose Us</h6><br/>
              {/* upper border line */}
              {/* <div className='w-[1px] h-[120px] absolute pl-1 top-[30%] hidden 2xl:block border-1 border-dashed border-primary'></div> */}
            </div>
        </div>
        <div className='bg-[#f5f5f5]    display:flex-center left-0 right-0 pl-5  mx-auto p-5 md:p-0'>
            <div className="grid grid-cols-1  sm:grid-cols-2 xl:grid-cols-4  gap-4  ">
              <div className=" text-left md:text-left  md:border-b border-bdr-clr dark:border-bdr-clr-dark  ">
                <CiDeliveryTruck className="text-4xl text-yellow-700 mb-4 md:mx-0 mt-7" />
                <h5 className="font-semibold text-xl md:text-xl">Free Shipping</h5>
                <p className="mt-2 text-sm text-gray-700 mb-2">
                  Enjoy free shipping on all orders, 
                  making your shopping experience 
                  even more convenient. Get your 
                  favorite products delivered.
                </p>
              </div>
              <div className=" text-left md:text-left md:border-b border-bdr-clr dark:border-bdr-clr-dark ">
                <GiReturnArrow className="text-3xl text-yellow-700 mb-4 md:mx-0 mt-7" />
                <h5 className="font-semibold text-xl md:text-xl">Fast Delivery</h5>
                <p className="mt-2 text-sm text-gray-700 mb-2">
                  Receive your products quickly 
                  with our reliable delivery 
                  partners across the country.
                </p>
              </div>


              <div className="  text-left md:text-left md:border-b border-bdr-clr dark:border-bdr-clr-dark ">
                <MdOutlinePayment className="text-3xl text-yellow-700 mb-4  md:mx-0 mt-7" />
                <h5 className="font-semibold text-xl md:text-xl">Secure Payments</h5>
                <p className="mt-2 text-sm text-gray-700 mb-2">
                  Shop with confidence using 
                  our secure and encrypted 
                  payment system.
                </p>
              </div>

              <div className="  text-left md:text-left md:border-b border-bdr-clr dark:border-bdr-clr-dark">
                <RiCustomerService2Fill className="text-3xl text-yellow-700 mb-4  md:mx-0 mt-7" />
                <h5 className="font-semibold text-xl md:text-xl">Customer Support</h5>
                <p className="mt-2 text-sm text-gray-700 mb-2">
                  Our dedicated customer support team 
                  is here to assist you every step 
                  of the way. Reach out to us anytime
                  for prompt, friendly help.
                </p>
              </div>
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}

