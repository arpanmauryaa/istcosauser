import React from 'react'
import SideBar from './sidebar/SideBar'
import NavBar3 from './navbar/NavBar3'
import { Outlet } from 'react-router-dom'
import Footer from './globalcomponent/Footer'
import { useState } from 'react'

function Home() {
  const [openSideBar, setOpenSideBar] = useState(false)

  const openSideBarFunction = () => {
    setOpenSideBar((old => !old))
    console.log('hhhhhhhhhhhhhhh')
  }

  return (
    <>
      <div className='sticky w-full top-0 left-0'>
        <NavBar3 openSideBarFunction={openSideBarFunction} />
      </div>

      <div className='md:flex '>
        <div className=''>
          <div className='lg:h-screen'>
            <SideBar state={openSideBar} openSideBarFunction={openSideBarFunction} />
          </div>
        </div>
        <div className='w-full'>
          <Outlet />
        </div>
      </div>

      <div className='w-screen'>
        <Footer />
      </div>

    </>
  )
}

export default Home