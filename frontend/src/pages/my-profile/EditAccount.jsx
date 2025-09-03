import React from 'react'

function EditAccount({ user }) {
  return (
    
        <div className='container mx-auto '>
        <div className='bg-[#F8F8F9] p-5 sm:p-8 '>
                <div className='mx-auto p-1 grid grid-cols-1 md:grid-cols-2 gap-4  '>
                <div >
                  <label className="font-medium text-base block mb-4">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter Your Full Name"
                    className=" w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm  
                           focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                  />
                </div>
                <div >
                  <label className="font-medium text-base block mb-4">Location</label>
                  <input
                    type="text"
                    placeholder="Enter Your Location"
                    className=" w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm  
                           focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                  />
                </div>
               <div className='pt-1'>
                 <div >
                  <label className="font-medium text-base block mb-4">Designation</label>
                  <input
                    type="text"
                    placeholder="Enter Your Designation"
                    className=" w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm  
                           focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                  />
                </div>
                <div >
                  <label className="font-medium text-base block mb-4">Phone Number</label>
                  <input
                    type="number"
                    placeholder="Enter Your Phone Number"
                    className=" w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm  
                           focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                  />
                </div>
               </div>
                <div className='mb-3 mt-3'>
                  <label className="font-medium text-base block mb-2">Bio</label>
                  <textarea
                    type="text"
                    placeholder="Enter Your Bio"
rows={10}
                    className=" w-full h-32 bg-gray-50 border border-gray-300 text-gray-900 text-sm 
                           focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                  />
                  </div>
                  
                <div >
                  <label className="font-medium text-base block mb-4">Web/Social Media</label>
                  <input
                    type="text"
                    placeholder="www.facebook.com/aditya"
                    className=" w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm  
                           focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                  />
                </div>
                <div >
                  <label className="font-medium text-base block mb-4">Email</label>
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    className=" w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm  
                           focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                  />
                </div>
            </div>
            <button
                type="submit"
                className="w-full md:w-32 bg-black text-white font-medium py-3 mt-12"
              >
                Save Changes
              </button>
        </div>
              </div>
    
  )
}

export default EditAccount;