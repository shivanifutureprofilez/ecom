import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { MyContext } from '../../context/UserContext';
import toast from 'react-hot-toast';

function AdminSidebar() {
    const { setUser, user } = useContext(MyContext);
    const [tags, setTags] = useState("profile");
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem("token");
        setTimeout(() => {
            navigate('/login');
            toast.success("Logged out successfully.")
        }, 1000)
    }
    return (
            <div className='w-full'>
                <div className=" text-gray-700 font-semibold space-y-6">
                    <Link to="/admin/product" className='leading-10 border-b text-black font-semibold text-[14px] cursor-pointer md:text-[18px] hover:text-yellow-700 active:underline '>
                        All Products
                    </Link>
                    <p className='leading-10 border-b text-black font-semibold text-[14px] cursor-pointer md:text-[18px] hover:text-yellow-700 active:underline '>
                        Add Products
                    </p>
                    <p className='leading-10 border-b text-black font-semibold text-[14px] cursor-pointer md:text-[18px] hover:text-yellow-700 active:underline ' >
                        Edit Account
                    </p>
                    <p className='leading-10 border-b text-black font-semibold text-[14px] cursor-pointer md:text-[18px] hover:text-yellow-700 active:underline ' >
                        Order History
                    </p>
                    <p className='leading-10 border-b text-black font-semibold text-[14px] cursor-pointer md:text-[18px] hover:text-yellow-700 active:underline ' >
                        Wishlist
                    </p>
                    <p className='leading-10 border-b text-black font-semibold text-[14px] cursor-pointer md:text-[18px] hover:text-yellow-700 active:underline' >
                        Logout
                    </p>
                </div>
            </div>
    )
}

export default AdminSidebar;