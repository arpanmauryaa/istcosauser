import React, { useState } from 'react'
import Button1 from '../globalcomponent/Button1'

function First() {
    const [addRegistration , setAddRegistration] = useState('hhhhhhhhhhhh')

    const addData = (event) => {
        event.preventDefault()
        console.log(addRegistration)
    }

    return ( 
        <>
            <form onSubmit={addData}  className='px-10 py-8' >
                <p className='text-red-900 '>* Field mandatory </p>

                <div className='grid md:grid-cols-3 gap-4 mt-8'>
                    <div>
                        <label htmlFor="">BatchNo *</label>
                        <div>
                            <input type="text" disabled className='border w-full py-1.5 rounded bg-gray-200 ' />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="">Roll No *</label>
                        <div>
                            <input type="text" disabled className='border w-full py-1.5 rounded bg-gray-200' />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="">Full Name *</label>
                        <div>
                            <input type="text" disabled className='border w-full py-1.5 rounded bg-gray-200' />
                        </div>
                    </div>
                </div>

                <div className='grid md:grid-cols-2 gap-4 mt-8'>
                    <div>
                        <label htmlFor="">Email Address*</label>
                        <div>
                            <input type="text" disabled className='border w-full py-1.5 rounded bg-gray-200' />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="">Phone Number*</label>
                        <div>
                            <input type="text" disabled className='border w-full py-1.5 rounded bg-gray-200' />
                        </div>
                    </div>
                </div>


                <div className='grid lg:grid-cols-4 md:grid-cols-2    mt-8 gap-4'>

                    <div className=''>
                        <label htmlFor="">Country*</label>
                        <div className='grid grid-cols-4'>
                            <div>
                                <input type="text" disabled className='border w-full py-1.5 rounded-l bg-gray-200' />
                            </div>
                            <div className='col-span-3'>
                                <input type="text" className='border w-full py-1.5 rounded-r ' />
                            </div>
                        </div>
                    </div>

                    <div className=''>
                        <label htmlFor="">State*</label>
                        <input type="text" className='border w-full py-1.5 rounded ' />
                    </div>

                    <div className=''>
                        <label htmlFor="">City*</label>
                        <input type="text" className='border w-full py-1.5 rounded' />
                    </div>

                    <div className=''>
                        <label htmlFor="">Pin Code*</label>
                        <input type="text" className='border w-full py-1.5 rounded' />
                    </div>

                </div>


                <div className='mt-8 text-end'>
                    <Button1 buttonName='Next' buttonType='submit' paddingX='px-6' paddingY='py-3' bgColor='bg-red-900' textColor='text-white' />
                </div>

            </form>
        </>
    )
}

export default First
