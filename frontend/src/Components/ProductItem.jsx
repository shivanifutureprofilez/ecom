import { FaStar } from "react-icons/fa6";

import { IoEyeOutline } from "react-icons/io5";
import { useContext, useState } from "react";
import { MyContext } from "../context/UserContext";
import AddToCart from "./AddToCart";
import Image from "./Image";
import { Api } from "../Api/Api";
import toast from "react-hot-toast";
import PriceFormat from './PriceFormat';
import { Link, useNavigate } from "react-router-dom";
import AddToWishlist from "./AddToWIshlist";
import Rating from "../pages/productDetail/Rating";
import Add from "../pages/admin/Product/Add";

function ProductItem({ product, isAdmin, wishlist, GetWistList, GetProducts, wishlistPage }) {

  const { setUser, user } = useContext(MyContext);
  const [items, setItems] = useState({
    name: "",
    product_type: "",
    brand_name: "",
    price: "",
    image: "",
    content: ""
  })
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)




  return <>
    {product ?
      <>
        <div className={` ${user?.isAdmin === 1 && product?.deletedAt ? 'opacity-[0.8] border border-red-300 ' : 'bg-gray-100 border border-gray-200'} product  overflow-hidden' `} key={product?.name}>
          <div className="  relative overflow-hidden  mb-4 ">
            <button className="absolute top-2 left-2 bg-black rounded-full px-3 py-1 z-10 text-white capitalize">{product?.product_type || product?.product?.product_type} ({product?.brand_name || product?.product?.brand_name})</button>
            {/* <div className="hover:scale-110 duration-300  mb-3 w-[300px] h-[300px]  object-cover  shadow"> */}
            <Link to={`/product-detail/${product?._id}`} ><Image src={product?.image || product?.product?.image} alt={product?.name} classes={'hover:scale-110 duration-300  mb-3 w-full h-[300px]  object-cover  shadow'} /></Link>
            {/* </div> */}
            
            <div className="  productactions  absolute top-[10px] right-5 flex flex-col gap-2 ">
              {/* {wishlist != true && ( */}


              {isAdmin !== 1 && (
                <AddToWishlist
                  product={product}
                  wishlistPage={wishlistPage}
                  GetProducts={GetProducts}
                  GetWistList={GetWistList}
                />
              )}
              {/* {wishlistPage !== true ?
                <div className=" rounded-full">
                  <button className={`flex justify-center items-center w-[48px] h-[48px] rounded-full p-2 ${iswished ? "bg-pink-600 !text-white" : "bg-white"}`} onClick={() => { addToWishlist(product) }}>
                    <CiHeart className="  rounded-full" size={25} />
                  </button>
                </div>
                : <div className=" rounded-full">
                  <button onClick={()=>{deleteFromWishlist(product?._id)}} className={`flex justify-center items-center w-[48px] h-[48px] rounded-full p-2 bg-white`} >
                    <RxCross2 className="  rounded-full" size={25} />
                  </button> 
                </div>} */}





              {/* // )} */}
              {/* <div className="flex justify-center items-center w-[48px] h-[48px] bg-white p-2 rounded-full">
                <IoEyeOutline className=" rounded-full" size={25} />
              </div> */}
            </div>

          </div>

          <div className="px-4 py-4">
            <div className="flex flex-wrap justify-between">
              <p className="text-black text-lg  capitalize line-clamp-1"><Link to="/product-detail" >{product?.name || product?.product?.name}  </Link></p>
            </div>
            <h2 className="text-gray-800 text-lg   font-semibold">Price : <PriceFormat price={product?.price || product?.product?.price} /></h2>
            <Rating product={product} />
            {isAdmin === 1 ?
              <Link to={`/admin/productEdit/${product._id}`} className="bg-black text-white text-center rounded-xl w-full p-2 mt-3">Edit</Link>
              : <>
                <AddToCart wishlist={wishlist}
                  product={product} product_id={product?._id || product?.product?._id} qty={1} />
              </>
            }


            {product?.stock > 0 ? <p className="text-green-700 my-2 text-center">Only {product?.stock} stocks are avalable</p> : <p className="text-red-700 my-2 text-center">Out of stock</p>}
          </div>
        </div>
      </> : "No Products To Show"}
  </>
}

export default ProductItem;