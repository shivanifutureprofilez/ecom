import { useState } from "react";
import toast from "react-hot-toast";
import { Api } from "../Api/Api";
import { CiHeart } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
export default function AddToWishlist ({product, GetProducts, GetWistList, wishlistPage}){ 

    const [iswished, setiswished] = useState(product?.isWishlisted);
    const [loading,setLoading] = useState(false)
    const addToWishlist = (product) => {
    setLoading(true);
        const additem = Api.post("/wishlist/add-to-wishlist", {
            product_id: product?._id
        });
        additem.then((res) => {
            if (res.data.status) {
            setiswished(!iswished)
            GetProducts && GetProducts();
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
            GetWistList && GetWistList();
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
        {wishlistPage !== true ?
            <div className=" rounded-full">
                <button className={`flex justify-center items-center w-[48px] h-[48px] rounded-full p-2 ${iswished ? "bg-pink-600 !text-white" : "bg-white"}`} onClick={() => { addToWishlist(product) }}>
                <CiHeart className="  rounded-full" size={25} />
                </button>
            </div>
            : <div className=" rounded-full">
                <button onClick={()=>{deleteFromWishlist(product?._id)}} className={`flex justify-center items-center w-[48px] h-[48px] rounded-full p-2 bg-white`} >
                <RxCross2 className="  rounded-full" size={25} />
                </button> 
            </div>
        }
    </>
}