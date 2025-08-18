import React from 'react';
import newsletter from '../Assets/newsletter.png';

const Newsletter = () => {
  return (
    <div className='flex justify-center items-center  '>
        <div className='bg-[#f5f5f5] dark:bg-dark-secondary py-10 px-5 md:px-7 lg:px-12 xl:px-24 max-w-1366 mx-auto'>
            <div className='max-w-[990] flex justify-between items-end gap-4'>
                {/* for text */}
                <div>   
                    <h2 className='font-bold text-4xl leading-none'>Newsletter</h2>
                    <p className='text-sm'>Stay in the loop with exclusive offers and updates. Subscribe to our newsletter for the latest trends and promotions.</p>
                    {/* form */}
                 
                    <div class="mt-4 lg:mt-6 sm:flex"><input class="w-full h-12 md:h-14 bg-snow border dark:bg-snow dark:bg-opacity-5 border-title focus:border-title dark:focus:border-secondary border-opacity-10 p-4 outline-none dark:text-white sm:flex-1 sm:border-r-0 duration-300" placeholder="Enter your email address" type="text" />
                    <button class="bg-black w-full h-12 bg-title text-white flex items-center justify-center text-base md:text-lg font-medium p-3 mt-3 sm:mt-0 sm:w-32 sm:h-auto sm:flex-none dark:bg-primary dark:text-white">Subscribe</button>
                    </div>
            
                </div>
                {/* Image sliding */}
                <div>
                    <img src={newsletter} alt="image-newsletter"></img>
                </div>

            </div>
        </div>

    </div>
  )
}

export default Newsletter