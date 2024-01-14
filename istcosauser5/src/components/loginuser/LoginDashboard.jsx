

import React, { useContext, useEffect, useState } from 'react'
import { FaMapMarkerAlt, FaUser, FaRegCalendarCheck, FaHeart } from "react-icons/fa";
import Button1 from '../globalcomponent/Button1';
import { IoIosMail, IoMdArrowDropdown } from "react-icons/io";
import { MdCall } from "react-icons/md";
import Card from './Card';
import { MdArrowDropUp } from "react-icons/md";
import { userdashboard, userprofile, viewprofile } from '../../utils/api/margeapi/MargeApi';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import CardImage from './CardImage';
// import SanjayOld from '../../assets/SanjayOld.jpg'
// import NoImage from '../../assets/NoImage.jpg'
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { a } from '../LoginPage';
// import lifemember from '../../assets/lifemember.jpg'



function LoginDashboard() {

    const jsonData = [
        { image: 'http://new.istcosa.com/Images/9402.jpg', Name: 'Sachin' },
        { image: 'http://new.istcosa.com/Images/9614.jpg', Name: 'Ashish' },
        { image: 'http://new.istcosa.com/Images/8113.jpg', Name: 'Shandhu' },
        { image: 'http://new.istcosa.com/Images/8123.jpg', Name: 'Sanjay' },
        { image: 'http://new.istcosa.com/Images/7717.jpg', Name: 'Santosh' },
        { image: 'http://new.istcosa.com/Images/7743.jpg', Name: 'Arvind' },
        { image: 'http://new.istcosa.com/Images/200456.jpg', Name: 'Ajay' },
        { image: 'http://new.istcosa.com/Images/9470.jpg', Name: 'Kamaldeep' },
    ]


    const { name } = useContext(a)

    console.log(name, 'fffffffffffffffffff')

    const navigate = useNavigate()

    const location = useLocation();
    const receivedData = location.state?.data;


    // const location = useLocation()
    // const locationpath = location.pathname

    const [arrowChange, setArrowChange] = useState(false)
    const [cardData, setCardData] = useState([])
    const [viewProfileData, setViewProfileData] = useState([])

    const state = JSON.parse(localStorage.getItem('userId'))
    console.log(state, 'hhhhhhhhh1')

    // useEffect(() => {
    //     userprofile().then((response) => {
    //         const data = response
    //         console.log(data, 'hii')
    //         // setProfileData([data])
    //     }).catch((error) => {
    //         console.log('error1')
    //     })
    // }, [])

    useEffect(() => {
        userdashboard(state).then(response => {
            const data = response
            setCardData([data])
            console.log(data, 'jjjjj')
        }).catch(error => {
            console.log('error')
        })
    }, [])


    useEffect(() => {
        viewprofile(state).then(response => {
            const data = response
            setViewProfileData([data])
        }).catch((error => {
            console.log('error im view profile')
        }))

    }, [])


    const arrowChangeFunction = () => {
        setArrowChange((old => !old))
    }


    const date = new Date(2022, 1, 20);
    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    console.log(formattedDate, 'dateeeeeeeee');

    const editProfileNavigate = () => {
        navigate('/home/setting/editprofile')
    }

    const ViewProfileLoginDashboardNavigate = (rollNumberId) => {
        navigate('/home/viewprofilelogindashboard', { state: rollNumberId })
    }

    const fourStepForm =()=>{
        navigate('/home/profileregistration')
    }


    useEffect(() => {
        toast('Welcome To DashBoard !', {
            position: toast.POSITION.TOP_RIGHT
        })
        // locationpath
    }, [receivedData])


    return (
        <>
            <div className='px-3 mt-2'>
                <p className='bg-red-200 rounded-md text-xs text-center py-4 text-red-800 '>Your Profile is incomplete, please <span onClick={fourStepForm} className='underline text-sm text-red-950 cursor-pointer'>complete</span> it to unlock more option's.</p>
            </div>
            <div className={`bg-slate-50 h-full`}>
                <div>
                    <div className='px-5 '>
                        <div className='pt-5 '>
                            <p className='font-bold text-3xl text-red-900 py-2 px-5 bg-white'>Dashboard</p>
                        </div>

                        {
                            viewProfileData?.map((item => {
                                return (
                                    <>
                                        <div className='border-2 mt-5 bg-white'>
                                            <ToastContainer />
                                            <div className='grid grid-cols-1  lg:grid-cols-4 py-8 px-5'>
                                                <div className='  col-span-3'>
                                                    <div className='md:flex  '>
                                                        <img src={item.NewImage} alt="profile" className='w-24 h-28' />
                                                        <img src={item.OldImage} alt='' className='w-24 h-28 md:ms-3' />
                                                    </div>

                                                    <div className='mt-3'>
                                                        <p className='font-bold text-lg'>{item.FullName}  <span>({item.RollNumberID})</span></p>
                                                    </div>



                                                    <div>
                                                        <div className='flex'>
                                                            <FaMapMarkerAlt className='mt-2 ' />
                                                            <p className='ms-1 mt-1 text-sm'> {item.CityName}, {item.StateName}, {item.CountryName}</p>
                                                        </div>
                                                        <p className='lg:me-72 md:me-36 mt-1'>{item.AboutYourSelf}</p>

                                                    </div>

                                                    <div className='mt-4'>
                                                        <Button1 onClickFunction={editProfileNavigate} buttonName='Edit Profile' bgColor='bg-red-900' textColor='text-white' bgHover='hover:bg-white'
                                                            paddingX='py-1.5' paddingY='px-1.5' hoverText='hover:text-black' />
                                                    </div>
                                                </div>

                                                <div className='bg-white'>
                                                    <div className='flex'>
                                                        <FaUser className='mt-1' />
                                                        <p className='ms-2'>{item.Gender}</p>
                                                    </div>

                                                    <div className='flex mt-5'>
                                                        <FaRegCalendarCheck className='mt-1' />
                                                        <p className='ms-2'>{item.DateOfBirth}</p>
                                                    </div>

                                                    <div className='flex mt-5'>
                                                        <FaHeart className='mt-1' />
                                                        <p className='ms-2'>{item.MaritalStatus}</p>
                                                    </div>


                                                    <div className='flex mt-5'>
                                                        <IoIosMail className='mt-1' />
                                                        <p className='ms-2'>{item.Email}</p>
                                                    </div>


                                                    <div className='flex mt-5'>
                                                        <MdCall className='mt-1' />
                                                        <p className='ms-2'> {item.CountryCode} {item.PhoneNumber}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            }))
                        }



                        < div className='grid grid-cols-1 lg:grid-cols-4  md:grid-cols-2  gap-6'>
                            {
                                cardData.map(((item, index) => {
                                    return (
                                        <>
                                            <div key={index}>
                                                <Card header='Registered Alumni' batch={item.BatchYear} CurrentRegistered={item.CurrentRegistered}
                                                    CurrentRegisteredInPer={item.CurrentRegisteredInPer} Registered={item.Registered} RegisteredInPer={item.RegisteredInPer} />
                                            </div>

                                            <div>
                                                <Card header='Non-Registered' batch={item.BatchYear}
                                                    CurrentRegistered={item.CurrentNonRegistered} CurrentRegisteredInPer={item.CurrentNonRegisteredInPer}
                                                    Registered={item.NonRegistered} RegisteredInPer={item.NonRegisteredInPer}
                                                />
                                            </div>

                                            <div>
                                                <Card header='Obituary' batch={item.BatchYear} CurrentRegistered={item.CurrentObituaryInPer}
                                                    CurrentRegisteredInPer={item.CurrentObituaryInPer}
                                                    Registered={item.Obituary} RegisteredInPer={item.ObituaryInPer} />
                                            </div>
                                            <div>
                                                <Card header='LifeMember' batch={item.BatchYear} CurrentRegistered={item.CurrentLifeMember}
                                                    CurrentRegisteredInPer={item.CurrentLifeMemberInPer}
                                                    Registered={item.LifeMember} RegisteredInPer={item.LifeMemberInPer} />
                                            </div>

                                        </>
                                    )
                                }))

                            }

                        </div>










                        <div className='mt-5 mb-5 bg-red-900 px-3 py-5 hover:text-slate-50 text-white grid grid-cols-2 '>
                            <div>
                                <p>BIRTHDAYS</p>
                            </div>

                            <div className='justify-end flex '>
                                <div className='flex cursor-pointer'>
                                    <div onClick={arrowChangeFunction}>
                                        {
                                            !arrowChange ?
                                                <IoMdArrowDropdown className='text-2xl me-16' /> : <MdArrowDropUp className='text-3xl me-16' />
                                        }
                                    </div>
                                    <p className='me-8'>View All</p>
                                </div>
                            </div>
                        </div>



                        <div>
                            {
                                !arrowChange ?
                                    <div>
                                        <CardImage ViewProfileLoginDashboardNavigate={ViewProfileLoginDashboardNavigate} />
                                    </div>
                                    : null
                            }
                        </div>

                    </div>
                </div>
            </div >

        </>
    )
}

export default LoginDashboard
