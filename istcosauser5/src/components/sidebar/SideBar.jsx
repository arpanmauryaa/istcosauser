import React, { useState } from 'react'
import { AiFillDashboard } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import DropDownButton from '../globalcomponent/DropDownButton';
import { IoSearch } from "react-icons/io5";
import { PiGridFourFill } from "react-icons/pi";
import { FaToolbox } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { TiArrowSortedDown } from "react-icons/ti";
import { IoIosArrowForward } from "react-icons/io";
import { TiArrowSortedUp } from "react-icons/ti";

function SideBar({ state, openSideBarFunction }) {
  const navigate = useNavigate()

  const [isSearch, setIsSearch] = useState(false)
  const [isList, setIsList] = useState(false)
  const [isJob, setIsJob] = useState(false)
  const [isSetting, setIsSetting] = useState(false)

  let location = useLocation();
  let path = location.pathname
  let lastURL = path.split('/').pop();


  const loginDashboardNavigate = () => {
    openSideBarFunction();
    navigate('/home/logindashboard')
    console.log('hii')
  }

  const serchAlumaniNavigate = () => {
    openSideBarFunction();
    navigate('/home/searchalumni')


  }

  const searchEmployementNavigate = () => {
    openSideBarFunction();
    navigate('/home/searchemployement')
  }

  const searchBusinessNavigate = () => {
    openSideBarFunction();
    navigate('/home/SearchBusiness')
  }

  const employeListNavigate = () => {
    openSideBarFunction();
    navigate('/home/list/employelist')
  }

  const businessListNavigate = () => {
    openSideBarFunction();
    navigate('/home/list/businesslist')
  }

  const employementNavigate = () => {
    openSideBarFunction();
    navigate('/home/job/employement')
  }

  const businessNavigate = () => {
    openSideBarFunction();
    navigate('/home/job/business')
  }



  const myProfileNavigate = () => {
    openSideBarFunction();
    navigate('/home/setting/myprofile')
  }

  const editProfileNavigate = () => {
    openSideBarFunction();
    navigate('/home/setting/editprofile')
  }

  const profile = () => {
    openSideBarFunction();
    navigate('/home/setting/profile')
  }

  const passwordNavigate = () => {
    openSideBarFunction();
    navigate('/home/setting/password')
  }

  const emailNavigate = () => {
    openSideBarFunction();
    navigate('/home/setting/email')
  }

  const homeNavigate =()=>{
    navigate('/dashboardhome')
  }

  return (
    <>
      <div className='bg-slate-50 lg:h-full '>

        <div className='border-r-2 border-t-2 h-full pb-96   w-60 hidden lg:block z-10'>
          <div className={`flex mt-5 ms-6 cursor-pointer  p-2 ${lastURL == 'logindashboard' ? 'bg-red-900 text-white' : null} rounded-lg me-7`}>
            <AiFillDashboard className='mt-1 text-xl' />
            <p onClick={loginDashboardNavigate} className='ms-5'>Dashboard</p>
          </div>

          <div onClick={homeNavigate} className='flex mt-5 ms-8 cursor-pointer'>
            <FaHome className='mt-1 ' />
            <p className='ms-6 text-lg'>Home</p>
          </div>


          {/* search dropdown */}

          <div onClick={() => { setIsSearch((old => !old)) }} className='flex mt-3 ms-6 cursor-pointer'>

            {
              !isSearch ?
                <div className='flex ms-2 '>
                  <IoSearch className='mt-3 text-xl' />
                  <p className='mt-2 ps-5 text-lg'>Search</p>
                  <TiArrowSortedDown className='mt-3 ms-16' />
                </div> :
                <div className='flex bg-gray-200 rounded-lg px-2 pb-1'>
                  <IoSearch className='mt-3 text-xl text-red-900' />
                  <p className='mt-2 ps-5 text-lg text-red-900'>Search</p>
                  <TiArrowSortedUp className='mt-3 ms-16 text-red-900' />
                </div>
            }

          </div>

          {
            isSearch ?
              <div>
                <div onClick={serchAlumaniNavigate} className='flex ms-8 mt-2 cursor-pointer'>
                  {
                    lastURL == 'searchalumni' ?
                      <div className='flex text-white bg-red-900 px-2 py-1.5 rounded-lg'>
                        <IoIosArrowForward className='text-xl mt-1 font-bold' />
                        <p className='ms-4 text-lg'>Search User</p>
                      </div>

                      : <div className='flex px-2 py-1.5'>
                        <IoIosArrowForward className='text-xl mt-1 font-bold ' />
                        <p className='ms-4 text-lg'>Search User</p>
                      </div>
                  }
                </div>

                <div onClick={searchEmployementNavigate} className='flex ms-9 mt-2 cursor-pointer'>
                  {
                    lastURL == 'searchemployement' ?
                      <div className='flex bg-red-900 text-white rounded-lg px-1'>
                        <IoIosArrowForward className='text-xl font-bold mt-5' />
                        <p className='ms-4 text-lg'>Search Employement</p>
                      </div>
                      :
                      <div className='flex rounded-lg px-1'>
                        <IoIosArrowForward className='text-xl font-bold mt-5' />
                        <p className='ms-4 text-lg'>Search Employement</p>
                      </div>

                  }

                </div>

                <div onClick={searchBusinessNavigate} className='flex ms-8 mt-2 cursor-pointer'>

                  {
                    lastURL == 'SearchBusiness' ?
                      <div className='flex bg-red-900 text-white rounded-lg px-2 py-1.5'>
                        <IoIosArrowForward className='text-xl font-bold mt-1' />
                        <p className='ms-4 text-lg'>Search Business</p>
                      </div>

                      :
                      <div className='flex px-2 py-1.5'>
                        <IoIosArrowForward className='text-xl font-bold mt-1' />
                        <p className='ms-4 text-lg'>Search Business</p>
                      </div>
                  }

                </div>
              </div> : null
          }



          {/* List Dropdown fffffffffffffffffffffffffffffffffffff */}

          <div onClick={() => { setIsList((old => !old)) }} className='flex mt-3 ms-6 cursor-pointer'>
            {
              !isList ?
                <div className='flex ms-2'>
                  <PiGridFourFill className='mt-3 text-xl ' />
                  <p className='mt-2 ps-5 text-lg'>List</p>
                  <TiArrowSortedDown className='mt-3 ms-[90px]' />
                </div> :
                <div className='flex  bg-gray-200 rounded-lg px-2 pb-1'>
                  <PiGridFourFill className='mt-3 text-xl text-red-900' />
                  <p className='mt-2 ps-5 text-lg text-red-900'>List</p>
                  <TiArrowSortedUp className='mt-3 ms-[90px] text-red-900' />
                </div>
            }


          </div>


          {
            isList ?
              <div>
                <div onClick={employeListNavigate} className='flex ms-8 mt-2 cursor-pointer'>
                  {
                    lastURL == 'employelist' ?
                      <div className='flex bg-red-900 text-white rounded-lg px-2 py-1.5'>
                        <IoIosArrowForward className='text-xl font-bold mt-1' />
                        <p className='ms-4 text-lg'>Employeent List</p>
                      </div>
                      :
                      <div className='flex px-2 py-1.5'>
                        <IoIosArrowForward className='text-xl font-bold mt-1' />
                        <p className='ms-4 text-lg'>Employeent List</p>
                      </div>
                  }
                </div>

                <div onClick={businessListNavigate} className='flex ms-8 mt-2 cursor-pointer'>
                  {
                    lastURL == 'businesslist' ?
                      <div className='flex bg-red-900 text-white rounded-lg px-2 py-1.5'>
                        <IoIosArrowForward className='text-xl font-bold mt-1' />
                        <p className='ms-4 text-lg'>Business List</p>
                      </div>

                      :
                      <div className='flex px-2 py-1.5'>
                        <IoIosArrowForward className='text-xl font-bold mt-1' />
                        <p className='ms-4 text-lg'>Business List</p>
                      </div>
                  }
                </div>
              </div> : null
          }




          {/* Job Dropdown fffffffffffffffffffffffffffffffffffff */}

          <div onClick={() => { setIsJob((old => !old)) }} className='flex mt-3 ms-6 cursor-pointer'>
            {
              !isJob ?

                <div className='flex ms-2'>
                  <FaToolbox className='mt-3 text-xl ' />
                  <p className='mt-2 ps-5 text-lg'>Jobs</p>
                  <TiArrowSortedDown className='mt-3 ms-[83px]' />
                </div> :
                <div className='flex  bg-gray-200 rounded-lg px-2 pb-1'>
                  <FaToolbox className='mt-3 text-xl text-red-900' />
                  <p className='mt-2 ps-5 text-lg text-red-900'>Jobs</p>
                  <TiArrowSortedDown className='mt-3 ms-[83px] text-red-900' />
                </div>
            }
          </div>

          {
            isJob ?
              <div>
                <div onClick={employementNavigate} className='flex ms-8 mt-2 cursor-pointer'>
                  {
                    lastURL == 'employement' ?
                      <div className='flex bg-red-900 text-white rounded-lg px-2 py-1.5'>
                        <IoIosArrowForward className='text-xl font-bold' />
                        <p className='ms-4 text-lg'>Employeent List</p>
                      </div>
                      :
                      <div className='flex  px-2 py-1.5'>
                        <IoIosArrowForward className='text-xl font-bold' />
                        <p className='ms-4 text-lg'>Employeent List</p>
                      </div>
                  }
                </div>

                <div onClick={businessNavigate} className='flex ms-8 mt-2 cursor-pointer'>
                  {
                    lastURL == 'business' ?
                      <div className='flex bg-red-900 text-white rounded-lg px-2 py-1.5'>
                        <IoIosArrowForward className='text-xl font-bold' />
                        <p className='ms-4 text-lg'>Business List</p>
                      </div>
                      : <div className='flex px-2 py-1.5'>
                        <IoIosArrowForward className='text-xl font-bold' />
                        <p className='ms-4 text-lg'>Business List</p>
                      </div>
                  }
                </div>
              </div> : null
          }



          {/* Setting Dropdown fffffffffffffffffffffffffffffffffffff */}


          <div onClick={() => setIsSetting((old => !old))} className='flex mt-5 ms-6 cursor-pointer'>

            {
              !isSetting ?
                <div className='flex ms-2'>
                  <IoSettings className='mt-3 text-xl ' />
                  <p className='mt-2 ps-5 text-lg'>Setting</p>
                  <TiArrowSortedDown className='mt-3 ms-[62px]' />
                </div> :
                <div className='flex  bg-gray-200 rounded-lg px-2 pb-1'>
                  <IoSettings className='mt-3 text-xl text-red-900' />
                  <p className='mt-2 ps-5 text-lg text-red-900'>setting</p>
                  <TiArrowSortedUp className='mt-3 ms-[62px] text-red-900' />
                </div>
            }
          </div>

          {
            isSetting ?
              <div>
                <div onClick={myProfileNavigate} className='flex ms-8 mt-2 cursor-pointer'>
                  {

                    lastURL == 'myprofile' ?
                      <div className='flex bg-red-900 text-white rounded-lg ps-2 pr-11 py-1.5'>
                        <IoIosArrowForward className='text-xl font-bold' />
                        <p className='ms-4 text-lg'>My Profile</p>
                      </div>
                      :
                      <div className='flex  px-2 py-1.5'>
                        <IoIosArrowForward className='text-xl font-bold ' />
                        <p className='ms-4 text-lg'>My Profile</p>
                      </div>
                  }
                </div>

                <div onClick={editProfileNavigate} className='flex ms-8 mt-2 cursor-pointer'>
                  {
                    lastURL == 'editprofile' ?
                      <div className='flex bg-red-900 text-white rounded-lg ps-2 pr-9 py-1.5'>
                        <IoIosArrowForward className='text-xl font-bold' />
                        <p className='ms-4 text-lg'>Edit Profile</p>
                      </div>
                      :
                      <div className='flex px-2 py-1.5'>
                        <IoIosArrowForward className='text-xl font-bold' />
                        <p className='ms-4 text-lg'>Edit Profile</p>
                      </div>
                  }

                </div>

                <div onClick={profile} className='flex ms-8 mt-2 cursor-pointer'>
                  {

                    lastURL == 'profile' ?
                      <div className='flex bg-red-900 text-white rounded-lg px-2 py-1.5'>
                        <IoIosArrowForward className='text-xl font-bold' />
                        <p className='ms-4 text-lg'>Profile Picture</p>
                      </div>
                      :
                      <div className='flex px-2 py-1.5' >
                        <IoIosArrowForward className='text-xl font-bold' />
                        <p className='ms-4 text-lg'>Profile Picture</p>
                      </div>
                  }
                </div>

                <div onClick={passwordNavigate} className='flex ms-8 mt-2 cursor-pointer'>
                  {

                    lastURL == 'password' ?
                      <div className='flex bg-red-900 text-white rounded-lg ps-2 pr-12 py-1.5 '>
                        <IoIosArrowForward className='text-xl font-bold' />
                        <p className='ms-4 text-lg'>Password</p>
                      </div>
                      :
                      <div className='flex px-2 py-1.5 '>
                        <IoIosArrowForward className='text-xl font-bold' />
                        <p className='ms-4 text-lg'>Password</p>
                      </div>
                  }
                </div>

                <div onClick={emailNavigate} className='flex ms-8 mt-2 cursor-pointer'>
                  {
                    lastURL == 'email' ?
                      <div className='flex bg-red-900 text-white rounded-lg ps-2 pr-20 py-1.5'>
                        <IoIosArrowForward className='text-xl font-bold' />
                        <p className='ms-4 text-lg'>Email</p>
                      </div>
                      :
                      <div className='flex px-2 py-1.5'>
                        <IoIosArrowForward className='text-xl font-bold' />
                        <p className='ms-4 text-lg'>Email</p>
                      </div>
                  }
                </div>
              </div> : null
          }


        </div>
















        {/* for responsive side bar */}


        {
          state ?
            <div className='border-r-2 border-t-2 pb-5  w-60 lg:hidden block fixed bg-slate-50 h-full overflow-x-scroll '>
              <div className={`flex mt-5 ms-6 cursor-pointer  p-2 ${lastURL == 'logindashboard' ? 'bg-red-900 text-white' : null} rounded-lg me-7`}>
                <AiFillDashboard className='mt-1 text-xl' />
                <p onClick={loginDashboardNavigate} className='ms-5'>Dashboard</p>
              </div>

              <div className='flex mt-5 ms-8 cursor-pointer'>
                <FaHome className='mt-1 ' />
                <p className='ms-6 text-lg'>Home</p>
              </div>


              {/* search dropdown */}

              <div onClick={() => { setIsSearch((old => !old)) }} className='flex mt-3 ms-6 cursor-pointer'>

                {
                  !isSearch ?
                    <div className='flex ms-2 '>
                      <IoSearch className='mt-3 text-xl' />
                      <p className='mt-2 ps-5 text-lg'>Search</p>
                      <TiArrowSortedDown className='mt-3 ms-16' />
                    </div> :
                    <div className='flex bg-gray-200 rounded-lg px-2 pb-1'>
                      <IoSearch className='mt-3 text-xl text-red-900' />
                      <p className='mt-2 ps-5 text-lg text-red-900'>Search</p>
                      <TiArrowSortedUp className='mt-3 ms-16 text-red-900' />
                    </div>
                }

              </div>

              {
                isSearch ?
                  <div>
                    <div onClick={serchAlumaniNavigate} className='flex ms-8 mt-2 cursor-pointer'>
                      {
                        lastURL == 'searchalumni' ?
                          <div className='flex text-white bg-red-900 px-2 py-1.5 rounded-lg'>
                            <IoIosArrowForward className='text-xl mt-1 font-bold' />
                            <p className='ms-4 text-lg'>Search User</p>
                          </div>

                          : <div className='flex px-2 py-1.5'>
                            <IoIosArrowForward className='text-xl mt-1 font-bold ' />
                            <p className='ms-4 text-lg'>Search User</p>
                          </div>
                      }
                    </div>

                    <div onClick={searchEmployementNavigate} className='flex ms-9 mt-2 cursor-pointer'>
                      {
                        lastURL == 'searchemployement' ?
                          <div className='flex bg-red-900 text-white rounded-lg px-1'>
                            <IoIosArrowForward className='text-xl font-bold mt-5' />
                            <p className='ms-4 text-lg'>Search Employement</p>
                          </div>
                          :
                          <div className='flex rounded-lg px-1'>
                            <IoIosArrowForward className='text-xl font-bold mt-5' />
                            <p className='ms-4 text-lg'>Search Employement</p>
                          </div>

                      }

                    </div>

                    <div onClick={searchBusinessNavigate} className='flex ms-8 mt-2 cursor-pointer'>

                      {
                        lastURL == 'SearchBusiness' ?
                          <div className='flex bg-red-900 text-white rounded-lg px-2 py-1.5'>
                            <IoIosArrowForward className='text-xl font-bold mt-1' />
                            <p className='ms-4 text-lg'>Search Business</p>
                          </div>

                          :
                          <div className='flex px-2 py-1.5'>
                            <IoIosArrowForward className='text-xl font-bold mt-1' />
                            <p className='ms-4 text-lg'>Search Business</p>
                          </div>
                      }

                    </div>
                  </div> : null
              }



              {/* List Dropdown fffffffffffffffffffffffffffffffffffff */}

              <div onClick={() => { setIsList((old => !old)) }} className='flex mt-3 ms-6 cursor-pointer'>
                {
                  !isList ?
                    <div className='flex ms-2'>
                      <PiGridFourFill className='mt-3 text-xl ' />
                      <p className='mt-2 ps-5 text-lg'>List</p>
                      <TiArrowSortedDown className='mt-3 ms-[90px]' />
                    </div> :
                    <div className='flex  bg-gray-200 rounded-lg px-2 pb-1'>
                      <PiGridFourFill className='mt-3 text-xl text-red-900' />
                      <p className='mt-2 ps-5 text-lg text-red-900'>List</p>
                      <TiArrowSortedUp className='mt-3 ms-[90px] text-red-900' />
                    </div>
                }


              </div>


              {
                isList ?
                  <div>
                    <div onClick={employeListNavigate} className='flex ms-8 mt-2 cursor-pointer'>
                      {
                        lastURL == 'employelist' ?
                          <div className='flex bg-red-900 text-white rounded-lg px-2 py-1.5'>
                            <IoIosArrowForward className='text-xl font-bold mt-1' />
                            <p className='ms-4 text-lg'>Employeent List</p>
                          </div>
                          :
                          <div className='flex px-2 py-1.5'>
                            <IoIosArrowForward className='text-xl font-bold mt-1' />
                            <p className='ms-4 text-lg'>Employeent List</p>
                          </div>
                      }
                    </div>

                    <div onClick={businessListNavigate} className='flex ms-8 mt-2 cursor-pointer'>
                      {
                        lastURL == 'businesslist' ?
                          <div className='flex bg-red-900 text-white rounded-lg px-2 py-1.5'>
                            <IoIosArrowForward className='text-xl font-bold mt-1' />
                            <p className='ms-4 text-lg'>Business List</p>
                          </div>

                          :
                          <div className='flex px-2 py-1.5'>
                            <IoIosArrowForward className='text-xl font-bold mt-1' />
                            <p className='ms-4 text-lg'>Business List</p>
                          </div>
                      }
                    </div>
                  </div> : null
              }




              {/* Job Dropdown fffffffffffffffffffffffffffffffffffff */}

              <div onClick={() => { setIsJob((old => !old)) }} className='flex mt-3 ms-6 cursor-pointer'>
                {
                  !isJob ?

                    <div className='flex ms-2'>
                      <FaToolbox className='mt-3 text-xl ' />
                      <p className='mt-2 ps-5 text-lg'>Jobs</p>
                      <TiArrowSortedDown className='mt-3 ms-[83px]' />
                    </div> :
                    <div className='flex  bg-gray-200 rounded-lg px-2 pb-1'>
                      <FaToolbox className='mt-3 text-xl text-red-900' />
                      <p className='mt-2 ps-5 text-lg text-red-900'>Jobs</p>
                      <TiArrowSortedDown className='mt-3 ms-[83px] text-red-900' />
                    </div>
                }
              </div>

              {
                isJob ?
                  <div>
                    <div onClick={employementNavigate} className='flex ms-8 mt-2 cursor-pointer'>
                      {
                        lastURL == 'employement' ?
                          <div className='flex bg-red-900 text-white rounded-lg px-2 py-1.5'>
                            <IoIosArrowForward className='text-xl font-bold' />
                            <p className='ms-4 text-lg'>Employeent List</p>
                          </div>
                          :
                          <div className='flex  px-2 py-1.5'>
                            <IoIosArrowForward className='text-xl font-bold' />
                            <p className='ms-4 text-lg'>Employeent List</p>
                          </div>
                      }
                    </div>

                    <div onClick={businessNavigate} className='flex ms-8 mt-2 cursor-pointer'>
                      {
                        lastURL == 'business' ?
                          <div className='flex bg-red-900 text-white rounded-lg px-2 py-1.5'>
                            <IoIosArrowForward className='text-xl font-bold' />
                            <p className='ms-4 text-lg'>Business List</p>
                          </div>
                          : <div className='flex px-2 py-1.5'>
                            <IoIosArrowForward className='text-xl font-bold' />
                            <p className='ms-4 text-lg'>Business List</p>
                          </div>
                      }
                    </div>
                  </div> : null
              }



              {/* Setting Dropdown fffffffffffffffffffffffffffffffffffff */}


              <div onClick={() => setIsSetting((old => !old))} className='flex mt-5 ms-6 cursor-pointer '>

                {
                  !isSetting ?
                    <div className='flex ms-2'>
                      <IoSettings className='mt-3 text-xl ' />
                      <p className='mt-2 ps-5 text-lg'>Setting</p>
                      <TiArrowSortedDown className='mt-3 ms-[64px]' />
                    </div> :
                    <div className='flex  bg-gray-200 rounded-lg px-2 pb-1'>
                      <IoSettings className='mt-3 text-xl text-red-900' />
                      <p className='mt-2 ps-5 text-lg text-red-900'>Setting</p>
                      <TiArrowSortedUp className='mt-3 ms-[64px] text-red-900' />
                    </div>
                }
              </div>

              {
                isSetting ?
                  <div>
                    <div onClick={myProfileNavigate} className='flex ms-8 mt-2 cursor-pointer'>
                      {

                        lastURL == 'myprofile' ?
                          <div className='flex bg-red-900 text-white rounded-lg ps-2 pr-11 py-1.5'>
                            <IoIosArrowForward className='text-xl font-bold' />
                            <p className='ms-4 text-lg'>My Profile</p>
                          </div>
                          :
                          <div className='flex  px-2 py-1.5'>
                            <IoIosArrowForward className='text-xl font-bold ' />
                            <p className='ms-4 text-lg'>My Profile</p>
                          </div>
                      }
                    </div>

                    <div onClick={editProfileNavigate} className='flex ms-8 mt-2 cursor-pointer'>
                      {
                        lastURL == 'editprofile' ?
                          <div className='flex bg-red-900 text-white rounded-lg ps-2 pr-9 py-1.5'>
                            <IoIosArrowForward className='text-xl font-bold' />
                            <p className='ms-4 text-lg'>Edit Profile</p>
                          </div>
                          :
                          <div className='flex px-2 py-1.5'>
                            <IoIosArrowForward className='text-xl font-bold' />
                            <p className='ms-4 text-lg'>Edit Profile</p>
                          </div>
                      }

                    </div>

                    <div onClick={profile} className='flex ms-8 mt-2 cursor-pointer'>
                      {

                        lastURL == 'profile' ?
                          <div className='flex bg-red-900 text-white rounded-lg px-2 py-1.5'>
                            <IoIosArrowForward className='text-xl font-bold' />
                            <p className='ms-4 text-lg'>Profile Picture</p>
                          </div>
                          :
                          <div className='flex px-2 py-1.5' >
                            <IoIosArrowForward className='text-xl font-bold' />
                            <p className='ms-4 text-lg'>Profile Picture</p>
                          </div>
                      }
                    </div>

                    <div onClick={passwordNavigate} className='flex ms-8 mt-2 cursor-pointer pb-8'>
                      {

                        lastURL == 'password' ?
                          <div className='flex bg-red-900 text-white rounded-lg ps-2 pr-12 py-1.5 '>
                            <IoIosArrowForward className='text-xl font-bold' />
                            <p className='ms-4 text-lg'>Password</p>
                          </div>
                          :
                          <div className='flex px-2 py-1.5 '>
                            <IoIosArrowForward className='text-xl font-bold' />
                            <p className='ms-4 text-lg'>Password</p>
                          </div>
                      }
                    </div>

                    <div onClick={emailNavigate} className='flex ms-8 mt-2 cursor-pointer'>
                      {
                        lastURL == 'email' ?
                          <div className='flex bg-red-900 text-white rounded-lg ps-2 pr-20 py-1.5'>
                            <IoIosArrowForward className='text-xl font-bold' />
                            <p className='ms-4 text-lg'>Email</p>
                          </div>
                          :
                          <div className='flex px-2 py-1.5'>
                            <IoIosArrowForward className='text-xl font-bold' />
                            <p className='ms-4 text-lg'>Email</p>
                          </div>
                      }
                    </div>
                  </div> : null
              }


            </div> : null


        }
      </div>
    </>
  )
}

export default SideBar
