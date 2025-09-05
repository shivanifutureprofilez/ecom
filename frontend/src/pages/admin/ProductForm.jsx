import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { MdOutlineNoteAdd } from "react-icons/md";
import { Api } from '../../Api/Api';
import { useNavigate } from 'react-router-dom';

function ProductForm() {
    const [items, setItems] = useState ({
        name: "",
        product_type: "",
        brand_name: "",
        price:"",
        image:"",
        content:""
      })

      const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setItems(values => ({... values, [name]: value}));  //spread operator
      }
    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = Api.post('/add-product', items);

      }
    catch (error) {
      console.log("error :", error);
      toast.error(error.response.data.message || "Something went wrong");
      //setLoading(false);
    }
  };
    return (
        <div className='container mx-auto'>
            <div>
                <div className="container flex justify-center items-center mx-auto xl:max-w-[1440px]">
                    <div className="p-[20px] w-full lg:p-[30px] flex flex-wrap md:flex-nowrap ">
                        <div className="w-full relative ">
                            <div className='flex'>
                                <MdOutlineNoteAdd className='text-5xl min-h-[55px] min-w-[55px] text-yellow-600 mb-2  pt-0 round-[10px] p-2' />
                                <h5 className="text-2xl font-medium text-gray-800 mt-2">Add Products</h5>
                            </div>
                            <div className='container mx-auto'>
                                <form className="mt-6">
                                    <div className='grid grid-cols-3 gap-4 mb-4 mt-3'>
                                        <div >
                                            <label className="font-medium text-base block mb-2">Product Name</label>
                                            <input
                                                type="text"
                                                placeholder="Enter Product Name"
                                                className=" w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                                   focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                                            />
                                        </div>
                                        <div>
                                            <label className="font-medium text-base block mb-2">Product Type</label>
                                            <select className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                                   focus:ring-blue-500 focus:border-blue-500 py-3 px-4 ">
                                                <option className="pl-1 pr-1" value="Interior">Interior</option>
                                                <option className="pl-2 pr-2" value="two">Chair </option>
                                                <option className="pl-2 pr-2" value="three">Table</option>
                                                <option className="pl-2 pr-2" value="four">Lamp</option>
                                                <option className="pl-2 pr-2" value="four">Sofa</option>
                                            </select>
                                        </div>
                                        <div >
                                            <label className="font-medium text-base block mb-2">Brand Name</label>
                                            <input
                                                type="text"
                                                placeholder="Enter Brand Name"
                                                className=" w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                                   focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                                            />
                                        </div>
                                    </div>
                                    <div className='grid md:grid-cols-2 gap-4 mb-4 mt-3'>
                                        <div >
                                            <label className="font-medium text-base block mb-2">Price</label>
                                            <input
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
                                            placeholder="Enter Product Description"
                                            maxLength={10}
                                            className=" w-full h-28 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                                   focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                                        />
                                        {/* </div> */}


                                    </div>
                                </form>
                            </div>
                            <button
                                type="submit"
                                className="w-full md:w-32 bg-black text-white font-medium py-3"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductForm;