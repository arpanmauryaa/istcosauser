import React, { useState } from 'react'
import Logo from '../../assets/Logo.png'
import InputField from '../globalcomponent/InputField'
import { IoSearch } from "react-icons/io5";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { IoNotificationsSharp } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { HiOutlineBarsArrowDown } from "react-icons/hi2";
import SanjayOld from '../../assets/SanjayOld.jpg'


function NavBar3({ openSideBarFunction }) {

    const [isOpenSm, setIsOpenSm] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate()

    const showLogOutSm = () => {
        setIsOpenSm((old => !old))
        console.log('hiiii')
    }

    const openTogle = () => {
        setIsOpen((old => !old))
        console.log('hi')
    }


    const notificationNavigate = () => {
        navigate('/home/notification')
    }

    const searchIconNavigate = () => {
        navigate('/home/searchalumni')
    }

    const d = new Date();
    const days = d.getDate();
    const month = d.getMonth();
    const monthAdd = month + 1
    const years = d.getFullYear();
    const hours = d.getHours();
    const minutes = d.getMinutes();
    const second = d.getSeconds();


    console.log(d.getTimezoneOffset(), 'date')

    const logOut = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('userId')
        console.log('hooooo')
        navigate('/loginpage')
    }

    return (
        <>
            <div className='bg-slate-50  border '>

                <div className=' w-full  justify-between flex'>

                    <div className=' flex'>
                        <div className='lg:hidden mt-12 md:mt-14 text-3xl ps-5'>
                            <HiOutlineBarsArrowDown onClick={openSideBarFunction} />
                        </div>
                        <div className='py-9 ps-2 md:ps-9'>
                            <img src={Logo} alt="logo" />
                        </div>
                    </div>

                    <div >
                        <div className='hidden lg:block'>
                            <div className='flex mt-2'>
                                <div className='mt-8'>
                                    <InputField padding='p-1.5' placeholder='Search' />
                                </div>
                                <div>
                                    <button onClick={searchIconNavigate} className='bg-red-900 p-1.5 mt-8 text-white me-6'><IoSearch className='mt-1' /></button>
                                </div>

                                <div className='text-xl mt-8'>
                                    <MdOutlineCurrencyRupee className='text-red-900 me-6 cursor-pointer' />
                                </div>

                                <div className='text-xl mt-8 text-red-900 me-6'>
                                    <IoNotificationsSharp className='cursor-pointer' onClick={notificationNavigate} />
                                </div>

                                <div className='mt-6 me-6 relative'>
                                    <div>
                                        <div onClick={openTogle}>
                                            <img src={SanjayOld} alt="pic" className='rounded-full cursor-pointer w-10 ' />
                                        </div>

                                        {
                                            isOpen ?
                                                <div className='border mt-3  bg-white absolute right-4 w-32'>
                                                    <p className='cursor-pointer px-2 py-3'>N.C Hira (6301)</p>
                                                    <p onClick={logOut} className='cursor-pointer px-2 pb-3'>Logout</p>
                                                </div> : null
                                        }

                                    </div>
                                </div>
                            </div>

                            <div className='mt-5 ms-28'>
                                <p ><span className='font-medium'>Last Login :</span> {days}-{monthAdd}-{years} {hours}:{minutes}:{second} AM</p>
                            </div>
                        </div>

                    </div>
                    <div className='lg:hidden mt-12 md:mt-14 me-5 text-2xl '>
                        <FaBars onClick={openTogle} />
                    </div>

                </div>



                {
                    isOpen ?
                        <div className='lg:hidden block pt-2 ps-5  bg-slate-50  pb-3'>
                            <div>
                                <div className='flex w-full'>
                                    <div className='mt-8'>
                                        <InputField padding='p-1.5' placeholder='Search' />
                                    </div>
                                    <div>
                                        <button className='bg-red-900 p-1.5 mt-8 text-white me-6'><IoSearch className='mt-1' /></button>
                                    </div>

                                    <div className='text-xl mt-8'>
                                        <MdOutlineCurrencyRupee className='text-red-900 me-6' />
                                    </div>

                                    <div className='text-xl mt-8 text-red-900 me-6'>
                                        <IoNotificationsSharp />
                                    </div>


                                    <div className='mt-6 me-6 relative'>
                                        <div>
                                            <div onClick={showLogOutSm}>
                                                <img src={SanjayOld} alt="pic" className='rounded-full cursor-pointer w-10 ' />
                                            </div>

                                            {
                                                isOpenSm ?
                                                    <div className='border mt-3  bg-white absolute right-4 w-32'>
                                                        <p className='cursor-pointer px-2 py-3'>N.C Hira (6301)</p>
                                                        <p onClick={logOut} className='cursor-pointer px-2 pb-3'>Logout</p>
                                                    </div> : null
                                            }

                                        </div>
                                    </div>


                                </div>

                                <div className='mt-6'>
                                    <p ><span className='font-medium'>Last Login :</span> 28 Nav 2023 11:18:41 AM</p>
                                </div>
                            </div>
                        </div> : null
                }
            </div>
        </>
    )
}

export default NavBar3
