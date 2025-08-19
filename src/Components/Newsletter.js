import React from 'react';
import newsletter from '../Assets/newsletter.png';

const Newsletter = () => {
    return (
        <div className='max-w flex justify-center items-left '>
                <div className='bg-[#f5f5f5] max-w flex justify-between items-center gap-4 px-6 py-6 '>
                    <div>
                        <h2 className='font-bold text-4xl'>Newsletter</h2>
                        <p className='text-sm mt-5'>Stay in the loop with exclusive offers and updates. Subscribe<br/> to our newsletter for the latest trends and promotions.</p>
                        <div class="mt-4 lg:mt-6 sm:flex">
                             <input type="text" id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block !w-[200px] p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                            <button class="bg-black h-12 bg-title text-white flex items-center justify-center text-base md:text-lg font-medium p-3 mt-3 sm:mt-0 sm:w-32 sm:h-auto sm:flex-none dark:bg-primary dark:text-white">Subscribe</button>
                        </div>
                    </div>
                    <div className='mt-2 py-2'>
                        <img src={newsletter} alt="image-newsletter"></img>
                    </div>

                </div>
            </div>
    )
}

export default Newsletter