import React from 'react';
import newsletter from '../../Assets/newsletter.png';

function Newsletter({ bg, text }) {
    return (
        <div className={` ${bg} mt-6 mb-0 container mx-auto lg:max-w-full `}>
            <div className={`${bg}  dark:bg-dark-secondary py-10 px-5 md:px-7 lg:px-16 xl:px-24 xl:pb-24 sm:pt-0 `}>
                <div className={`${bg} max-w-[1047px] mx-auto p-5 md:p-0  flex flex-wrap  justify-between`}>
                    <div className='flex justify-center flex-col md:px-16 md:py-14 '>
                        <h2 className={`font-bold text-3xl ${text}`}>Newsletter</h2>
                        <p className={`text-sm mt-5 ${text}`}>Stay in the loop with exclusive offers and updates. Subscribe<br /> to our newsletter for the latest trends and promotions.</p>
                        <div class="mt-4 lg:mt-6 sm:flex">
                            <input type="text" id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block !w-[200px] p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                            <button class="bg-yellow-700 h-12 bg-title text-white flex items-center justify-center text-sm md:text-lg font-medium p-3 mt-3 sm:mt-0 sm:w-32 sm:h-auto sm:flex-none dark:bg-primary dark:text-white">Subscribe</button>
                        </div>
                    </div>
                    <div className=' pr-[50px] py-0 hidden md:block'>
                        <img src={newsletter} alt="image-newsletter" className="mt-0"></img>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Newsletter;