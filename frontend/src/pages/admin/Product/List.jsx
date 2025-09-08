import React from 'react'
import Admin from '../Admin';
import Listing from '../../Shop/Listing';
import { Link } from 'react-router-dom';

export default function List() {

  return (
    <Admin>
     
        <div className='flex flex-wrap justify-between pt-6'>
          <h3 className='text-xl md:text-xl font-medium leading-none text-gray-800 '>Product List</h3>
          <Link to="/admin/product-add" className='bg-blue-300 p-2  rounded-lg text-[14px] font-medium mb-2'>Add Product</Link>
        </div>
        
        <Listing category={"all"} />
        
    </Admin>
  )
}
