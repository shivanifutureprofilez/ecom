import React, { useEffect, useState } from 'react'
import { Api } from '../../Api/Api';
import toast from 'react-hot-toast';
import { LiaWindowClose } from "react-icons/lia";

function ProductList() {
    const [products,setProducts]=useState([]);
    const getProducts = () =>{
        Api.get('/cart/all_carts_items')
            .then((res) =>{
                console.log("res" ,res)
                if(res.data.status){
                    setProducts(res.data.lists);
                } else{
                    setProducts([]);
                }
            }).catch((error)=>{
                toast.error('No Products Found. Try Again Later');
            });
    }

    useEffect(()=>{
        getProducts();
    },[])

    
    const CARTITEM = ({item, index}) => { 
        
        const [qty, setQty] = useState(item?.quantity || 1);
        const value=1;
        const UpdateCart = (product_id, qty) => {
            const data = Api.post('/cart/updateCart', {product_id, qty});
            data.then((res)=>{
                if(res.data.status){
                    toast.success(res.data.message)
                } else { 
                    toast.error(res.data.message)
                }
            })
        }
        const deleteProduct = () =>{
            const data = Api.post('/cart/deleted_cart_items', {id:item._id});
            data.then((res)=>{
                if(res.data.status){
                    toast.success(res.data.message)
                    getProducts()
                }
                else{
                    toast.error(res.data.message)
                }
            })
        } 
        const increseQty = () => { 
            UpdateCart(item?.product?._id, qty+1);
            setQty(qty+1);
        }
        const decreseQty = () => { 
            if(qty>1){
                UpdateCart(item?.product?._id, qty-1);
                setQty(qty-1);
            }
        }

        return <>
            <tr className=" border-t  hover:bg-gray-100 align-center" key={index}>
                <td className="pl-4 md:pl-6 lg:pl-10 pr-3 py-4 text-[20px] justify-center font-medium text-[#46494D]">
                    <div className='flex flex-wrap'>
                    <img className='h-[70px] w-[80px]' src={item?.product?.image}/>
                    <div className='pt-4 pl-2'>
                    {item?.product?.name}
                    </div>
                    </div>
                </td>
                <td className="px-3 py-4 text-[15px] font-medium text-[#46494D] ">
                    ${item?.product?.price}
                </td>
                <td className="px-3 py-4 text-[15px]  font-medium text-[#46494D] ">

                    <div className='flex items-center'>
                        <button onClick={decreseQty} className=' min-w-[40px] min-h-[40px] bg-gray-300 text-lg text-black px-2 py-1 rounded-[4px]'>-</button>
                        <p className='min-w-[40px] text-center'> {qty}</p>
                        <button  onClick={increseQty} className=' min-w-[40px] min-h-[40px] bg-gray-300 text-lg text-black px-2 py-1 rounded-[4px]'>+</button>
                    </div>
                    {/* /{products?.orderDate} */}
                   
                </td>
                <td className="px-3 py-4 text-[15px] font-medium text-[#46494D] ">
                    {item?.product?.price * qty }
                </td>
                <td className="px-3 py-4 text-[15px] pl-8 font-medium text-[#46494D] ">
                    <button onClick={deleteProduct}><LiaWindowClose size={24} className='align-center'/></button>
                </td>

                
            </tr>
        </>
    }


  return (
    <div className='container mx-auto '>
        <div className='flex flex-wrap'>
            <div className="flex-1 pt-[60px] overflow-x-auto">
                <table className=" w-full ">
                    <thead>
                        <tr>
                            <td className="pl-4 md:pl-6 lg:pl-10  pr-3 py-3 lg:py-3.5 text-[20px] font-medium text-black whitespace-nowrap  text-left uppercase ">
                                Product Info
                            </td>
                            <td className="px-3 py-3 lg:py-3.5 text-[20px] font-medium text-black whitespace-nowrap text-left uppercase ">
                                Price
                            </td>
                            <td className="px-3 py-3 lg:py-3.5 text-[20px] font-medium text-black whitespace-nowrap text-left uppercase ">
                                Quantity
                            </td>
                            <td className="px-3 py-3 lg:py-3.5 text-[20px] font-medium text-black whitespace-nowrap text-left uppercase ">
                                Total
                            </td>
                              <td className="px-3 py-3 lg:py-3.5 text-[20px] font-medium text-black whitespace-nowrap text-left uppercase ">
                                Remove
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
                                <CARTITEM item={item} index={index} />
                            ))
                        )}
                    </tbody>
                </table>
            </div>
            
               
           <div className=''>
            <h2 className='px-3 pt-[75px] text-[20px] font-medium text-black whitespace-nowrap text-left uppercase'>Promo Code</h2>
            <div className='flex flex-wrap gap-3 pt-5'>
                <input type="text" placeholder="Coupon Code" className=' bg-gray-50 border border-gray-300 text-gray-900 text-sm  
                           focus:ring-blue-500 focus:border-blue-500 py-3 px-4'></input>
                <button className='bg-black text-white  font-medium p-3'>Apply</button>
            </div>
            <div className='bg-[#f8f8f9] rounded-lg mt-8'>
                
                    <div className="flex justify-between flex-wrap gap-3">
                        <div><span className='text-[16px] font-medium text-black  text-left uppercase'>Sub Total:</span></div>
                        <div><span className='text-[16px] font-medium text-black text-left uppercase'>$870</span></div>
                    </div>
                    <div className="flex justify-between flex-wrap gap-3">
                        <div><span className='text-[16px] font-medium text-black  text-left uppercase'>Coupon Discount:</span></div>
                        <div><span className='text-[16px] font-medium text-black  text-left uppercase'>$20</span></div>
                    </div>
                    <div className="flex justify-between flex-wrap gap-3">
                        <div><span className='text-[16px] font-medium text-black  text-left uppercase'>VAT:</span></div>
                        <div><span className='text-[16px] font-medium text-black text-left uppercase'>$5</span></div>
                    </div>             
            </div>
            
        </div>
    </div>
    </div>
);
}

export default ProductList;