import React, { useState } from 'react'
import InputField from '../../globalcomponent/InputField'
import Button1 from '../../globalcomponent/Button1'

function AddCompanyDetails() {

    const [errorMassage, setErrorMassage] = useState({
        errorProfession: '',
        errorDesignation: '',
        errorCompanyName: '',
        errorFromDate: '',
        errorToDate: '',
    })

    const [addData, setAddData] = useState({
        Profession: '',
        Designation: '',
        CompanyName: '',
        FromDate: '',
        ToDate: '',
        Responsibility: '',
    })

    const handleChange = (e) => {
        setAddData((oldData => ({ ...oldData, [e.target.name]: e.target.value })))
        setErrorMassage((old => ({ ...old, [`error${e.target.name}`]: "" })))
    }



    const addDataFunction = (event) => {
        event.preventDefault()
        let isValid = true

        const error = ({
            errorProfession: '',
            errorDesignation: '',
            errorCompanyName: '',
            errorFromDate: '',
            errorToDate: '',
        })

        if (!addData.Profession) {
            error.errorProfession = 'Enter Profession'
            isValid = false
        }

        if (!addData.Designation) {
            error.errorDesignation = 'Enter Profession'
            isValid = false
        }

        if (!addData.CompanyName) {
            error.errorCompanyName = 'Enter Profession'
            isValid = false
        }

        if (!addData.FromDate) {
            error.errorFromDate = 'Enter Profession'
            isValid = false
        }

        if (!addData.ToDate) {
            error.errorToDate = 'Enter Profession'
            isValid = false
        }

        if (!isValid) {
            setErrorMassage(error)
        }

        if (isValid) {
            console.log(addData)
        }


    }


    const resetData = () => {
        setAddData({
            Profession: '',
            Designation: '',
            CompanyName: '',
            FromDate: '',
            ToDate: '',
            Responsibility: '',
        })
    }

    return (
        <>
            <div className='bg-slate-50 h-full'>
                <div className='pt-5 mx-8'>
                    <p className='font-bold text-4xl text-red-900 bg-white px-5 py-2 rounded-lg'>Add Company Details</p>
                </div>

                <div className='mt-8 mx-8 mb-5'>
                    <div className='bg-white px-5'>

                        <form onSubmit={addDataFunction} className='py-5'>

                            <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>
                                <div>
                                    <label className='block mb-1 text-md font-bold text-gray-900 dark:text-white'>Profession : <span>*</span></label>
                                    <InputField inputType='text' placeholder='Profession' padding='py-2'
                                        name='Profession'
                                        value={addData.Profession}
                                        handleChange={handleChange}
                                    />
                                    <p className='text-red-600'>{errorMassage.errorProfession}</p>
                                </div>

                                <div>
                                    <label className='block mb-1 text-md font-bold text-gray-900 dark:text-white'>Designation : <span>*</span></label>
                                    <InputField inputType='text' placeholder='Enter Designation' padding='py-2'
                                        name='Designation'
                                        value={addData.Designation}
                                        handleChange={handleChange}
                                    />
                                    <p className='text-red-600'>{errorMassage.errorDesignation}</p>
                                </div>
                            </div>


                            <div className='grid grid-cols-1 gap-4'>
                                <div className='mt-8'>
                                    <label className='block mb-1 text-md font-bold text-gray-900 dark:text-white'>Company Name : <span>*</span></label>
                                    <InputField inputType='text' placeholder='Select Company ' padding='py-2'
                                        name='CompanyName'
                                        value={addData.CompanyName}
                                        handleChange={handleChange}
                                    />
                                    <p className='text-red-600'>{errorMassage.errorCompanyName}</p>
                                </div>
                            </div>


                            <div className='grid md:grid-cols-2 grid-cols-1 gap-4 mt-8'>
                                <div>
                                    <label className='block mb-1 text-md font-bold text-gray-900 dark:text-white'>From Date : <span>*</span></label>
                                    <InputField inputType='date' padding='py-2'
                                        name='FromDate'
                                        value={addData.FromDate}
                                        handleChange={handleChange}
                                    />
                                    <p className='text-red-600'>{errorMassage.errorFromDate}</p>
                                </div>

                                <div>
                                    <label className='block mb-1 text-md font-bold text-gray-900 dark:text-white'>To Date : <span>*</span></label>
                                    <InputField inputType='date' padding='py-2'
                                        name='ToDate'
                                        value={addData.ToDate}
                                        handleChange={handleChange}
                                    />
                                    <p className='text-red-600'>{errorMassage.errorToDate}</p>
                                </div>
                            </div>

                            <div className='grid grid-cols-1 gap-4'>
                                <div className='mt-8'>
                                    <label className='block mb-1 text-md font-bold text-gray-900 dark:text-white'>Responsibility : <span>*</span></label>
                                    <textarea name="" id="" rows="4" placeholder='Enter Responsibility' className='border pt-2 border-gray-400 text-gray-700 px-2 mt-2
                                         w-full rounded leading-tight focus:outline-none focus:border-blue-500'></textarea>                                </div>
                            </div>

                            <div className='text-end flex md:justify-end  justify-center  mt-5'>
                                <div className='md:me-4'>
                                    <Button1 onClickFunction={resetData} buttonType='button' buttonName='Reset' paddingX='px-4' paddingY='py-2' bgColor='bg-red-900' textColor='text-white' bgHover='hover:bg-white' hoverText='hover:text-red-900' />
                                </div>
                                <Button1 buttonType='submit' buttonName='Add' paddingX='px-10' paddingY='py-2' bgColor='bg-red-900' textColor='text-white' bgHover='hover:bg-white' hoverText='hover:text-red-900' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddCompanyDetails