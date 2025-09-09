import { FaStar } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { GoEye } from "react-icons/go";
import { IoEyeOutline } from "react-icons/io5";
import { useContext } from "react";
import { MyContext } from "../context/UserContext";
import AddToCart from "./AddToCart";



function ProductItem({product, isAdmin}) {

  const { setUser, user } = useContext(MyContext);

  return <>
  {product ? 
  <>
        <div className={` ${user?.isAdmin == 1 && product.deletedAt ? 'opacity-[0.8] border border-red-300 ' : 'bg-gray-100 border border-gray-200'} product  overflow-hidden' `} key={product.name}>

          <div className=" relative overflow-hidden  mb-4 ">
  <button className="absolute top-2 left-2 bg-black text-white rounded-full px-3 py-1 z-10 text-gray-400 capitalize">{product.product_type} ({product.brand_name})</button>
            <img src={product.image} alt={product.name} className="  hover:scale-110 duration-300 w-full max-h-[200px] min-h-[200px] object-cover  shadow" />
            <div className="  productactions  absolute top-[65px] right-5 flex flex-col gap-2 ">
              <div className="bg-white p-2 rounded-full">
              <CiHeart className="text-black rounded-full" size={25} />
              </div>
              <div className="bg-white p-2 rounded-full">
              
              <AddToCart product_id={product?._id} qty={1} />
              </div>
              <div className="bg-white p-2 rounded-full">
              <IoEyeOutline className="text-black rounded-full" size={25}/>
              </div>
            </div>
            
          </div>

          <div className="p-4">
              <div className="flex flex-wrap justify-between">
                  <p className="text-black text-lg  capitalize line-clamp-1">{product.name}</p>
              </div>

              <h2 className="text-gray-800 text-lg   font-semibold">Price : ${product.price}</h2>
              <div className="stars flex gap-1 ">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-gray-200" />
              </div>
        
              {isAdmin === 1 && 
                    <button className="bg-blue-600 text-white text-center rounded-xl w-full p-2 mt-3">Edit</button>
              }
          
          </div>
        
        </div>
  </> : ""}
  </>
}

export default ProductItem;