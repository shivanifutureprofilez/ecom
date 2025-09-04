import React from 'react'

function OrderHistory({ user }) {

   const products = [
  {
    "imageUrl": "https://furnixar.vercel.app/assets/cart-01-MmgCuaFB.jpg",
    "Type":"Sofa",
    "description": "Modern Sofa Set",
    "price": "$74",
    "orderDate": "2025-09-01"
  },
  {
    "imageUrl": "https://furnixar.vercel.app/assets/cart-02-DZcwxWIZ.jpg",
    "Type":"Chair",
    "description": "Classic Chair with Vase",
    "price": "$34",
    "orderDate": "2025-09-02"
  },
  {
    "imageUrl": "https://furnixar.vercel.app/assets/cart-03-C0a5O7pj.jpg",
    "Type":"Interior",
    "description": "Luxury Hanging Lamp",
    "price": "$33",
    "orderDate": "2025-09-03"
  }
]

  return (
     <div className='container mx-auto bg-[#f8f8f9]'>
            <div className="overflow-x-auto bg-[#f8f8f9]">
                <table className="min-w-full bg-[#f8f8f9]">
                    <thead>
                        <tr>
                            <td className="pl-4 md:pl-6 lg:pl-10  pr-3 py-3 lg:py-3.5 text-[20px] font-medium text-[#8D929A] whitespace-nowrap  text-left uppercase ">
                                Product
                            </td>
                            <td className="px-3 py-3 lg:py-3.5 text-[20px] font-medium text-[#8D929A] whitespace-nowrap text-left uppercase ">
                                Price
                            </td>
                            <td className="px-3 py-3 lg:py-3.5 text-[20px] font-medium text-[#8D929A] whitespace-nowrap text-left uppercase ">
                                Order Date
                            </td>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {products?.length === 0 ? (
                            <tr>
                                <td colSpan="8">
                                    <div className="flex items-center justify-center h-20">
                                        <p className="text-[15px] font-medium text-[#46494D] ">
                                            No Data Found !!
                                        </p>
                                    </div>
                                </td>
                            </tr>
                        ) : (
                            products && products?.map((item, index) => (
                                <tr className=" border-t  hover:bg-gray-100" key={index}>
                                    <td className="pl-4 md:pl-6 lg:pl-10 pr-3 py-4 text-[20px] justify-center font-medium text-[#46494D]">
                                       <div className='flex flex-wrap'>
                                       <img className='h-[70px] w-[80px]' src={item?.imageUrl}/>
                                       <div className='pt-4 pl-2'>
                                       {item?.description}
                                        </div>
                                       </div>
                                    </td>
                                    <td className="px-3 py-4 text-[15px] font-medium text-[#46494D] ">
                                        {item?.price}
                                    </td>
                                    <td className="px-3 py-4 text-[15px] font-medium text-[#46494D] ">
                                        {item?.orderDate}
                                    </td>

                                  
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
  )
}

export default OrderHistory;