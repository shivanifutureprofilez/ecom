import { FaStar } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { GoEye } from "react-icons/go";
import { IoEyeOutline } from "react-icons/io5";

function ProductItem({product}) {
  return <>
  {product ? 
  <>
        <div className="product " key={product.name}>

          <div className="relative overflow-hidden  mb-4 ">
            <img src={product.image} alt={product.name} className="hover:scale-110 duration-300 w-full h-64 object-cover  shadow" />
            <div className="productactions  absolute top-[65px] right-5 flex flex-col gap-2 ">
              <div className="bg-white p-2 rounded-full">
              <CiHeart className="text-black rounded-full" size={25} />
              </div>
              <div className="bg-white p-2 rounded-full">
              <CiShoppingCart className="text-black rounded-full" size={25}/>
              </div>
              <div className="bg-white p-2 rounded-full">
              <IoEyeOutline className="text-black rounded-full" size={25}/>
              </div>
            </div>
          </div>
          
            <p className="text-black text-lg my-1 capitalize">{product.name}</p>
            <h2 className="text-gray-800 font-semibold">Price : ${product.price}</h2>
            <p className="text-gray-400 capitalize">{product.product_type} ({product.brand_name})</p>
            <div className="stars flex gap-1 ">
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-gray-200" />
            </div>
            {product.deletedAt ? " DELETED" : ""}
        </div>
  </> : ""}
  </>
}

export default ProductItem;