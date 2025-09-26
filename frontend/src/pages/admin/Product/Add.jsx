import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { MdOutlineNoteAdd } from "react-icons/md";
import { Api } from '../../../Api/Api';
import Admin from '../Admin';
import { useNavigate, useParams } from 'react-router-dom';

function Add() {
    const { id } = useParams();
        const [items, setItems] = useState({
            name: "",
            product_type: "chair",
            brand_name: "",
            price: "",
            image: "",
            stock: "",
            content: "",
        })

    const ShowProductDetails = (id) => {
        Api.get(`/product/product-detail/${id}`)
            .then((res) => {
                console.log("res", res);
                if (res.data.status) {
                    //toast.success(res.data.message);
                    const data = res.data.productData;
                    setItems({
                        name: data.name || "",
                        product_type: data.product_type || '',
                        brand_name: data.brand_name || '',
                        price: data.price || '',
                        stock: data.stock || '',
                        image: data.image || '',
                        content: data.content || '',
                        id :  data?._id
                    })
                } else {
                    toast.error(res.data.message);
                }
            })
            .catch((error) => {
                console.log("error", error);
                toast.error("Unable To Fetch Product Details. Try Again Later.");
            });
    };

    console.log("items" ,items)

    useEffect(() => {
        if (id) {
            ShowProductDetails(id);
        }
    }, [id]);



    const editProduct = () => {
        const data = Api.post(`/product/update-product`, items);
        data.then((res) => {
            if (res.data.status) {
                toast.success(res.data.message);
                navigate("/admin/product");
            } else {
                toast.error(res.data.message)
            }
        })
    }



    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setItems(values => ({ ...values, [name]: value }));
    }
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (items.name === '' || items.product_type === '' || items.brand_name === '' || items.price === '' || items.image === '' || items.content === '') {
                toast.error("All fields are required");
                return false;
            }
            setLoading(true)
            const response = await Api.post('/product/add-product', items);
            toast.success(response?.data?.message);
            navigate("/admin/product")
            setItems({
                name: "",
                product_type: "",
                brand_name: "",
                price: "",
                image: "",
                content: ""
            })
            setLoading(false)
        }
        catch (error) {
            console.log("error :", error);
            toast.error(error.response.data.message || "Something went wrong");
            setLoading(false);
        }
    };
    return (
        <Admin>
            <div className="container  mx-auto ">
                <div className=" w-full mt-[124px] flex flex-wrap md:flex-nowrap ">
                    <div className="w-full relative ">
                        <div className='flex'>
                            <MdOutlineNoteAdd className='text-5xl min-h-[55px] min-w-[55px] text-yellow-600 mb-2  pt-0 round-[10px] p-2' />
                            <h5 className="text-2xl font-medium text-gray-800 mt-2">Add Products</h5>
                        </div>
                        <div className='container mx-auto'>
                            <form className="mt-6" onSubmit={handleSubmit}>
                                <div className='grid grid-cols-4 gap-4 mb-4 mt-3'>
                                    <div >
                                        <label className="font-medium text-base block mb-2">Product Name</label>
                                        <input
                                            type="text"
                                            onChange={handleChange}
                                            value={items?.name}
                                            name='name'
                                            placeholder="Enter Product Name"
                                            className=" w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                                   focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                                        />
                                    </div>
                                    <div>
                                        <label className="font-medium text-base block mb-2 ">Product Type</label>
                                        <select className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                                   focus:ring-blue-500 focus:border-blue-500 py-3 px-4 "
                                            onChange={handleChange}
                                            value={items?.product_type}
                                            name='product_type'
                                        >
                                            <option className="pl-2 pr-2" value="chair">Chair </option>
                                            <option className="pl-1 pr-1" value="interior">Interior</option>
                                            <option className="pl-2 pr-2" value="table">Table</option>
                                            <option className="pl-2 pr-2" value="lamp">Lamp</option>
                                            <option className="pl-2 pr-2" value="sofa">Sofa</option>
                                        </select>
                                    </div>
                                    <div >
                                        <label className="font-medium text-base block mb-2">Brand Name</label>
                                        <input
                                            type="text"
                                            onChange={handleChange}
                                            value={items?.brand_name}
                                            name='brand_name'
                                            placeholder="Enter Brand Name"
                                            className=" w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                                   focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                                        />
                                    </div>
                                    <div >
                                        <label className="font-medium text-base block mb-2">Brand Name</label>
                                        <input
                                            type="number"
                                            onChange={handleChange}
                                            value={items?.stock}
                                            name='stock'
                                            placeholder="Enter Stock qty"
                                            className=" w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                                   focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                                        />
                                    </div>
                                </div>
                                <div className='grid md:grid-cols-2 gap-4 mb-4 mt-3'>
                                    <div >
                                        <label className="font-medium text-base block mb-2">Price</label>
                                        <input
                                            onChange={handleChange}
                                            value={items?.price}
                                            name='price'
                                            type="number"
                                            placeholder="Enter Price"
                                            className=" w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                                   focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                                        />
                                    </div>
                                    <div>
                                        <label className="font-medium text-base block mb-2">Image Url</label>
                                        <input
                                            type="text"
                                            onChange={handleChange}
                                            value={items?.image}
                                            name='image'
                                            placeholder="Enter Image Url"
                                            className=" w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                                   focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                                        />
                                    </div>

                                </div>
                                <div className='mb-3 mt-3'>
                                    {/* <div > */}
                                    <label className="font-medium text-base block mb-2">Product Description</label>
                                    <textarea
                                        type="text"
                                        onChange={handleChange}
                                        value={items?.content}
                                        name='content'
                                        placeholder="Enter Product Description"
                                        className=" w-full h-28 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                                   focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                                    />
                                    {/* </div> */}
                                </div>
                            </form>
                        </div>
                        <button
                            onClick={id ? editProduct : handleSubmit}
                            type="submit"
                            disabled={loading}
                            className="w-full md:w-32 bg-black text-white font-medium py-3"
                        >
                            {id ? "Edit" : (loading ? "Loading..." : "Submit")}
                        </button>
                    </div>
                </div>
            </div>

        </Admin>
    )
}
export default Add;