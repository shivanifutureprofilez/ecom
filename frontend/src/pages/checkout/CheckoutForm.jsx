import React, { useState } from 'react'
import ProductList from '../cart/ProductList';


function CheckoutForm() {

  const [billingData, setBillingData] = useState({
    name: "",
    email: "",
    phone: "",
    town: "",
    zipCode: "",
    addressL1: "",
    addressL2: "",
    additionalMsg: ""
  })
  const handleChange = (e) => {    //event object
    const name = e.target.name;
    const value = e.target.value;
    setBillingData(values => ({ ...values, [name]: value }));  //spread syntax
  }

  return (
    <div className='container mx-auto'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div className='bg-[#f8f8f9] mt-[75px] border border-yellow-700 rounded-xl'>
          <div className='bg-[#f8f8f9] p-4'>
            <h3 className='pl-4 md:pl-6 lg:pl-10  pr-3 py-3 lg:py-3.5 text-[20px] font-medium text-black whitespace-nowrap  text-left uppercase'>Billing Information</h3>
            <form className="mt-6 ">
              <div>
                <label className="font-medium text-base block mb-2">Full Name</label>
                <input
                  onChange={handleChange}
                  type="text"
                  value={billingData.name}
                  name='name'
                  placeholder="Enter Your Full Name"
                  className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                           focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                  required
                />
              </div>
              <div>
                <label className="font-medium text-base block mb-2 mt-2">Email</label>
                <input
                  name='email'
                  type="email"
                  value={billingData.email}
                  onChange={handleChange}
                  placeholder="Enter Your Email"
                  className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
               focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                  required
                />
              </div>
              <div>
                <label className="font-medium text-base block mb-2 mt-2">Phone no</label>
                <input
                  name='phone'
                  type="number"
                  value={billingData.phone}
                  onChange={handleChange}
                  placeholder="Enter Your Phone Number"
                  className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
               focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                  required
                />
              </div>
              <div className='flex justify-between '>
                <div>
                  <label className="font-medium text-base block mb-2 mt-2">Town/City</label>
                  <input
                    name='town'
                    type="text"
                    value={billingData.town}
                    onChange={handleChange}
                    placeholder="Enter Your City Name"
                    className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                 focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                    required
                  />
                </div>
                <div>
                  <label className="font-medium text-base block mb-2 mt-2">Zip-Code</label>
                  <input
                    name='zipCode'
                    type="number"
                    value={billingData.zipCode}
                    onChange={handleChange}
                    placeholder="Enter Your Zip-Code"
                    className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
              focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="font-medium text-base block mb-2 mt-2">Address Line 1</label>
                <input
                  name='addressL1'
                  type="text"
                  value={billingData.addressL1}
                  onChange={handleChange}
                  placeholder="Enter Your Address"
                  className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
               focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                  required
                />
              </div>
              <div>
                <label className="font-medium text-base block mb-2 mt-2">Address Line 2</label>
                <input
                  name='addressL2'
                  type="text"
                  value={billingData.addressL2}
                  onChange={handleChange}
                  placeholder="Enter Your Address"
                  className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
               focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                />
              </div>
              <div>
                <label className="font-medium text-base block mb-2 mt-2">Additional Message</label>
                <textarea
                  name='additionalMsg'
                  value={billingData.additionalMsg}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Enter Your Additional Msg"
                  className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
               focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                />
              </div>
            </form>
          </div>
        </div>
        

        <div className='bg-[#f8f8f9] mt-[75px] border border-yellow-700 rounded-xl'>
          <div className='bg-[#f8f8f9] p-4'>
            <h3 className='pl-4 md:pl-6 lg:pl-10  pr-3 py-3 lg:py-3.5 text-[20px] font-medium text-black whitespace-nowrap  text-left uppercase'>Product Information</h3>
              <ProductList/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutForm