import React from 'react'
import { useLocation } from 'react-router-dom'

function SEMoreDetails() {
    const location = useLocation()
    const details = location.state
    console.log(details,'details');



    return (
        <>
            <div className='bg-slate-50 h-full'>
                <div className='mx-8 pt-8'>
                    <div>
                        <div className=' bg-white rounded-lg'>
                            <p className='p-3 text-red-900 font-bold text-4xl '>Employment Details</p>
                        </div>
                        <div className='mt-4 p-5 bg-white rounded-lg text-lg '>
                            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 border-b-2 pb-10'>
                                <div>
                                    <p className='font-bold'>Company : <span className='font-normal'>{details[0].CompanyName}</span></p>
                                </div>

                                <div className='pt-5 md:pt-0'>
                                    <p className='font-bold'>Job Title : <span className='font-normal'>{details[0].JobTitle}</span></p>
                                </div>

                                <div className='md:mt-8 mt-5 lg:mt-0 '>
                                    <p className='font-bold'>Industry : <span className='font-normal'>Xbdh</span></p>
                                </div>




                                <div className='lg:py-8 md:py-8 py-5'>
                                    <p className='font-bold'>Job Location : <span className='font-normal'>{details[0].Location}</span></p>
                                </div>

                                <div className='lg:py-8 '>
                                    <p className='font-bold'>Job Experience : <span className='font-normal'>{details[0].ExperienceYear}</span></p>
                                </div>

                                <div className='lg:pt-8 pt-5 md:pt-0'>
                                    <p className='font-bold'>Qualification : <span className='font-normal'>{details[0].Qulification}</span></p>
                                </div>





                                <div className='md:pt-8 pt-5 lg:pt-0'>
                                    <p className='font-bold'>Employment Type  : <span className='font-normal'>{details[0].EmploymentType}</span></p>
                                </div>

                                <div className='lg:pt-0 pt-5  md:pt-8'>
                                    <p className='font-bold'>Salary(Month) : <span className='font-normal'>{details[0].Salary}</span></p>
                                </div>


                            </div>

                            <div className='py-5 text-lg'>
                                <p className='font-bold'>Posted Date  : <span className='font-normal'>21/08/2023</span></p>
                            </div>
                        </div>


                        <div className='mt-4 px-5 lg:py-10 bg-white rounded-lg text-lg'>

                            <div className='grid lg:grid-cols-3 md:grid-cols-2 py-8'>
                                <div>
                                    <p className='font-bold'>Contact Name : <span className='font-normal'>{details[0].CompanyName}</span></p>
                                </div>

                                <div className='pt-5 lg:pt-0 md:pt-0'>
                                    <p className='font-bold'>Contact Number : <span className='font-normal'>{details[0].CantactNumber}</span></p>
                                </div>

                                <div className='lg:pt-0 md:pt-8 pt-5'>
                                    <p className='font-bold'>Contact Email : <span className='font-normal'>{details[0].ContactEmail}</span></p>
                                </div>
                            </div>

                        </div>



                        <div className='mt-4 px-5 py-6 bg-white rounded-lg'>
                            <div className=' py-8 text-lg'>
                                <div>
                                    <p className='font-bold'>Responsibility : <span className='font-normal'>{details[0].Location}</span></p>
                                </div>

                            </div>
                        </div>



                        <div className='my-4 px-5 py-5 bg-white rounded-lg'>
                            <div className=' py-8 text-lg'>
                                <div>
                                    <p className='font-bold'>Description  :</p>
                                    <p className='ps-8 mt-2'><span>1. </span>Job descriptions should be thorough, clear, and concise and include:
                                     A brief introduction to the company and its mission. </p>
                                </div>

                            </div>
                        </div>




                    </div>
                </div>
            </div>

        </>
    )
}

export default SEMoreDetails
