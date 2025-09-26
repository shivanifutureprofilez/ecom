import React, { useEffect, useState } from 'react'
import { Api } from '../../Api/Api';
import toast from 'react-hot-toast';
import { LiaWindowClose } from "react-icons/lia";
import { useNavigate } from 'react-router-dom';
import Image from "../../Components/Image";

function ProductList({ cart, checkout, setCarts}) {

    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    function getSubtotal(p) {
        const st = p.reduce((acc, item) => {
            return acc + (item?.product?.price * item?.quantity);
        }, 0);
        setsubTotal(st);
    }

    const [subTotal, setsubTotal] = useState(0);

    const [shipping, setShipping] = useState(0);
    const vat = 5;

    const [total, setTotal] = useState(subTotal + vat + shipping);

    useEffect(() => {
        setTotal(subTotal + vat + shipping)
    }, [subTotal, shipping]);

    const getProducts = () => {
        Api.get('/cart/all_carts_items')
            .then((res) => {
                if (res.data.status) {
                    setProducts(res.data.lists);
                    getSubtotal(res.data.lists || [])
                    setCarts && setCarts(res.data.lists || [])
                } else {
                    setProducts([]);
                }
            }).catch((error) => {
                console.log("error",error)
                // toast.error('No Products Found. Try Again Later');
            });
    }

    useEffect(() => {
        getProducts();
    }, [])


    const CARTITEM = ({ item, index }) => {

        const [qty, setQty] = useState(item?.quantity || 1);
        const value = 1;
        const UpdateCart = (product_id, qty, price) => {
            const data = Api.post('/cart/updateCart', { product_id, qty, price });
            data.then((res) => {
                if (res.data.status) {
                    //toast.success(res.data.message)
                } else {
                    toast.error(res.data.message)
                }
            })

        }
        const deleteProduct = () => {
            const data = Api.post('/cart/deleted_cart_items', { id: item._id });
            data.then((res) => {
                if (res.data.status) {
                    toast.success(res.data.message)
                    getProducts()
                }
                else {
                    toast.error(res.data.message)
                }
            })
        }
        const increseQty = () => {
            UpdateCart(item?.product?._id, qty + 1);
            setQty(qty + 1);
            item.quantity = qty + 1;
            getSubtotal(products)
        }

        const decreseQty = () => {
            if (qty > 1) {
                UpdateCart(item?.product?._id, qty - 1);
                setQty(qty - 1);
                item.quantity = qty - 1;
                getSubtotal(products)
            }

        }

        return <>
            <tr className=" border-t  hover:bg-gray-100 align-center" key={index}>
                <td className="pl-4 lg:pl-6 lg:pl-10 pr-3 py-4 text-[20px] justify-center font-medium text-[#46494D]">
                    <div className='flex  items-center'>
                        <Image classes='h-[50px] w-[60px] lg:h-[70px] lg:w-[80px] border rounded-xl' src={item?.product?.image} />
                        <h2 className='ms-4 text-[16px] lg:text-xl line-clamp-2'>
                            {item?.product?.name}
                        </h2>
                    </div>
                </td>
                <td className="px-3 py-4 text-[15px] font-medium text-[#46494D] ">
                    &#8377;{item?.product?.price}*{qty}
                </td>
                {cart ? <td className="px-3 py-4 text-[15px]  font-medium text-[#46494D] ">

                    <div className='flex items-center'>
                        <button onClick={decreseQty} className=' min-w-[40px] min-h-[40px] bg-gray-300 text-lg text-black px-2 py-1 rounded-[4px]'>-</button>
                        <p className='min-w-[40px] text-center'> {qty}</p>
                        <button onClick={increseQty} className=' min-w-[40px] min-h-[40px] bg-gray-300 text-lg text-black px-2 py-1 rounded-[4px]'>+</button>
                    </div>

                </td> : ''}
                {cart ? <td className="px-3 py-4 text-[15px] pl-8 font-medium text-[#46494D] ">
                    <button onClick={deleteProduct}><LiaWindowClose size={24} className='align-center' /></button>
                </td> : ''}
            </tr>
        </>
    }

    return (
        <div className='container m-auto px-4 py-6 md:py-12'>
            {products && products.length > 0 ? <div className='lg:flex  gap-[20px]  '>
                <div className={`w-full ${cart ? 'w-full' : ''}  p-3 overflow-x-auto`}>
                    <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                        <thead>
                            <tr>
                                <td className="pl-4 min-w-[300px]   lg:pl-10  pr-3 py-3 lg:py-3.5 lg:text-[20px] font-medium text-black whitespace-nowrap  text-left uppercase ">
                                    Product Info
                                </td>
                                <td className="px-3 py-3 lg:py-3.5 lg:text-[20px] font-medium text-black whitespace-nowrap text-left uppercase ">
                                    Price
                                </td>
                                {cart ? <td className="px-3 py-3 lg:py-3.5 lg:text-[20px] font-medium text-black whitespace-nowrap text-left uppercase ">
                                    Quantity
                                </td> : ''}

                                {cart ? <td className="px-3 py-3 lg:py-3.5 lg:text-[20px] font-medium text-black whitespace-nowrap text-left uppercase ">
                                    Remove
                                </td> : ''}

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
                    {checkout && (
                        <div className="flex gap-6 items-center p-3">
                            <span className="text-[14px] lg:text-[18px] text-black font-semibold uppercase">
                                Total:
                            </span>
                            <span className="text-[14px] lg:text-[18px] font-semibold text-black uppercase">
                                &#8377;{total}
                            </span>
                        </div>
                    )}

                </div>
                <div className={`${cart ? 'w-full lg:max-w-[300px]  ' : ''}`}>

                    <div
                        className={`${cart ? 'bg-[#f8f8f9] rounded-xl border  border-[#17243026] border-opacity-15 p-3' : 'bg-white'}`}
                    >

                        {cart ?
                            <div>
                                <div className="flex justify-between flex-wrap gap-3 pt-3">
                                    <div><span className='text-[12px] lg:text-[14px] font-medium text-black  text-left uppercase'>Sub Total:</span></div>
                                    <div><span className='text-[12px] lg:text-[14px] font-medium text-black text-left uppercase'>&#8377;{subTotal}</span></div>
                                </div>
                                <div className="flex justify-between flex-wrap gap-3 pt-3">
                                    <div><span className='text-[12px] lg:text-[14px] font-medium text-black  text-left uppercase'>VAT:</span></div>
                                    <div><span className='text-[12px] lg:text-[14px] font-medium text-black text-left uppercase'>&#8377;5</span></div>
                                </div>
                                <div className='border-b border-[#17243026]  pt-4 pb-4 '></div>

                                <div className="flex justify-between flex-wrap gap-3 pt-3">
                                    <div><input
                                        type="radio"
                                        name="shipping"
                                        value={0}
                                        onChange={(e) => setShipping(Number(e.target.value))} />
                                        <label className='text-[12px] lg:text-[14px] font-medium text-black leading-normal  text-left uppercase'> Free Shipping </label></div>
                                    <div><span className='text-[12px] lg:text-[14px] font-medium text-black text-left uppercase'>&#8377;0</span></div>
                                </div>

                                <div className="flex justify-between flex-wrap gap-3 pt-3">
                                    <div><input
                                        type="radio"
                                        name="shipping"
                                        value={40}
                                        onChange={(e) => setShipping(Number(e.target.value))} />
                                        <label className='text-[12px] lg:text-[14px] font-medium text-black leading-normal  text-left uppercase'> Fast Shipping </label></div>
                                    <div><span className='text-[12px] lg:text-[14px] font-medium text-black text-left uppercase'>&#8377;40</span></div>
                                </div>

                                <div className="flex justify-between flex-wrap gap-3 pt-3">
                                    <div><input
                                        type="radio"
                                        name="shipping"
                                        value={20}
                                        onChange={(e) => setShipping(Number(e.target.value))} />
                                        <label className='text-[12px] lg:text-[14px] font-medium text-black leading-normal  text-left uppercase'> Local Pickup </label></div>
                                    <div><span className='text-[12px] lg:text-[14px] font-medium text-black text-left uppercase'>&#8377;20</span></div>
                                </div>


                                <div className='border-b border-[#17243026]  pt-4 pb-4 '></div> </div> : ''}

                        {!checkout && (

                            <div className={`${cart ? 'flex justify-between items-center border-b border-[#17243026] pb-3 gap-3 pt-3' : 'mt-6'}`}>
                                <span className='text-[12px] lg:text-[14px]  text-black  font-semibold text-left uppercase'>Total:</span>
                                <span className='text-[12px] lg:text-[14px] font-semibold text-black text-left uppercase'>&#8377;{total}</span>
                            </div>
                        )}


                    </div>
                    {cart ? <div className="flex justify-between gap-3 pt-6">
                        <button
                            onClick={() => navigate('/shop')}
                            className="border border-black text-black bg-white hover:bg-black hover:text-white font-medium p-3"
                        >
                            Continue Shopping
                        </button>

                        <button
                            onClick={() => navigate('/checkout')}
                            type="submit"
                            className="bg-yellow-700 text-white border border-yellow-700 hover:bg-white hover:text-yellow-700 font-medium p-3"
                        >
                            Checkout
                        </button>
                    </div> : ''}


                </div>

            </div> : 

            <div className='min-h-[40vh] flex justify-center items-center py-20 text-2xl uppercase px-4 text-gray-400 text-center'>No Products in cart !!</div>
            
            }
        </div>
    );
}

export default ProductList;