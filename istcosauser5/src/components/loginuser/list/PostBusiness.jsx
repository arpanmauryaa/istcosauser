import React, { useState } from 'react'
import InputField from '../../globalcomponent/InputField'
import DropDownField from '../../globalcomponent/DropDownField'
import JoditEditor from 'jodit-react'
import Button1 from '../../globalcomponent/Button1'


function PostBusiness() {
    const [errorMasage, setErrorMassage] = useState({
        errorTitle: '',
        errorCompany: '',
        // errorIndustry: '',
        errorContactEmail: '',
        errorContactName: '',
        errorContactNumber: '',
        errorAttachment: '',
    })
    const [postBusinessData, setPostBusinessData] = useState({
        Title: '',
        Company: '',
        Industry: '',
        ContactEmail: '',
        ContactName: '',
        ContactNumber: '',
        Attachment: '',
    })

    const handleChange = (e) => {
        setPostBusinessData((oldData => ({ ...oldData, [e.target.name]: e.target.value })))
        setErrorMassage((old => ({ ...old, [`error${e.target.name}`]: "" })))

    }

    const handleSubmit = (event) => {
        event.preventDefault()
        let isValid = true
        const phonePattern = /^[0-9]{10}$/;
        const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        const error = ({
            errorTitle: '',
            errorCompany: '',
            // errorIndustry: '',
            errorContactEmail: '',
            errorContactName: '',
            errorContactNumber: '',
            errorAttachment: '',
        })

        if (!postBusinessData.Title) {
            error.errorTitle = 'Enter Title'
            isValid = false
        }

        if (!postBusinessData.Company) {
            error.errorCompany = 'Enter Company'
            isValid = false
        }

        // if (!postBusinessData.Industry) {
        //     error.errorIndustry = 'Enter Title'
        //     isValid = false
        // }

        if (!postBusinessData.ContactEmail) {
            error.errorContactEmail = 'Enter Email'
            isValid = false
        }

        if (!postBusinessData.ContactName) {
            error.errorContactName = 'Enter Contact Name'
            isValid = false
        }

        if (!postBusinessData.ContactNumber) {
            error.errorContactNumber = 'Enter Phone Number'
            isValid = false;
        } else if (!phonePattern.test(postBusinessData.ContactNumber)) {
            error.errorContactNumber = 'Enter  10 digit Phone Number '
            isValid = false;
        }

        if (!postBusinessData.Attachment) {
            error.errorAttachment = 'Attached File'
            isValid = false
        }

        if (!isValid) {
            setErrorMassage(error)
        }
        if (isValid) {
            console.log(postBusinessData)
        }

    }


    const resetForm = () => {
        setPostBusinessData({
            Title: '',
            Company: '',
            Industry: '',
            ContactEmail: '',
            ContactName: '',
            ContactNumber: '',
            Attachment: '',
        })
    }

    return (
        <>

            <div className='bg-slate-50 h-full'>
                <div className='mx-8 pt-8'>
                    <div>
                        <div className=' bg-white rounded-md py-3 px-5 '>
                            <div className='text-4xl font-bold text-red-900'>
                                Post Business
                            </div>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className='bg-white px-5 pb-5 mt-5'>
                                <div className=' grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
                                    <div className='md:mt-4 mt-4'>
                                        <label className='block mb-2 text-sm font-bold text-gray-900 dark:text-white'>Title <span>*</span></label>
                                        <InputField placeholder='Enter Title Name'
                                            bgColor='bg-white' padding='py-2' inputType='text'
                                            name='Title'
                                            value={postBusinessData.Title}
                                            handleChange={handleChange}
                                        />
                                        <p className='text-red-600'>{errorMasage.errorTitle}</p>
                                    </div>

                                    <div className='md:mt-4 mt-1'>
                                        <label className='block mb-2 text-sm font-bold text-gray-900 dark:text-white'>Company <span>*</span></label>
                                        <InputField placeholder='Enter Company Name'
                                            bgColor='bg-white' padding='py-2' inputType='text'
                                            name='Company'
                                            value={postBusinessData.Company}
                                            handleChange={handleChange}
                                        />
                                        <p className='text-red-600'>{errorMasage.errorCompany}</p>
                                    </div>

                                    <div className='md:mt-4 mt-1'>
                                        <label className='block mb-2 text-sm font-bold text-gray-900 dark:text-white'>Industry <span>*</span></label>
                                        <DropDownField select='---Select---' />

                                    </div>

                                    <div className='md:mt-4 mt-1'>
                                        <label className='block mb-2 text-sm font-bold text-gray-900 dark:text-white'>Contact Email <span>*</span></label>
                                        <InputField placeholder='Enter Contact Email'
                                            bgColor='bg-white' padding='py-2' inputType='text'
                                            name='ContactEmail'
                                            value={postBusinessData.ContactEmail}
                                            handleChange={handleChange}
                                        />
                                        <p className='text-red-600'>{errorMasage.errorContactEmail}</p>
                                    </div>

                                    <div className='md:mt-4 mt-1'>
                                        <label className='block mb-2 text-sm font-bold text-gray-900 dark:text-white'>Contact Name <span>*</span></label>
                                        <InputField placeholder='Enter Contact Name'
                                            bgColor='bg-white' padding='py-2' inputType='text'
                                            name='ContactName'
                                            value={postBusinessData.ContactName}
                                            handleChange={handleChange}
                                        />
                                        <p className='text-red-600'>{errorMasage.errorContactName}</p>
                                    </div>

                                    <div className='md:mt-4 mt-1'>
                                        <label className='block mb-2 text-sm font-bold text-gray-900 dark:text-white'>Contact Number <span>*</span></label>

                                        <InputField placeholder='Enter Contact Number'
                                            bgColor='bg-white' padding='py-2' inputType='text'
                                            name='ContactNumber'
                                            value={postBusinessData.ContactNumber}
                                            handleChange={handleChange}
                                        />
                                        <p className='text-red-600'>{errorMasage.errorContactNumber}</p>
                                    </div>

                                    <div className='md:mt-4 mt-1'>
                                        <label className='block mb-2 text-sm font-bold text-gray-900 dark:text-white'>Attachment <span>*</span></label>
                                        <InputField placeholder='Attachment'
                                            bgColor='bg-white' padding='py-1.5' inputType='file'
                                            name='Attachment'
                                            value={postBusinessData.Attachment}
                                            handleChange={handleChange}
                                        />
                                        <p className='text-red-600'>{errorMasage.errorAttachment}</p>
                                    </div>

                                </div>

                                <div className='mt-8'>
                                    <label className='font-bold text-md'>Job description</label>
                                    <JoditEditor className='mt-3' />
                                </div>


                                <div className='grid grid-cols-1 md:grid-cols-2 mt-8'>
                                    <div>
                                        <Button1 onClickFunction={resetForm} buttonType='button' buttonName='Reset' paddingX='px-12' paddingY='py-2' bgColor='bg-red-900' textColor='text-white' bgHover='hover:bg-white' hoverText='hover:text-red-900' />
                                    </div>

                                    <div className='flex justify-end'>
                                        <Button1 buttonName='Save Draft' paddingX='px-5' paddingY='py-2' bgColor='bg-red-900' textColor='text-white' bgHover='hover:bg-white' hoverText='hover:text-red-900' />
                                        <Button1 buttonType='submit' buttonName='Publish' paddingX='px-8' paddingY='py-2' bgColor='bg-red-900' textColor='text-white' bgHover='hover:bg-white' hoverText='hover:text-red-900' />
                                    </div>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default PostBusiness
