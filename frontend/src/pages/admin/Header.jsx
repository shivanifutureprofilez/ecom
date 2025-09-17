import React from 'react'
import toast from "react-hot-toast";
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    setTimeout(() => {
      navigate('/login');
      toast.success("Logged out successfully.")
    }, 1000)
  }
  return (
    <div className=" flex justify-center fixed  top-0 left-0 z-10 w-full">
      <div className="container m-auto">
        <div className="bg-[#ffffffa3] rounded-xl p-1 md:p-3 w-full shadow-md">
          <div className="flex items-center justify-between px-2 md:px-8 py-1 md:py-3">

            {/* Logo */}
            
              {/* <span className="block text-2xl font-bold text-gray-800"> */}
              <img className="max-w-[200px] w-[200px]" src={'/logo.png'} />
              {/* </span> */}
              <div className='flex gap-4'>
               <button onClick={logout} className="text-gray-700 font-semibold cursor-pointer hover:text-yellow-600">Logout</button>
               <Link to="/admin/product" className="text-gray-700 font-semibold cursor-pointer hover:text-yellow-600">Admin Panel</Link>
                </div>
           
            

          </div>
        </div>
      </div>
    </div>
  )};
  
export default Header;