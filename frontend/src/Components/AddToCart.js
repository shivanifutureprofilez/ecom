import { Api } from "../Api/Api"
import toast from "react-hot-toast";
import { useContext, useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { MyContext } from "../context/UserContext";

export default function AddToCart ({wishlist, product, product_id, qty}) { 
      const [isCart, setIsCart] = useState(product.isCartAdded)
    const [loading, setLoading] = useState(false);
    const {user} = useContext(MyContext)
      const addtocart = () => { 
        if(!user?.name){
            toast.error("You have to login first");
            return false;
        }
        setLoading(true);
        const additem = Api.post("/cart/add-to-cart",{product_id, qty, wishlist: wishlist ? 1 : 0});
        additem.then((res)=>{ 
            if(res.data.status){ 
                toast.success(res.data.message)
                setIsCart(!isCart)
            } else { 
                toast.error(res.data.message)
            }
            setTimeout(()=>{
                setLoading(false);
            },1000)
            // if(product_id && qty===1){
            //     qty++;
            // }
        }).catch((err)=>{
            toast.error("Enable to add item in cart.")
            setLoading(false);
        })
    }
  

    return <>
        <button className={`bg-black flex items-center text-center justify-center text-white rounded-full py-2 px-4 mt-2  w-full ${isCart ? "pointer-events-none" : ""}`} onClick={addtocart} >
        
  <>
    <CiShoppingCart className="text-white me-2 rounded-full" size={25} />
     {isCart ? "ADDED" : "Add To Cart"}
  </>
            </button>
    </>
}