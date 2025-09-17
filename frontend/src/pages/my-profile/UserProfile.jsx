import React, { useEffect, useState } from 'react'
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { Api } from '../../Api/Api';

export default function UserProfile({ user }) {
    const [address, setAddress] = useState([]);
    const GetAddress = () => {
        Api.get('/checkout/address')
            .then((res) => {
                //console.log("userAddress : ", res);
                if (res.data.status) {
                    setAddress(res.data.showaddress);
                    console.log("address ", address);
                }
                else {
                    setAddress([]);
                }
            })
            .catch((err) => {
                console.log("error ", err);
            })
    }
    useEffect(() => {
        GetAddress();
    }, []);
    return (
        <div className=' container mx-auto bg-[#F8F8F9]  p-10 mb-14'>
            <div className='bg-[#F8F8F9] mx-auto'>
                <div className='mb-8'>
                <h1 className='font-semibold text-[36px] uppercase'>{user?.name}</h1>
                {/* <span className='text-sm font-medium'>Product Designer</span> */}
                </div>
                {/* <p className='text-lg md:text-base'>
                    All the Lorem Ipsum generators on the Internet tend to repeat predefined on the Internet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non, lobortis in in tortor lectus iaculis viverra. Adipiscing lobortis interdum fringilla euismod odio vitae nam pulvinar elementum. Nibh purus integer elementum in. Tellus vulputate habitasse ut vulputate posuere habitant vel tempor varius.
                </p> */}
               <div class="mt-5 sm:mt-8 md:mt-10 grid gap-4 sm:gap-6">
                <div class="flex items-center gap-2 hover:cursor-pointer">
                <MdOutlinePhoneInTalk size={24} className='text-yellow-700'/>
               <span class="leading-none font-medium text-base sm:text-lg">{user?.phone}</span>
               </div>
               <div class="flex items-center gap-2 hover:cursor-pointer" >
               <IoMailOutline size={24} className='text-yellow-700'/>
               <span class="leading-none font-medium text-base sm:text-lg">{user?.email}</span>
               </div>
               <div class="flex items-center gap-2 hover:cursor-pointer" >
               <IoLocationOutline size={24} className='text-yellow-700'/>
               <span class="leading-none font-medium text-base sm:text-lg">{address?.address}</span>
               </div></div> 
            </div>
        </div>
    )
}
