import React from 'react'
import NavBar from '../components/navbar/NavBar'
import NavBar2 from '../components/navbar/NavBar2'
import { Outlet } from 'react-router-dom'

function HomePage() {
  return (
    <>
      <div className='fixed w-full top-0 left-0'>
        <NavBar />
      </div>
      <div className='fixed w-full top-28 md:top-28 lg:top-20 left-0'>
        <NavBar2 />
      </div>
      <div className='lg:mt-40  mt-52'>
        <Outlet />
      </div>

    </>
  )
}

export default HomePage
