import React, { useEffect, useState } from 'react'
import { Api } from '../../Api/Api'
import defaultImage from '../../Assets/defaultimage.jpg';
import Image from '../../Components/Image';
import PriceFormat from '../../Components/PriceFormat';

function OrderHistory({ user }) {

    // const products = [
    //     {
    //         "imageUrl": "https://furnixar.vercel.app/assets/cart-01-MmgCuaFB.jpg",
    //         "Type": "Sofa",
    //         "description": "Modern Sofa Set",
    //         "price": "$74",
    //         "orderDate": "2025-09-01"
    //     },
    //     {
    //         "imageUrl": "https://furnixar.vercel.app/assets/cart-02-DZcwxWIZ.jpg",
    //         "Type": "Chair",
    //         "description": "Classic Chair with Vase",
    //         "price": "$34",
    //         "orderDate": "2025-09-02"
    //     },
    //     {
    //         "imageUrl": "https://furnixar.vercel.app/assets/cart-03-C0a5O7pj.jpg",
    //         "Type": "Interior",
    //         "description": "Luxury Hanging Lamp",
    //         "price": "$33",
    //         "orderDate": "2025-09-03"
    //     }
    // ]
    const [history, setHistory] = useState([]);
    const getHistory = () => {
        Api.get('/checkout/orderHistory')
            .then((res) => {
                if (res.data.status) {
                    setHistory(res.data.history);
                    console.log(res.data.history);
                }
                else {
                    setHistory([]);
                }
            })
            .catch((error) => {
                console.log('error ', error);
            })
    }
    useEffect(() => {
        getHistory();
    }, []);
    return (
        <div className='container mx-auto bg-[#f8f8f9]'>

            <div className="overflow-x-auto  ">

                <div className='p-6'>
                    <h2 className='text-2xl font-bold pb-6'>Orders History</h2>
                    {history && history.map((item, index)=>{
                        return <div className='bg-white rounded-[30px]   !mb-6 p-6'>
                        <h2 className='font-bold'>Order #{item._id}</h2>
                        <h2 className='my-2'>Name : {item.name}</h2>
                        <h2 className='my-2'>Email : {item.email}</h2>
                        <h2 className='my-2'>Phone : {item.phone}</h2>
                        <h2 className='my-2'>Address : {item.addressL1}</h2>
                        <h2 className='capitalize'>Payment Mode : {item.paymentMode}</h2>
                        <table className='w-full mt-4'>
                            <thead className='bg-gray-200    text-black'>
                                <th className='p-2 ps-[50px]' align="left">Product</th>
                                <th className='p-2' align="left">Status</th>
                                <th className='p-2' align="left">Order Date</th>
                            </thead>
                            {item.products.map((product, pIndex) => (
                                    <tr className=" border-t  hover:bg-gray-100" key={index}>
                                        <td className="pl-4 md:pl-6 lg:pl-10 pr-3 py-4 text-[20px] justify-center font-medium text-[#46494D]">
                                            <div className='flex  '>
                                                <Image classes={' rounded-xl !h-[50px] !w-[50px]'} src={product?.product?.image || {defaultImage}} alt={product?.product?.name} />
                                                {/* <img className='h-[70px] w-[80px]' src={product?.product?.image} /> */}
                                                <div>

                                                    <h2 className='  pl-2 max-w-[230px]  min-w-[230px] capitalize  line-clamp-1'>
                                                        {product?.product?.name}
                                                    </h2>
                                                    <p className='text-sm font-bold text-black pl-2'>
                                                        {product?.product?.price} * {product?.quantity} = 
                                                        <PriceFormat price={product?.product?.price * product?.quantity} />
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                         
                                        <td className="px-3 py-4 text-[15px] font-medium text-[#46494D] ">
                                            <button className={`text-white px-2 py-1 rounded-xl uppercase text-sm ${item?.status == 2 ? "bg-red-500" :  (item?.status == 1 ? "bg-green-700" : "bg-gray-600")}`}>
                                            {item?.status == 2 ? "Failed" :  (item?.status == 1 ? "Delivered" : "Pending")}

                                            </button>
                                        </td>
                                        <td className="px-3 py-4 text-[15px] font-medium text-[#46494D] ">
                                            {item?.createdAt.split('T')[0]}
                                        </td>
                                    </tr>
                                ))}
                        </table>

                        </div>
                    })}
                </div>
                 
            </div>
        </div>
    )
}

export default OrderHistory;