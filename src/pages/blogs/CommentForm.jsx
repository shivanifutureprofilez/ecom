import React from 'react'

function CommentForm() {
  return (
    <div className=' flex flex-wrap mx-auto'>
    <div className=' justify-center max-w-[550px] mx-auto'>
        <h2 className='text-xl font-semibold pt-4'>Leave a Comment</h2>
        <div className='grid gap-[15px] justify-center'></div>
        <form className="mt-6 justify-center">
              
               
                <input
                  type="text"
                  placeholder="Full Name"
                  className="mb-4 w-full border border-gray-300 text-gray-900 text-sm  
                           focus:ring-blue-500 focus:border-blue-500 py-3 px-4 bg-white"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="mb-4 w-full bg-white border border-gray-300 text-gray-900 text-sm  
                           focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                />
                <textarea
                  type="text"
                  placeholder="Type Your Message Here"
                  className="mb-4 w-full bg-white border border-gray-300 text-gray-900 text-sm  
                           focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                />
                 <button
                type="submit"
                className="w-full md:w-32 bg-yellow-700 text-white font-medium py-3"
              >
                Post Comment
              </button>
                </form>
        
    </div>
    </div>
  )
}

export default CommentForm;