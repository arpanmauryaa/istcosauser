import React, { useEffect, useState } from 'react'
import { FaGlobeAmericas, FaHeart, FaMapMarkerAlt, FaRegCalendarCheck, FaUser } from 'react-icons/fa'
import Button1 from '../globalcomponent/Button1'
import { IoIosListBox, IoIosMail } from 'react-icons/io'
import { MdCall } from 'react-icons/md'
import { TbUserSquare } from 'react-icons/tb'
import { PiToolboxFill } from 'react-icons/pi'
import { useLocation, useNavigate } from 'react-router-dom'
import { viewprofile2 } from '../../utils/api/margeapi/MargeApi'
// import {lifemember} from '../../assets/lifemember.png'

function ViewProfileLoginDashboard() {
    const [viewProfileData, setViewProfileDAta] = useState([])
    const navigate=useNavigate()
    const { state } = useLocation()
    console.log(state, 'state')

    useEffect(() => {
        viewprofile2(state).then(response => {
            const data = response
            setViewProfileDAta([data])
            // console.log(data, 'View Profile')
        })
    }, [])

    console.log(viewProfileData,'viewprofileData')

    const oldPage =()=>{
        navigate(-1)
    }


    return (
        <>
            <div className='px-5'>



                {
                    viewProfileData?.map(item => {
                        return (
                            <div className='mb-5'>
                                <div className='grid grid-cols-1 border-2 mt-5 lg:grid-cols-4 py-8 px-5'>
                                    <div className='  col-span-3'>
                                        <div className='md:flex  '>
                                            <img src={item.NewImage} alt="profile" className='w-24 h-28' />
                                            <img src={item.OldImage} alt='' className='w-24 h-28 md:ms-3' />
                                        </div>

                                        <div className='mt-3'>
                                            <p className='font-bold text-lg'>{item.FullName} <span>({item.RollNumberID})</span></p>
                                        </div>

                                        {
                                            item.MembershipType ?
                                                <div className='flex mt-1'>
                                                    <img src={item.ImagePath} />
                                                    <p className='ms-2 text-red-900 uppercase italic'>{item.MembershipType}</p>
                                                </div> : null
                                        }


                                        <div>
                                            <div className='flex'>
                                                <FaMapMarkerAlt className='mt-2 ' />
                                                <p className='ms-2 mt-1 text-sm'> {item.CityName} ,{item.StateName} ,{item.CountryName}</p>
                                            </div>
                                            <p className='lg:me-72 md:me-36 mt-1'>{item.AboutYourSelf}</p>

                                        </div>

                                        <div className='mt-4'>
                                            <Button1 onClickFunction={oldPage} buttonName='Back' bgColor='bg-red-900' textColor='text-white' bgHover='hover:bg-white'
                                                paddingX='py-1.5' paddingY='px-1.5' hoverText='hover:text-black' />
                                        </div>
                                    </div>

                                    <div className='bg-white'>

                                        {
                                            item.UserProfession ?
                                                <div className='flex mt-2'>
                                                    <PiToolboxFill className='mt-1' />
                                                    <p className='ms-2'> {item.UserProfession}</p>
                                                </div> : null
                                        }


                                        {
                                            item.ProfessionalInformation[0].CompanyName ?
                                                <div className='flex mt-5'>
                                                    <IoIosListBox className='mt-1' />
                                                    <p className='ms-2'> {item.ProfessionalInformation[0].CompanyName}</p>
                                                </div> : null
                                        }

                                        {
                                            item.ProfessionalInformation[0].Responsibility ?
                                                <div className='flex mt-5'>
                                                    <TbUserSquare className='mt-1' />
                                                    <p className='ms-2'> {item.ProfessionalInformation[0].Responsibility}</p>
                                                </div> : null
                                        }


                                        {
                                            item.Gender ?
                                                <div className='flex mt-5'>
                                                    <FaUser className='mt-1' />
                                                    <p className='ms-2'>{item.Gender}</p>
                                                </div> : null
                                        }



                                        {
                                            item.DateOfBirth ?
                                                <div className='flex mt-5'>
                                                    <FaRegCalendarCheck className='mt-1' />
                                                    <p className='ms-2'>{item.DateOfBirth}</p>
                                                </div> : null
                                        }


                                        {
                                            item.MaritalStatus ?
                                                <div className='flex mt-5'>
                                                    <FaHeart className='mt-1' />
                                                    <p className='ms-2'>{item.MaritalStatus}</p>
                                                </div> : null
                                        }


                                        {
                                            item.Email ?
                                                <div className='flex mt-5'>
                                                    <IoIosMail className='mt-1' />
                                                    <p className='ms-2'>{item.Email}</p>
                                                </div> : null
                                        }

                                        {
                                            item.PhoneNumber ?
                                                <div className='flex mt-5'>
                                                    <MdCall className='mt-1' />
                                                    <p className='ms-2'>{item.CountryCode} {item.PhoneNumber}</p>
                                                </div> : null
                                        }


                                    </div>
                                </div>


                                {
                                    item.ProfessionalInformation[0].CompanyName || item.ProfessionalInformation[0].CompanyAddress || item.ProfessionalInformation[0].Designation || item.ProfessionalInformation[0].Profession || item.ProfessionalInformation[0].Responsibility ?
                                        <div className='bg-white  p-5 border-2 mt-5'>

                                            <p className='text-2xl'>Experience</p>

                                            <div className='grid grid-cols-1 md:grid-cols-2 mt-5 w-full'>
                                                <div className='flex border-r-2 '>
                                                    <FaGlobeAmericas className='text-5xl' />
                                                    <div className='ms-8'>
                                                        <p className='font-medium text-xl'>{item.ProfessionalInformation[0].CompanyName}</p>
                                                        <div className='mt-2'>
                                                            <p>{item.ProfessionalInformation[0].CompanyAddress}</p>
                                                            <p>{item.ProfessionalInformation[0].Designation}</p>
                                                            <p>{item.ProfessionalInformation[0].Profession}</p>
                                                            <p className='italic'>{item.DeletedDate}</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='mt-4 md:mt-0 ms-16 md:mx-0 ps-1 md:ps-0'>
                                                    <p className='ms-3'>Description :</p>
                                                    <p className='ms-3'>{item.ProfessionalInformation[0].Responsibility}</p>
                                                </div>

                                            </div>
                                        </div> : null
                                }



                                <div className='border-2 mt-5  py-8'>
                                    <p className='text-2xl px-5 bg-white '>About ISTCOSA</p>
                                    <p className='ps-5 mt-2' >{item.ISTCAbout}</p>
                                </div>


                                <div className='border-2 mt-5 py-8'>
                                    <p className='text-2xl  px-5 bg-white '>Comment ISTC</p>
                                    <p className='ps-5 mt-2'>{item.Comments}</p>
                                </div>


                                {
                                    item.SpouseName || item.ChildDetails ?
                                        <div className='border-2 mt-5 mb-5'>
                                            <div className='px-5 py-8'>
                                                <p className='font-medium text-xl '>Family Details</p>
                                                <p className='mt-3'>Spouse Name: {item.SpouseName}</p>
                                                <p>Marrige Aniversary Date: {item.AniversaryDate}</p>
                                                <p>Family Details:</p>
                                                <p className='ms-3'>{item.ChildDetails}</p>
                                            </div>
                                        </div> : null
                                }


                            </div>

                        )
                    })
                }









            </div >
        </>
    )
}

export default ViewProfileLoginDashboard
