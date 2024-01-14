import React, { useState } from 'react'
import InputField from '../../globalcomponent/InputField'
import Button1 from '../../globalcomponent/Button1'
import { ImEye } from "react-icons/im";
import { ImEyeBlocked } from "react-icons/im";



function Password() {

    const [errorMassage, setErrorMassage] = useState({
        errorOldPassword: '',
        errorNewPassword: '',
        errorConfirmPassword: ''
    })
    const [checked, setChecked] = useState(false)
    const [checked2, setChecked2] = useState(false)
    const [checked3, setChecked3] = useState(false)
    const [password, setPassword] = useState({
        OldPassword: '',
        NewPassword: '',
        ConfirmPassword: ''
    })

    const handleChange = (e) => {
        setPassword((old => ({ ...old, [e.target.name]: e.target.value })))
        setErrorMassage((old => ({ ...old, [`error${e.target.name}`]: '' })))
    }


    const showPassword = () => {
        setChecked(old => !old)
    }
    const showPassword2 = () => {
        setChecked2(old => !old)
    }
    const showPassword3 = () => {
        setChecked3(old => !old)
    }

    const resetInput = () => {
        setPassword({
            OldPassword: '',
            NewPassword: '',
            ConfirmPassword: ''
        })
    }

    const submitData = (event) => {
        event.preventDefault()
        let isValid = true
        const error = ({
            errorOldPassword: '',
            errorNewPassword: '',
            errorConfirmPassword: ''
        })

        if (password.OldPassword == '') {
            error.errorOldPassword = 'Enter Old Password'
            isValid = false
        }

        if (password.NewPassword == '') {
            error.errorNewPassword = 'Enter New Password'
            isValid = false
        }

        if (password.ConfirmPassword == '') {
            error.errorConfirmPassword = 'Enter Confirm Password'
            isValid = false
        }

        if (!isValid) {
            setErrorMassage(error)
        }

        if (isValid) {
            console.log(password)
            setPassword({
                OldPassword: '',
                NewPassword: '',
                ConfirmPassword: ''
            })
        }
    }

    return (
        <>
            <div className='bg-slate-50 lg:h-full pb-80 lg:pb-0'>
                <div className='mx-8 pt-8'>
                    <div>
                        <div className='grid grid-cols-2 bg-white rounded-md py-3 px-5 '>
                            <div className='text-4xl font-bold text-red-900'>
                                Change Password
                            </div>
                        </div>

                        <form onSubmit={submitData}>
                            <div className='mt-5 px-5 pb-5 bg-white'>
                                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 pt-5 '>
                                    <div>
                                        <label className='block  text-sm font-bold text-gray-900 dark:text-white'>Old Password<span>*</span></label>
                                        <div className='grid grid-cols-12 relative'>
                                            <div className='col-span-11'>
                                                <InputField label='Old Password' star='*' placeholder='Old Password'
                                                    bgColor='bg-white' padding='py-2' marginTop='mt-2' inputType={checked ? 'text' : 'password'}
                                                    name='OldPassword'
                                                    value={password.OldPassword}
                                                    handleChange={handleChange}
                                                />
                                                <p className='text-red-500'>{errorMassage.errorOldPassword}</p>
                                            </div>
                                            <div className='absolute right-12' onClick={showPassword}>
                                                {
                                                    checked ?
                                                        <ImEye className='mt-5' />
                                                        :
                                                        <ImEyeBlocked className='mt-5' />
                                                }
                                            </div>
                                        </div>
                                    </div>

                                    <div className='grid grid-cols-12 relative'>
                                        <div className='col-span-11'>
                                            <label className='block  text-sm font-bold text-gray-900 dark:text-white'>New Password<span>*</span></label>
                                            <InputField label='New Password' star='*' placeholder='New Password'
                                                bgColor='bg-white' padding='py-2' marginTop='mt-2' inputType={checked2 ? 'text' : 'password'}
                                                name='NewPassword'
                                                value={password.NewPassword}
                                                handleChange={handleChange}
                                            />
                                            <p className='text-red-500'>{errorMassage.errorNewPassword}</p>
                                        </div>
                                        <div onClick={showPassword2} className='absolute  right-12'>
                                            {
                                                checked2 ?
                                                    <ImEye className='mt-10' />
                                                    :
                                                    <ImEyeBlocked className='mt-10' />
                                            }
                                        </div>

                                    </div>


                                    <div className='grid grid-cols-12 relative'>
                                        <div className='col-span-11'>
                                            <label className='block  text-sm font-bold text-gray-900 dark:text-white'>Confirm Password<span>*</span></label>
                                            <InputField label='New Password' star='*' placeholder='New Password'
                                                bgColor='bg-white' padding='py-2' marginTop='mt-2' inputType={checked3 ? 'text' : 'password'}
                                                name='ConfirmPassword'
                                                value={password.ConfirmPassword}
                                                handleChange={handleChange}
                                            />
                                            <p className='text-red-500'>{errorMassage.errorConfirmPassword}</p>
                                        </div>
                                        <div onClick={showPassword3} className='absolute right-12'>
                                            {
                                                checked3 ?
                                                    <ImEye className='mt-10' />
                                                    :
                                                    <ImEyeBlocked className='mt-10' />
                                            }
                                        </div>

                                    </div>
                                </div>

                                <div className='text-end mt-16'>
                                    <Button1 onClickFunction={resetInput} buttonName='Reset' paddingX='px-5' paddingY='py-2' bgColor='bg-red-900' textColor='text-white' bgHover='hover:bg-white' hoverText='hover:text-red-900' />
                                    <Button1 buttonName='Submit' paddingX='px-5' paddingY='py-2' bgColor='bg-red-900' textColor='text-white' bgHover='hover:bg-white' hoverText='hover:text-red-900' />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Password
