import React, { useContext, useState } from 'react'
import ProductList from '../cart/ProductList';
import { useNavigate } from 'react-router-dom';
import { Api } from '../../Api/Api';
import toast from 'react-hot-toast';
import { MyContext } from '../../context/UserContext';


function CheckoutForm({ }) {
  const { setUser, user } = useContext(MyContext);

  console.log("user" ,user)

  const navigate = useNavigate();

  const [billingData, setBillingData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
    town: "",
    zipCode: "",
    addressL1: "",
    addressL2: "",
    additionalMsg: "",
    paymentMode: "",

  })
  const handleChange = (e) => {    //event object
    const name = e.target.name;
    const value = e.target.value;
    setBillingData(values => ({ ...values, [name]: value }));  //spread syntax
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
       if (billingData.name === '' || billingData.email === '' || billingData.phone === '' || billingData.town === '' || 
          billingData.zipCode === '' || billingData.addressL1 === '' || billingData.paymentMode === '' ) {
          console.log("billing Data", billingData);
        toast.error("All necessary fields are required.");
        return;
      }
      const response = await Api.post('/checkout/add', billingData);
      if (response?.data?.status) {
        toast.success(response?.data?.message)
        navigate('/ThankYou');
      }
      else {
        toast.error(response?.data?.message);
      }
      setBillingData({
        name: "",
        email: "",
        phone: "",
        town: "",
        zipCode: "",
        addressL1: "",
        addressL2: "",
        additionalMsg: "",
        paymentMode: "",
      })
    } catch (error) {
      console.log("error ", error);
      toast.error(error?.response?.data?.message);
    }
  }
  return (
    <div className='container mx-auto'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div className='bg-[#f8f8f9] mt-[75px] border border-yellow-700 rounded-xl'>
          <div className='bg-[#f8f8f9] p-4'>
            <h3 className='pl-4 md:pl-6 lg:pl-10  pr-3 py-3 lg:py-3.5 text-[20px] font-medium text-black whitespace-nowrap  text-left uppercase'>Billing Information</h3>
            <form className="mt-6 " >
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
                  readOnly
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
                  readOnly
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
                  readOnly
                />
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-3 '>
               
              </div>
              <div>
                <label className="font-medium text-base block mb-2 mt-2">Address Line 1</label>
                <textarea
                  name='addressL1'
                  value={billingData.addressL1}
                  onChange={handleChange}
                  placeholder="Enter Your Address"
                  className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
               focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                  required
                />
              </div>
              
            </form>
          </div>
        </div>


        <div className='bg-[#f8f8f9] mt-[75px] border border-yellow-700 rounded-xl'>
          <div className='bg-[#f8f8f9] p-4'>
            <h3 className='pl-4 md:pl-6 lg:pl-10  pr-3 py-3 lg:py-3.5 text-[20px] font-medium text-black whitespace-nowrap  text-left uppercase'>Product Information</h3>
            <ProductList checkout={true} />
            <h3 className='pl-4 md:pl-6 lg:pl-10  pr-3 py-3 lg:py-3.5 text-[18px] font-medium text-black whitespace-nowrap  text-left uppercase'>Mode Of Payment</h3>
            <div className="flex pl-4 md:pl-6 lg:pl-10 flex-wrap gap-[42px] pt-3">
              <div>
                <input
                  type="radio"
                  name="paymentMode"
                  value="cod"
                  //checked={billingData.paymentMode === 'cod'}
                  onChange={handleChange}
                />
                <label className="text-[14px] md:text-[16px] font-medium text-black leading-normal uppercase">
                  Cash On Delivery
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  name="paymentMode"
                  value="card"
                  // checked={billingData.paymentMode === 'card'}
                  onChange={handleChange}
                />
                <label className="text-[14px] md:text-[16px] font-medium text-black leading-normal uppercase">
                  Card Payment
                </label>
              </div>

            </div>
            <div className="flex pl-4 md:pl-6 lg:pl-10 gap-3 pt-8">
              <button
                onClick={() => navigate('/Cart')}
                className="border border-black text-black bg-white hover:bg-black hover:text-white font-medium p-3"
              >
                Back To Cart
              </button>

              <button
                 onClick={(e) => handleSubmit(e)}
                 type='button'
                className="bg-yellow-700 text-white border border-yellow-700 hover:bg-white hover:text-yellow-700 font-medium p-3"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutForm