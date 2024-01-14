import React from 'react'
import { useNavigate } from 'react-router-dom'

import { IoIosMail } from "react-icons/io";
import InputField from '../globalcomponent/InputField';
import { IoIosSearch } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";
import SanjayOld from '../../assets/SanjayOld.jpg'




function NavBar() {
    const navigate = useNavigate()
    const getLocalData = localStorage.getItem('token')

    const registerNavigate = () => {
        navigate('/registerpage')
    }

    const loginNavigate = () => {
        navigate('/loginpage')
    }

    const myProfile = () =>{
        navigate('/home/logindashboard')
    }
    return (
        <>
            <div>
                <div className='bg-red-900 py-1 pb-3'>
                    <div className='grid lg:grid-cols-4 py-2.5'>

                        <div className='hidden lg:block'>
                            <div className='text-white flex ps-3 mt-3 sm:ms-16 lg:ms-0  '>
                                <IoIosMail className=' text-xl' />
                                <p className='text-sm ms-2'>info@gmail.com</p>
                            </div>
                        </div>

                        <div className='col-span-2 ml-4 sm:ms-20  sm:me-0 me-4 lg:ms-1 '>
                            <div className='grid grid-cols-7'>
                                <div className='col-span-6 text-center'>
                                    <div className=''>
                                        <InputField padding='py-2.5' placeholder='Search by Name | Roll No | Batch' />
                                        {/* <input type="text" className='w-full p-2.5 rounded-sm mt-2 border border-gray-400 text-gray-700 px-2 ${padding}
                                        w-full rounded leading-tight focus:outline-none focus:border-blue-500' /> */}
                                    </div>
                                </div>

                                <div>
                                    <button className='bg-white ms-3 p-2.5 mt-2 '><IoIosSearch /></button>
                                </div>

                            </div>
                        </div>



                        {
                            getLocalData ?

                                <div>
                                    <div className='flex lg:justify-end justify-center sm:ms-32 ml-11  lg:ms-0  w-full  text-white text-sm  '>
                                        <div className='flex'>
                                            <div className='mt-2.5'>
                                                <button onClick={myProfile} className='bg-white text-black py-1.5 px-3 rounded-sm me-5'>My Profile</button>
                                            </div>
                                            <div className='mt-1 me-3'>
                                                <img src={SanjayOld} alt="profile" className='w-10 h-10 rounded-full me-5' />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                :
                                <div className='flex lg:justify-end justify-center sm:ms-32 ml-11  lg:ms-0  w-full  text-white text-sm  mt-4'>
                                    <div onClick={registerNavigate} className='flex cursor-pointer'>
                                        <FaUserAlt className='me-2 font-medium' />
                                        <p className='me-7'>Register</p>
                                    </div>
                                    <p className='me-7'>|</p>
                                    <div onClick={loginNavigate} className='flex cursor-pointer'>
                                        <FaLock className='me-2 font-medium' />
                                        <p className='me-8'>Log in</p>
                                    </div>
                                </div>
                        }


                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar
