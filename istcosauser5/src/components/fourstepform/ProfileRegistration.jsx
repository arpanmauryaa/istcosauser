import React from 'react'
import Button1 from '../globalcomponent/Button1'
import First from './First'

function ProfileRegistration() {
    return (
        <>
            <div className=' bg-slate-50 h-full'>
                <div className=' pt-5 px-5 '>
                    <p className='font-bold py-2 px-5 bg-white text-3xl text-red-900'>Profile <span className='text-black'>Registration</span></p>

                    <div className='mt-14 grid grid-cols-4 '>
                        <div className='text-center '>
                            <span className='bg-red-900 py-4 px-5 rounded-full text-white cursor-pointer relative top-3'>1</span>
                            <p className='border-b-2 border-red-900'></p>
                            <p className='mt-8 text-sm text-red-900'>Registration</p>
                        </div>
                        <div className='text-center'>
                            <span className='bg-red-900 py-4 px-5 rounded-full text-white cursor-pointer relative top-3'>2</span>
                            <p className='border-b-2 border-red-900'></p>
                            <p className='mt-8 text-sm text-red-900'>Professional Information</p>
                        </div>
                        <div className='text-center '>
                            <span className='bg-red-900 py-4 px-5 rounded-full text-white cursor-pointer relative top-3'>3</span>
                            <p className='border-b-2 border-red-900'></p>
                            <p className='mt-8 text-sm text-red-900'>Personal Information</p>
                        </div>
                        <div className='text-center '>
                            <span className='bg-red-900 py-4 px-5 rounded-full text-white cursor-pointer relative top-3'>4</span>
                            <p className='border-b-2 border-red-900'></p>
                            <p className='mt-8 text-sm text-red-900'>ISTC Memories</p>
                        </div>
                    </div>

                    <div className='bg-white mt-8'>
                        <First />
                    </div>
                </div>


            </div>
        </>
    )
}

export default ProfileRegistration
