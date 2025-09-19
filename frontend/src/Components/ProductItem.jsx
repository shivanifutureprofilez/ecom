import { FaStar } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { GoEye } from "react-icons/go";
import { IoEyeOutline } from "react-icons/io5";
import { useContext, useState } from "react";
import { MyContext } from "../context/UserContext";
import AddToCart from "./AddToCart";
import Image from "./Image";
import defaultImage from '../Assets/defaultimage.jpg';
import { Api } from "../Api/Api";
import toast from "react-hot-toast";
import { RxCross2 } from "react-icons/rx";

function ProductItem({ wishlistItem, product, isAdmin, wishlist, GetWistList, GetProducts, wishlistPage }) {
  console.log("product", product)

  const [loading, setLoading] = useState(false);
  const { setUser, user } = useContext(MyContext);
  const [added, setAdded] = useState(false);
  const [iswished, setiswished] = useState(product?.isWishlisted || false);


  const addToWishlist = (product) => {
    setLoading(true);
    const additem = Api.post("/wishlist/add-to-wishlist", {
      product_id: product?._id
    });
    additem.then((res) => {
      if (res.data.status) {
        // toast.success(res.data.message)
        setAdded(true);
        setiswished(!iswished)
        GetProducts();
      } else {
        toast.error(res.data.message)
      }
      setTimeout(() => {
        setLoading(false);
      }, 1000)
    }).catch((err) => {
      console.log('error', err);
      toast.error('Failed To add to wishlist. Try Again Later');
      setLoading(false);
    })
  }


  const deleteFromWishlist = (id) => {
    console.log("id" ,id)
    const data = Api.post('/wishlist/removeWishlistItem', { _id: id });
    
    data.then((res) => {
      if (res.data.status) {
        toast.success(res.data.message)
        GetWistList();
      }
      else {
        toast.error(res.data.message)
      }
    }).catch((err) => {
        console.log('error', err);
        toast.error('Failed To remove from wishlist. Try Again Later');
    })
  }


  return <>
    {product ?
      <>
        <div className={` ${user?.isAdmin == 1 && product.deletedAt ? 'opacity-[0.8] border border-red-300 ' : 'bg-gray-100 border border-gray-200'} product  overflow-hidden' `} key={product.name}>
          <div className=" relative overflow-hidden  mb-4 ">
            <button className="absolute top-2 left-2 bg-black rounded-full px-3 py-1 z-10 text-white capitalize">{product.product_type ||product.product.product_type } ({ product.brand_name || product.product.brand_name})</button>
            {/* <div className="hover:scale-110 duration-300  mb-3 w-[300px] h-[300px]  object-cover  shadow"> */}
            <Image src={product.image ||  product.product.image} alt={product.name} classes={'hover:scale-110 duration-300  mb-3 w-[300px] h-[300px]  object-cover  shadow'} />
            {/* </div> */}
            <div className="  productactions  absolute top-[10px] right-5 flex flex-col gap-2 ">
              {/* {wishlist != true && ( */}
              {wishlistPage != true ?
                <div className=" rounded-full">
                  <button className={`flex justify-center items-center w-[48px] h-[48px] rounded-full p-2 ${iswished ? "bg-pink-600 !text-white" : "bg-white"}`} onClick={() => { addToWishlist(product) }}>
                    <CiHeart className="  rounded-full" size={25} />
                  </button>
                </div>
                : <div className=" rounded-full">
                  <button onClick={()=>{deleteFromWishlist(product?._id)}} className={`flex justify-center items-center w-[48px] h-[48px] rounded-full p-2 bg-white`} >
                    <RxCross2 className="  rounded-full" size={25} />
                  </button> 
                </div>}
              {/* // )} */}
              <div className="flex justify-center items-center w-[48px] h-[48px] bg-white p-2 rounded-full">
                <IoEyeOutline className=" rounded-full" size={25} />
              </div>
            </div>

          </div>

          <div className="p-4">
            <div className="flex flex-wrap justify-between">
              <p className="text-black text-lg  capitalize line-clamp-1">{product.name || product.product.name}</p>
            </div>
            <h2 className="text-gray-800 text-lg   font-semibold">Price : ${product.price || product.product.price}</h2>
            <div className="stars flex gap-1 ">
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-gray-200" />
            </div>
            {isAdmin === 1 ?
              <button className="bg-blue-600 text-white text-center rounded-xl w-full p-2 mt-3">Edit</button>
              : <>
                <AddToCart wishlist={wishlist} product_id={product?._id || product.product?._id} qty={1} />
              </>
            }
          </div>
        </div>
      </> : "No Products To Show"}
  </>
}

export default ProductItem;