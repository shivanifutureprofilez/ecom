import React from 'react'
import Contact from '../../Assets/contact.jpg';
import { GiFruitBowl } from "react-icons/gi";
import { MdOutlineConnectWithoutContact } from "react-icons/md";

function ContactForm() {
  return (
    <div>
      <div className="container flex justify-center items-center mx-auto xl:max-w-[1440px]">
        <div className="p-[20px] w-full lg:p-[30px] flex flex-wrap md:flex-nowrap ">
          <div className="w-full h-full relative hidden md:flex">
            <img src={Contact} alt="Login" className="w-full h-[700px] mt-[40px] object-cover" />
          </div>
          <div className="w-full relative md:pl-[50px] md:pt-[100px] lg:pl-[50px] mt-0 ">
            <MdOutlineConnectWithoutContact className='text-5xl min-h-[55px] min-w-[55px] text-yellow-600 mb-2 mt-1 pt-0 round-[10px] p-2' />
            <h5 className="text-2xl  font-medium text-gray-800">Get In Touch!!</h5>
            <p className="text-sm text-gray-500 mt-3 md:mt-5">We're here to address your inquiries, feedback, and partnership<br /> opportunities promptly and effectively.</p>
            <form className="mt-6">
              <div className='grid md:grid-cols-2 gap-2 mb-4 mt-3'>
                <div >
                  <label className="font-medium text-base block mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter Your Full Name"
                    className=" w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                           focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                  />
                </div>
                <div>
                  <label className="font-medium text-base block mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="Enter Your Email Address"
                    className=" w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                           focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                  />
                </div>

              </div>
              <div className='grid md:grid-cols-2 gap-2 mb-4 mt-3'>
                <div >
                  <label className="font-medium text-base block mb-4">Phone Number</label>
                  <input
                    type="number"
                    placeholder="Type Your Phone Number"
                    className=" w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                           focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                  />
                </div>
                <div>
                  <label className="font-medium text-base block mb-4">Subject</label>
                  <input
                    type="email"
                    placeholder="Enter Your Subject"
                    className=" w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                           focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                  />
                </div>

              </div>
                <div className='mb-3 mt-3'>
                {/* <div > */}
                  <label className="font-medium text-base block mb-2">Your Message</label>
                  <textarea
                    type="text"
                    placeholder="Type Your Message"
                    maxLength={10}
                    className=" w-full h-28 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                           focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                  />
                {/* </div> */}
                

              </div>
            </form>
              <button
                type="submit"
                className="w-full md:w-32 bg-black text-white font-medium py-3"
              >
                Submit
              </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ContactForm;