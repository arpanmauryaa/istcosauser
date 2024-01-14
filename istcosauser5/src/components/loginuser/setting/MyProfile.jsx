import React, { useEffect, useState } from 'react'
import { FaGlobeAmericas, FaHeart, FaMapMarkerAlt, FaRegCalendarCheck, FaUser } from 'react-icons/fa'
import { IoIosMail } from 'react-icons/io'
import { MdCall } from 'react-icons/md'
import Button1 from '../../globalcomponent/Button1'
import { TiDocumentText } from "react-icons/ti";
import { RiFolderUserFill } from "react-icons/ri";
// import NoImage from '../../../assets/NoImage.jpg';
// import SanjayOld from '../../../assets/SanjayOld.jpg';
import { userdetails } from '../../../utils/api/margeapi/MargeApi'


function MyProfile() {

    const [userDetails, setUserDetails] = useState([])
    const [i ,setI] = useState(0)
    const state = JSON.parse(localStorage.getItem('userId'))
    useEffect(() => {
        userdetails(state).then(response => {
            const data = response
            setUserDetails([data])
           
            console.log(data, 'userDetailsResponse')
        }).catch((error => {
            console.log('error in userdetails api')
        }))
    }, [])

    return (
        <>

            {
                userDetails?.map((item => {
                    return (
                        <div className='bg-slate-50 h-full pb-2 '>
                            <div className='p-5'>
                                <div className='border-2  bg-white'>
                                    <div className='grid grid-cols-1  lg:grid-cols-4 py-8 px-5'>
                                        <div className='  col-span-3'>
                                            <div className='flex'>
                                                {/* <img src={NoImage} alt="profile" className='w-24 h-24' /> */}
                                                {/* <img src={item.OldImage} alt='' className='w-24 h-24 ms-3' /> */}
                                            </div>

                                            <div className='mt-3'>
                                                <p className='font-bold text-lg'>{item.FullName} ({item.RollNumberID})</p>
                                            </div>

                                            <div>
                                                <div className='flex'>
                                                    <FaMapMarkerAlt className='mt-2 ' />
                                                    <p className='ms-1 mt-1 text-sm'> {item.CityName}, {item.StateName}, {item.CountryName}</p>
                                                </div>
                                                <p className='lg:me-72 md:me-36 mt-1'>{item.AboutYourSelf}</p>

                                            </div>

                                            <div className='mt-4'>
                                                <Button1 buttonName='Edit Profile' bgColor='bg-red-900' textColor='text-white' bgHover='hover:bg-white'
                                                    paddingX='py-1.5' paddingY='px-1.5' hoverText='hover:text-black' />

                                                <Button1 buttonName='Back' bgColor='bg-red-900' textColor='text-white' bgHover='hover:bg-white'
                                                    paddingX='py-1.5' paddingY='px-3' hoverText='hover:text-black' />
                                            </div>
                                        </div>

                                        <div className='bg-white'>

                                            {
                                                item.ProfessionalInformation[0].CompanyName ?
                                                    <div className='flex'>
                                                        <TiDocumentText className='mt-1 text-xl' />
                                                        <p className='ms-2'>{item.ProfessionalInformation[0].CompanyName}</p>
                                                    </div> : null
                                            }




                                            {
                                                item.ProfessionalInformation[0].Designation ?
                                                    <div className='flex mt-2'>
                                                        <RiFolderUserFill className='mt-1 text-lg' />
                                                        <p className='ms-2'>{item.ProfessionalInformation[0].Designation}</p>
                                                    </div>
                                                    : null
                                            }

                                            {
                                                item.Gander ?
                                                    <div className='flex mt-4'>
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
                                                        <p className='ms-2'> {item.CountryCode} {item.PhoneNumber}</p>
                                                    </div> : null
                                            }

                                        </div>
                                    </div>
                                </div>
                            </div>





                            <div className='bg-white mx-5 p-5 border-2'>
                                <p className='text-2xl'>Experience</p>

                                {
                                    item.ProfessionalInformation[1].CompanyName ?
                                        <div className='grid grid-cols-1 md:grid-cols-2 mt-5 w-full'>
                                            <div className='flex border-r-2 '>
                                                <FaGlobeAmericas className='text-5xl' />
                                                <div className='ms-8'>
                                                    {
                                                        item.ProfessionalInformation[1].CompanyName ?
                                                            <p className='font-medium text-xl'>{item.ProfessionalInformation[1].CompanyName}</p> : null
                                                    }

                                                    <div className='mt-2'>
                                                        {/* <p>Vill. Asron (P.B)</p> */}

                                                        {
                                                            item.ProfessionalInformation[1].Designation ?
                                                                <p>{item.ProfessionalInformation[1].Designation}</p> : null
                                                        }

                                                        {
                                                            item.ProfessionalInformation[1].Profession ?
                                                                <p>Profession: {item.ProfessionalInformation[1].Profession}</p> : null
                                                        }

                                                        {
                                                            item.ProfessionalInformation[1].FromDate || item.ProfessionalInformation[1].ToDate ?
                                                                <p>{item.ProfessionalInformation[1].FromDate} - {item.ProfessionalInformation[1].ToDate}</p> : null
                                                        }


                                                    </div>
                                                </div>
                                            </div>

                                            <div className='mt-4 md:mt-0 ms-16 md:mx-0 ps-1 md:ps-0'>
                                                <p className='ms-3'>Description :</p>
                                                {
                                                    item.ProfessionalInformation[2].Responsibility ?
                                                        <p className='ms-3'>{item.ProfessionalInformation[2].Responsibility}</p> : null
                                                }

                                            </div>

                                        </div> : null
                                }



                                {
                                    item.ProfessionalInformation[2].CompanyName ?
                                        <div className='grid grid-cols-1 md:grid-cols-2 mt-10  w-full border-t-2'>
                                            <div className='flex mt-8 border-r-2'>
                                                <FaGlobeAmericas className='text-5xl' />
                                                <div className='ms-8'>
                                                    {
                                                        item.ProfessionalInformation[2].CompanyName ?
                                                            <p className='font-medium text-xl'>{item.ProfessionalInformation[2].CompanyName}</p> : null
                                                    }

                                                    <div className='mt-2'>
                                                        {/* <p>Vill. Asron (P.B)</p> */}
                                                        {
                                                            item.ProfessionalInformation[2].Designation ?
                                                                <p>{item.ProfessionalInformation[2].Designation}</p> : null
                                                        }

                                                        {
                                                            item.ProfessionalInformation[2].Profession ?
                                                                <p>{item.ProfessionalInformation[2].Profession}</p> : null
                                                        }

                                                        {
                                                            item.ProfessionalInformation[2].FromDate || item.ProfessionalInformation[2].ToDate ?
                                                                <p>{item.ProfessionalInformation[2].FromDate} - {item.ProfessionalInformation[2].ToDate}</p> : null
                                                        }

                                                    </div>
                                                </div>
                                            </div>

                                            <div className=' mt-8 md:mx-0 ps-1 mx-16 md:ps-0'>
                                                <p className='ms-3'>Description :</p>
                                                {
                                                    item.ProfessionalInformation[2].Responsibility ?
                                                        <p className='ms-3'>{item.ProfessionalInformation[2].Responsibility}</p> : null
                                                }

                                            </div>

                                        </div> : null
                                }



                            </div>




                            <div className='mt-5 mx-5 bg-white border-2'>
                                <p className='text-lg px-5 py-9'>About ISTCOSA</p>
                                {
                                    item.ISTCAbout ?
                                        <p>{item.ISTCAbout}</p> : null
                                }

                            </div>


                            <div className='mt-5 mx-5 bg-white border-2'>
                                <p className='text-lg px-5 py-9'>Comment ISTC</p>
                                {
                                    item.Comments ?
                                        <p>{item.Comments}</p> : null
                                }

                            </div>

                        </div>
                    )
                }))
            }

        </>
    )
}

export default MyProfile
