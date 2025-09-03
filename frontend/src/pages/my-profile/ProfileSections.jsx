import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { MyContext } from '../../context/UserContext';
import UserProfile from './UserProfile';
import Account from './Account';
import EditAccount from './EditAccount';
import Wishlist from './Wishlist';


function ProfileSections() {
    const { setUser, user } = useContext(MyContext);
    const [tags,setTags] = useState("profile");

    return (
        <div className='container mx-auto md:mt-[100px]  '>
            <div className='md:flex md:gap-6 w-full p-3 md:p-6'>
                <div className='w-full md:w-1/4 '>
                    <div className=" text-gray-700 font-semibold space-y-6">
                            <p className='leading-10 border-b text-black font-semibold text-[14px] cursor-pointer md:text-[18px] hover:text-yellow-700 active:underline ' onClick={()=>{setTags("profile")}}>
                                My Profile
                            </p>
                            <p className='leading-10 border-b text-black font-semibold text-[14px] cursor-pointer md:text-[18px] hover:text-yellow-700 active:underline ' onClick={()=>{setTags("account")}}>
                                My Account
                            </p>
                            <p className='leading-10 border-b text-black font-semibold text-[14px] cursor-pointer md:text-[18px] hover:text-yellow-700 active:underline ' onClick={()=>{setTags("edit")}}>
                                Edit Account
                            </p>
                            <p className='leading-10 border-b text-black font-semibold text-[14px] cursor-pointer md:text-[18px] hover:text-yellow-700 active:underline ' onClick= {()=>{setTags("history")}}>
                                Order History
                            </p>
                            <p className='leading-10 border-b text-black font-semibold text-[14px] cursor-pointer md:text-[18px] hover:text-yellow-700 active:underline ' onClick = {()=>{setTags("wishlist")}}>
                                Wishlist
                            </p>
                            <p className='leading-10 border-b text-black font-semibold text-[14px] cursor-pointer md:text-[18px] hover:text-yellow-700 active:underline'>
                                Logout
                            </p>
                    </div>
                </div>
                <div className='w-full md:w-3/4 '>
                    {tags === "profile" && (
                    <UserProfile user={user} />)}
                    {tags === "account" && (
                        <Account user={user}/>
                    )}
                    {tags === "edit" && (
                        <EditAccount user={user}/>
                    )}
                    {tags === "wishlist" && (
                        <Wishlist user={user}/>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProfileSections;