import React from 'react'

function Filter() {
    return (
        <div className='max-w-6xl mt-12 mx-auto px-4 border-b border-bdr-clr dark:border-bdr-clr-dark'>
        <div className='container max-w-6xl mx-auto  pb-8 md:pb-[50px]'>
            <div className='lg:flex justify-between items-center flex-wrap '>

                <div className='w-full md:w-auto py-2 '>
                    <h2 className='font-medium text-base block mb-2'>Choose Category</h2>
                    <div className='flex items-center flex-wrap gap-2'>
                        <button className='border py-[7px] rounded-lg px-[8px] hover:bg-yellow-700 hover:text-white'><span className="pl-2 pr-2">Sofa and Chair</span></button>
                        <button className='border py-[7px] rounded-lg px-[8px] hover:bg-yellow-700 hover:text-white'><span className="pl-2 pr-2">Full Interior</span></button>
                        <button className='border py-[7px] rounded-lg px-[8px] hover:bg-yellow-700 hover:text-white'><span className="pl-2 pr-2">Lamp and Vase</span></button>
                        <button className='border py-[7px] rounded-lg px-[8px] hover:bg-yellow-700 hover:text-white'><span className="pl-2 pr-2">Table</span></button>
                        <button className='border py-[7px] rounded-lg px-[8px] hover:bg-yellow-700 hover:text-white'><span className="pl-2 pr-2">Wood Design</span></button>
                    </div>
                </div>

                <div className='w-full md:w-auto py-2  flex justify-between items-center '>
                    <div className='w-full '>
                        <h2 className='font-medium text-base block mb-1   '>Price Range</h2>
                        <div className='flex flex-wrap '>
                            <select className="border py-[7px] rounded-lg px-[8px] me-2 ">
                            <option className="pl-1 pr-1" value="one">Popular</option>
                            <option className="pl-1 pr-1" value="one">Low to High</option>
                            <option className="pl-1 pr-1" value="one">High to Low</option>
                            <option className="pl-1 pr-1" value="one">High to Low</option>
                        </select>
                        </div>
                    </div>
                    <div className='md:pl-5    '>
                        <h2 className='font-medium text-base block mb-2  '>Choose Brand</h2>
                        <select className="border py-[7px] rounded-lg px-[8px] me-2 ">
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