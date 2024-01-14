import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from "react";
import Logo from '../../assets/Logo.png'
import DropDownButton from '../globalcomponent/DropDownButton'
import { FaBars } from "react-icons/fa";


function NavBar2() {
    const [isOpen, setIsOpen] = useState(false)

    const navigate = useNavigate()

    const openTogle = () => {
        setIsOpen((old => !old))
    }

 const homeNavigate =()=>{
        navigate('/dashboardhome')
        console.log('hii')
    }

    return (
        <>
            <div>
                <div className='ps-5 w-full bg-slate-50 border-2 p-3'>
                    <div className='flex justify-between'>
                        <div>
                            <img src={Logo} alt="img" />
                        </div>

                        <div className='hidden lg:block mt-2'>
                            <div className='flex'>
                                <div className='mt-3'>
                                    <button onClick={homeNavigate}>Home</button>
                                </div>
        
                                <div className='flex mt-1'>
                                    <DropDownButton buttonName='About Us' padding='px-6' />
                                    <DropDownButton buttonName='Team' padding='pe-4' />
                                    <DropDownButton buttonName='Events' padding='pe-6' />
                                    <DropDownButton buttonName='Opportunity' padding='pe-6' />
                                    <DropDownButton buttonName='Opportunity' padding='pe-6' />
                                    <DropDownButton buttonName='Membership' padding='pe-6' />
                                    <DropDownButton buttonName='Contact' padding='pe-4' />
                                </div>
                            </div>
                        </div>


                        <div className='lg:hidden mt-4 text-2xl '>
                            <FaBars onClick={openTogle} />
                        </div>
                    </div>

                    {
                        isOpen ?
                            <div className='lg:hidden block pt-2 ps-5 h-screen bg-slate-50'>
                                <div>
                                    <button>Home</button>
                                    <div>
                                        <DropDownButton buttonName='About Us' />
                                        <DropDownButton buttonName='Team' />
                                        <DropDownButton buttonName='Events' />
                                        <DropDownButton buttonName='Opportunity' />
                                        <DropDownButton buttonName='Opportunity' />
                                        <DropDownButton buttonName='Membership' />
                                        <DropDownButton buttonName='Contact' />
                                    </div>
                                </div>
                            </div> : null
                    }


                </div>




            </div>
        </>
    )
}

export default NavBar2
