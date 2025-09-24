import React, { useState } from 'react'
import Image from '../../Components/Image';
import { FaStar } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import AddToCart from '../../Components/AddToCart';
import { CiHeart } from "react-icons/ci";
import { Api } from '../../Api/Api';
import toast from 'react-hot-toast';
import AddToWishlist from '../../Components/AddToWIshlist';

function ProductImg({ product }) {
  const [qty, setQty] = useState(product?.quantity || 1);




  return (
    <div className='container mx-auto'>
      <div className='grid gird-cols-1 md:grid-cols-2 py-[140px] gap-8'>


        <div className='relative'>
          <Image classes="w-full object-cover shadow h-full max-h-[500px] rounded-3xl" src={product?.image}></Image>
          <div className='absolute top-6 right-6 z-10'>
            <AddToWishlist
              product={product}
            />
          </div>
        </div>

        <div className=''>
          <p className='text-black text-lg  capitalize '>{product?.brand_name}</p>
          <h1 className='font-bold capitalize tracking-widest text-3xl'>{product?.name}</h1>
          <div className="stars flex gap-1 mt-2">
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-gray-200" />
            <p className='px-2 text-gray-500 text-sm font-medium tracking-wide'>1 Review</p>
          </div>
          <h1 className='mt-4 font-bold capitalize tracking-widest text-3xl text-red-700'>&#8377;{product?.price}</h1>
          <hr className="mt-4 mb-4" />

          <div className='grid grid-cols-1 gap-y-2'>
            <div className='flex gap-2 items-center'><TiTick size={24} className="text-yellow-500" /><p>Beautiful color</p></div>
            <div className='flex gap-2 items-center'><TiTick size={24} className="text-yellow-500" /><p>Vegan nail polish</p></div>
            <div className='flex gap-2 items-center'><TiTick size={24} className="text-yellow-500" /><p>Up to 60 days for free return</p></div>
          </div>
          <hr className="mt-4 mb-6" />

          <div className='flex items-center mb-3 gap-5'>
            <div className='flex items-center '>
              <button onClick={() => { setQty(qty - 1) }} className=' min-w-[40px] min-h-[40px] bg-gray-300 text-lg text-black px-2 py-1 rounded-[4px]'>-</button>
              <p className='min-w-[40px] text-center'> {qty}</p>
              <button onClick={() => { setQty(qty + 1) }} className=' min-w-[40px] min-h-[40px] bg-gray-300 text-lg text-black px-2 py-1 rounded-[4px]'>+</button>
            </div>
            <div className='max-w-[200px]'>
              <AddToCart product={product} product_id={product?._id || product.product?._id} qty={qty} />
            </div>
          </div>
          <hr className="mt-5 mb-4" />

          <div className="flex flex-col gap-2 mt-4">
            <p className="flex items-center text-gray-500 text-base font-medium tracking-wide">
              Product Code
              <span className="ml-6 text-gray-700">{product?._id}</span>
            </p>
            <p className="flex items-center text-gray-500 text-base font-medium tracking-wide">
              Availability
              <span className="ml-[48px] text-green-600">In Stock</span>
            </p>
          </div>

          {/* <p className='text-gray-500 text-base font-medium tracking-wide'>Availability </p>
                      <p className='text-gray-500 text-base font-medium tracking-wide'>In Stock</p> */}
        </div>
      </div>
    </div>
  )
}

export default ProductImg;