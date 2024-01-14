import React, { useState } from 'react'
import InputField from '../../globalcomponent/InputField'
import Button1 from '../../globalcomponent/Button1'

function Email() {
    const [errorMassage, setErrorMassage] = useState('')
    const [email, setEmail] = useState('')

    const handleChange = (e) => {
        setEmail(e.target.value)
        setErrorMassage('')
    }

    const submitData = (event) => {
        event.preventDefault()
        let isValid = true

        if (email == '') {
            setErrorMassage('Enter Email')
            isValid = false
        }

        if (isValid) {
            console.log(email, 'hii')
            setEmail('')
        }
    }

    const resetEmail = () => {
        setEmail('')
    }

    return (
        <>

            <div className='bg-slate-50 h-full'>
                <div className='mx-8 pt-8'>
                    <div>
                        <div className='grid grid-cols-2 bg-white rounded-md py-3 px-5 '>
                            <div className='text-4xl font-bold text-red-900'>
                                Change Email Address
                            </div>
                        </div>

                        <form onSubmit={submitData} action="">
                            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 px-5 bg-white mt-5'>
                                <div className='mt-5'>
                                    <label className='block mb-2 text-sm font-bold text-gray-900 dark:text-white'>New Email Address <span>*</span></label>
                                    <InputField label='New Email Address' star='*' placeholder='Enter New Email Address'
                                        bgColor='bg-white' padding='py-2' marginTop='mt-3' inputType='text'
                                        name='email'
                                        value={email}
                                        handleChange={handleChange}
                                    />
                                    <p className='text-red-600'>{errorMassage}</p>
                                </div>
                            </div>

                            <div className='text-end pt-5 bg-white pb-2'>
                                <Button1 onClickFunction={resetEmail} buttonName='Reset' paddingX='px-5' paddingY='py-2' bgColor='bg-red-900' textColor='text-white' bgHover='hover:bg-white' hoverText='hover:text-red-900' />
                                <Button1 buttonName='Submit' paddingX='px-5' paddingY='py-2' bgColor='bg-red-900' textColor='text-white' bgHover='hover:bg-white' hoverText='hover:text-red-900' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Email
