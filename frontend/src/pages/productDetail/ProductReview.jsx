import React, { useState } from 'react'
import Image from '../../Components/Image'
import { PiHammerLight } from "react-icons/pi";
import { RiPlantLine } from "react-icons/ri";
import { BiSolidDonateHeart } from "react-icons/bi";
import { LuSofa } from "react-icons/lu";
import { FaStar } from "react-icons/fa6";
import { Api } from '../../Api/Api';
import toast from 'react-hot-toast';
import WriteReview from './WriteReview';
import DisplayReviews from './DisplayReviews';

function ProductReview({ product }) {
    const [label, setLabel] = useState('desc')

   const [reviewUpdated, setReviewUpdated] = useState(false);

    return (
        <div className='container mx-auto'>
            <div className="flex flex-wrap items-center justify-between mb-6  p-5 md:p-0">
                <div className='flex divide-x-4 justify-center items-center text-center gap-4 sm:gap-6 pt-9  '>
                    <h1 onClick={() => { setLabel("desc") }}
                        className='font-bold  mb-2  tracking-widest text-3xl text-black   cursor-pointer  capitalize hover:underline active:underline '>
                        Description
                    </h1>
                    <h1
                        className='font-bold mb-2 tracking-widest text-3xl text-black   cursor-pointer  capitalize hover:underline active:underline pl-4 '
                        onClick={() => { setLabel("review") }}>
                        Reviews
                    </h1>
                </div>
            </div>
            <hr className='mt-5 mb-4'></hr>

            {label === "desc" && (
                <div>
                    <div className='md:flex md:flex-wrap'>
                        <div className='flex-[25%] p-2 md:px-2'>
                            <h1 className='font-bold capitalize tracking-widest text-5xl'>{product?.brand_name}</h1>
                            <p className='font-medium capitalize tracking-wider text-3xl mt-10'>Specializes in artisanal, handcrafted furniture, blending traditional woodworking techniques!</p>
                            <p className='font-medium capitalize tracking-wider text-base text-gray-600 mt-10'>Enjoy free shipping on select items and hassle-free returns. Redefine your living space with our expertly curated collections today!</p>
                        </div>
                        <div className='flex-[25%] p-2 md:px-2 '>
                            <Image src="https://cozycorner-be87.kxcdn.com/cozycorner-simple/wp-content/uploads/2025/04/shop-banner-3-simple.jpg" classes='mb-3 max-h-full w-full object-cover md:h-[320px]' />
                        </div>
                    </div>
                    <div className="grid grid-cols-1  sm:grid-cols-2 xl:grid-cols-4  gap-4  ">
                        <div className=" text-left md:text-left  ">
                            <PiHammerLight className="text-4xl mb-4 md:mx-0 mt-7" />

                            <p className="mt-2 text-sm text-gray-700 mb-2">
                                Every piece is meticulously handcrafted by skilled artisans.
                            </p>
                        </div>
                        <div className=" text-left md:text-left ">
                            <RiPlantLine className="text-3xl mb-4 md:mx-0 mt-7" />
                            <p className="mt-2 text-sm text-gray-700 mb-2">
                                We prioritize eco-friendly materials and practices in our creations.
                            </p>
                        </div>
                        <div className=" text-left md:text-left ">
                            <BiSolidDonateHeart className="text-3xl mb-4 md:mx-0 mt-7" />
                            <p className="mt-2 text-sm text-gray-700 mb-2">
                                Tailor your furniture to fit your space and style perfectly.
                            </p>
                        </div>
                        <div className=" text-left md:text-left ">
                            <LuSofa className="text-3xl  mb-4 md:mx-0 mt-7" />
                            <p className="mt-2 text-sm text-gray-700 mb-2">
                                Built to last, using only the highest quality materials.
                            </p>
                        </div>

                    </div>
                    <hr className='mt-10 mb-4' />
                </div>

            )}
            {label === "review" && (
                <div>
                    <h1 className='font-semibold capitalize tracking-widest text-3xl mb-4'>Customer Reviews</h1>
                    {/* <div className="stars flex gap-1 mt-6">
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-gray-200" />
                        <p className='px-2 text-gray-500 text-sm font-medium tracking-wide'>1 Review</p>
                    </div> */}
                
                <WriteReview setReviewUpdated={setReviewUpdated} />
                <DisplayReviews reviewUpdated={reviewUpdated} product={product}/>
                    

                </div>
            )}
        </div>
    )
}

export default ProductReview;