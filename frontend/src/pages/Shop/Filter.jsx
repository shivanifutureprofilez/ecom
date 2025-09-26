import React, { useState } from 'react'

function Filter({setCategory, category, select, setSelect}) {

    const params = new URLSearchParams(window.location.search);
    const selected_category = params.get("selected_category");

    const [cats, setCats] = useState(selected_category || category);
    const handleChange = (e) => {
        setSelect(e.target.value);
    };
    const updatecategory = (e) => { 
        setCats(e)
        setCategory(e)
    }

    return (
        <div className='container mt-12 mx-auto'>
        <div className='container mx-auto  pb-8 md:pb-[50px]'>
            <div className='lg:flex justify-between items-center flex-wrap '>

                <div className='w-full md:w-auto py-2 '>
                    <h2 className='font-medium text-base block mb-2'>Choose Category</h2>
                    <div className='flex items-center flex-wrap gap-2'>
                        <button className={`border py-[7px] rounded-lg px-[8px] hover:bg-yellow-700 hover:text-white ${cats == 'all' ? "bg-black text-white" : ''}  `} onClick={()=> {updatecategory('all')}}><span className="pl-2 pr-2">All Products</span></button>
                        
                        <button className={`border py-[7px] rounded-lg px-[8px] hover:bg-yellow-700 hover:text-white ${cats == 'sofa' ? "bg-black text-white" : ''}  `} onClick={()=> {updatecategory('sofa')}}><span className="pl-2 pr-2">Sofa and Chair</span></button>

                        <button className={`border py-[7px] rounded-lg px-[8px] hover:bg-yellow-700 hover:text-white ${cats == 'chairs' ? "bg-black text-white" : ''}  `} onClick={() => {updatecategory('chairs')}}><span className="pl-2 pr-2">Full Interior</span></button>

                        <button className={`border py-[7px] rounded-lg px-[8px] hover:bg-yellow-700 hover:text-white ${cats == 'lamp' ? "bg-black text-white" : ''}  `} onClick={() => {updatecategory('lamp')}}><span className="pl-2 pr-2" >Lamp and Vase</span></button>
                      
                        <button className={`border py-[7px] rounded-lg px-[8px] hover:bg-yellow-700 hover:text-white ${cats == 'table' ? "bg-black text-white" : ''}  `} onClick={() => {updatecategory('table')}}><span className="pl-2 pr-2">Tables</span></button>

                        <button className={`border py-[7px] rounded-lg px-[8px] hover:bg-yellow-700 hover:text-white ${cats == 'chair' ? "bg-black text-white" : ''}  `} onClick={() => {updatecategory('chair')}}><span className="pl-2 pr-2">Chairs</span></button>
                    </div>
                </div>

                <div className='w-full md:w-auto py-2  flex justify-between items-center '>
                    <div className='w-full '>
                        <h2 className='font-medium text-base block mb-1'>Price Range</h2>
                        <div className='flex flex-wrap'>
                            <select className="border py-[7px] rounded-lg px-[8px] me-2" value={select} onChange={handleChange}>
                                <option className="pl-1 pr-1" value="all">Popular</option>
                                <option className="pl-1 pr-1" value="low">Low to High</option>
                                <option className="pl-1 pr-1" value="high">High to Low</option>
                            </select>
                        </div>
                    </div>
                    <div className='md:pl-5    '>
                        <h2 className='font-medium text-base block mb-2  '>Choose Brand</h2>
                        <select className="border py-[7px] rounded-lg px-[8px] me-2">
                            <option className="pl-1 pr-1" value="one">Navana Furniture</option>
                            <option className="pl-2 pr-2" value="two">RFL Furniture </option>
                            <option className="pl-2 pr-2" value="three">Gazi Furniture</option>
                            <option className="pl-2 pr-2" value="four">Luxury Furniture 4</option>
                            <option className="pl-2 pr-2" value="four">Luxury Furniture 4</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Filter;