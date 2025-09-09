import { Api } from "../Api/Api"
import toast from "react-hot-toast";
import { useState } from "react";
import { CiShoppingCart } from "react-icons/ci";

export default function AddToCart ({product_id, qty}) { 
    
    const [loading, setLoading] = useState(false);
    const addtocart = () => { 
        setLoading(true);
        const additem = Api.post("/cart/add-to-cart",{product_id, qty});
        additem.then((res)=>{ 
            toast.success("Added to cart")
            setLoading(false);
        }).catch((err)=>{
            toast.success("failed to add to cart")
            setLoading(false);
        })
    }

    return <>


        <button className={`${loading ? "!opacity-[0.2]." : ""}`} onClick={addtocart} >
            <CiShoppingCart className="text-black rounded-full" size={25}/>
            </button>
    </>
}