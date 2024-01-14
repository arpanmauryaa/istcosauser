import React, { useRef, useState } from 'react'
import InputField from '../../globalcomponent/InputField'
import DropDownField from '../../globalcomponent/DropDownField'
import JoditEditor from 'jodit-react'
import Button1 from '../../globalcomponent/Button1'
import { postemployement } from '../../../utils/api/margeapi/MargeApi'

function PostEmployment() {
    // const editor = useRef(null)
    const [errorMassage, setErrorMassage] = useState({
        errorCompany: '',
        errorJobTitle: '',
        errorResponsibility: '',
        errorExperience: '',
        errorLocation: '',
        errorQualification: '',
        errorSalary: '',
        errorEmploymentType: '',
        errorIndustry: '',
        errorContactName: '',
        errorContactEmail: '',
        errorContactNumber: '',
    })


    const [postEmployeeData, setPostEmployeeData] = useState({
        Company: '',
        JobTitle: '',
        Responsibility: '',
        ExperienceYear: '',
        Location: '',
        Qualification: '',
        Salary: '',
        EmploymentType: '',
        Industry: '',
        ContactName: '',
        ContactEmail: '',
        ContactNumber: '',
    })

    const handleChange = (e) => {
        setPostEmployeeData((oldData => ({ ...oldData, [e.target.name]: e.target.value })))
        setErrorMassage((old => ({ ...old, [`error${e.target.name}`]: "" })))
    }

   

    const handleSubmit = (event) => {
        event.preventDefault()
        const error = ({
            errorCompany: '',
            errorJobTitle: '',
            errorResponsibility: '',
            errorExperienceYear: '',
            errorLocation: '',
            errorQualification: '',
            errorSalary: '',
            errorEmploymentType: '',
            errorIndustry: '',
            errorContactName: '',
            errorContactEmail: '',
            errorContactNumber: '',
        })
        let isValid = true
        const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        const phonePattern = /^[0-9]{10}$/;
        const pinPattern = /^[0-9]{6}$/;
        const d = new Date();

        if (!postEmployeeData.Company) {
            error.errorCompany = 'Enter Company Name';
            isValid = false;
        }
        if (!postEmployeeData.JobTitle) {
            error.errorJobTitle = 'Enter Job Title'
            isValid = false
        }
        if (!postEmployeeData.Responsibility) {
            error.errorResponsibility = 'Enter Reaponsibility'
            isValid = false
        }

        if (!postEmployeeData.ExperienceYear) {
            error.errorExperienceYear = 'Select Experience'
            isValid = false;
        }
        if (!postEmployeeData.Location) {
            error.errorLocation = 'Enter Location'
            isValid = false;
        }
        if (!postEmployeeData.ContactNumber) {
            error.errorContactNumber = 'Enter Phone Number'
            isValid = false;
        } else if (!phonePattern.test(postEmployeeData.ContactNumber)) {
            error.errorContactNumber = 'Enter  10 digit Phone Number '
            isValid = false;
        }
        if (!postEmployeeData.ContactEmail) {
            error.errorContactEmail = 'Email can not be empty'
            isValid = false;
        } else if (emailPattern.test(postEmployeeData.Email) === true) {
            error.errorContactEmail = 'Enter Valid email'
            isValid = false;
        }
        if (!postEmployeeData.Qualification) {
            error.errorQualification = 'Select Qualification'
            isValid = false;
        }
        if (!postEmployeeData.Salary) {
            error.errorSalary = 'Enter Salary'
            isValid = false;
        }

        if (!postEmployeeData.EmploymentType) {
            error.errorEmploymentType = 'Enter EmployeeType'
            isValid = false;
        }

        if (!postEmployeeData.ContactName) {
            error.errorContactName = "Enter Contact Name"
            isValid = false;
        }

        if (!postEmployeeData.Industry) {
            error.errorIndustry = "Select Industry Name"
            isValid = false;
        }




        if (!isValid) {
            setErrorMassage(error)
        }

        if (isValid) {
            postemployement(postEmployeeData).then(response=>{
                console.log('response')
            }).catch(error=>{
                console.log('error in post employement ap')
            })
            // console.log(postEmployeeData, 'postemplyee data')
        }
    }



    const resetForm = () => {
        setPostEmployeeData({
            Company: '',
            JobTitle: '',
            Responsibility: '',
            ExperienceYear: '',
            Location: '',
            Qualification: '',
            Salary: '',
            EmploymentType: '',
            Industry: '',
            ContactName: '',
            ContactEmail: '',
            ContactNumber: '',
        })
        console.log('hii')
    }


    

    return (
        <>
            <div className='bg-slate-50 h-full'>
                <div className='mx-8 pt-8'>
                    <div>
                        <div className=' bg-white rounded-md py-3 px-5 '>
                            <div className='text-4xl font-bold text-red-900'>
                                Post Employment
                            </div>
                        </div>
                    </div>


                    <div className=' bg-white px-5 pb-5 mt-5'>

                        <form onSubmit={handleSubmit}>
                            <div className='mt-5 pt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 '>
                                <div>
                                    <label className='block mb-2 text-sm font-bold text-gray-900 dark:text-white'>Company <span>*</span></label>
                                    <InputField placeholder='Enter Company'
                                        bgColor='bg-white' padding='py-2' inputType='text'
                                        name='Company'
                                        value={postEmployeeData.Company}
                                        handleChange={handleChange}
                                    />
                                    <p className='text-red-600'>{errorMassage.errorCompany}</p>
                                </div>
                                <div>
                                    <label className='block mb-2 text-sm font-bold text-gray-900 dark:text-white'>Job Title <span>*</span></label>

                                    <InputField placeholder='Enter Job Title' bgColor='bg-white' padding='py-2' inputType='text'
                                        name='JobTitle'
                                        value={postEmployeeData.JobTitle}
                                        handleChange={handleChange}
                                    />
                                    <p className='text-red-600'>{errorMassage.errorJobTitle}</p>
                                </div>
                                <div >
                                    <label className='block mb-2 text-sm font-bold text-gray-900 dark:text-white'>Roles & Responsibility <span>*</span></label>
                                    <InputField placeholder='Enter Responsibility'
                                        bgColor='bg-white' padding='py-2' inputType='text'
                                        name='Responsibility'
                                        value={postEmployeeData.Responsibility}
                                        handleChange={handleChange}
                                    />
                                    <p className='text-red-600'>{errorMassage.errorResponsibility}</p>
                                </div>
                                <div>
                                    <label className='block mb-2 text-sm font-bold text-gray-900 dark:text-white'>Experience (in years) <span>*</span></label>
                                    <InputField placeholder='Enter Experience'
                                        bgColor='bg-white' padding='py-2' inputType='text'
                                        name='ExperienceYear'
                                        value={postEmployeeData.ExperienceYear}
                                        handleChange={handleChange}
                                    />
                                    <p className='text-red-600'>{errorMassage.errorExperienceYear}</p>
                                </div>
                            </div>


                            <div className=' mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 '>
                                <div>
                                    <label className='block mb-2 text-sm font-bold text-gray-900 dark:text-white'>Location<span>*</span></label>
                                    <InputField placeholder='Enter Location'
                                        bgColor='bg-white' padding='py-2' inputType='text'
                                        name='Location'
                                        value={postEmployeeData.Location}
                                        handleChange={handleChange}
                                    />
                                    <p className='text-red-600'>{errorMassage.errorLocation}</p>

                                </div>
                                <div>
                                    <label className='block mb-2 text-sm font-bold text-gray-900 dark:text-white'>Qualification <span>*</span></label>
                                    <InputField placeholder='Enter Qualification'
                                        bgColor='bg-white' padding='py-2' inputType='text'
                                        name='Qualification'
                                        value={postEmployeeData.Qualification}
                                        handleChange={handleChange}
                                    />
                                    <p className='text-red-600'>{errorMassage.errorQualification}</p>

                                </div>
                                <div >
                                    <label className='block mb-2 text-sm font-bold text-gray-900 dark:text-white'>Salary (per month)<span>*</span></label>
                                    <InputField placeholder='Enter Salary'
                                        bgColor='bg-white' padding='py-2' inputType='text'
                                        name='Salary'
                                        value={postEmployeeData.Salary}
                                        handleChange={handleChange}
                                    />
                                    <p className='text-red-600'>{errorMassage.errorSalary}</p>
                                </div>
                                <div>
                                    <label className='block mb-2 text-sm font-bold text-gray-900 dark:text-white'>Employment type <span>*</span></label>
                                    <InputField placeholder='Enter Qualification'
                                        bgColor='bg-white' padding='py-2' inputType='text'
                                        name='EmploymentType'
                                        value={postEmployeeData.EmploymentType}
                                        handleChange={handleChange}
                                    />
                                    <p className='text-red-600'>{errorMassage.errorEmploymentType}</p>
                                </div>
                            </div>

                            <div className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 '>
                                <div>
                                    <label className='block mb-2 text-sm font-bold text-gray-900 dark:text-white'>Industry <span>*</span></label>
                                    <InputField placeholder='Enter Industry'
                                        bgColor='bg-white' padding='py-2' inputType='text'
                                        name='Industry'
                                        value={postEmployeeData.Industry}
                                        handleChange={handleChange}
                                    />
                                    <p className='text-red-600'>{errorMassage.errorIndustry}</p>
                                </div>
                                <div>
                                    <label className='block mb-2 text-sm font-bold text-gray-900 dark:text-white'>Contact Name<span>*</span></label>
                                    <InputField placeholder='Enter Contact Name'
                                        bgColor='bg-white' padding='py-2' inputType='text'
                                        name='ContactName'
                                        value={postEmployeeData.ContactName}
                                        handleChange={handleChange}
                                    />
                                    <p className='text-red-600'>{errorMassage.errorContactName}</p>
                                </div>
                                <div >
                                    <label className='block mb-2 text-sm font-bold text-gray-900 dark:text-white'>Contact Email<span>*</span></label>
                                    <InputField placeholder='Enter Contact Email'
                                        bgColor='bg-white' padding='py-2' inputType='text'
                                        name='ContactEmail'
                                        value={postEmployeeData.ContactEmail}
                                        handleChange={handleChange}
                                    />
                                    <p className='text-red-600'>{errorMassage.errorContactEmail}</p>

                                </div>
                                <div>
                                    <label className='block mb-2 text-sm font-bold text-gray-900 dark:text-white'>Contact Number<span>*</span></label>
                                    <InputField placeholder='Enter Contact Number'
                                        bgColor='bg-white' padding='py-2' inputType='text'
                                        name='ContactNumber'
                                        value={postEmployeeData.ContactNumber}
                                        handleChange={handleChange}
                                    />
                                    <p className='text-red-600'>{errorMassage.errorContactNumber}</p>

                                </div>
                            </div>

                            <div className='z-auto  mt-8'>
                                <label className='font-bold text-md'>Job description</label>
                                <JoditEditor className='mt-3' />
                            </div>


                            <div className='grid grid-cols-1 md:grid-cols-2 mt-8'>
                                <div>
                                    <Button1  onClickFunction={resetForm} buttonType='button' buttonName='Reset' paddingX='px-12' paddingY='py-2' bgColor='bg-red-900' textColor='text-white' bgHover='hover:bg-white' hoverText='hover:text-red-900' />
                                </div>

                                <div className='flex justify-end'>
                                    <Button1 buttonName='Save Draft' paddingX='px-5' paddingY='py-2' bgColor='bg-red-900' textColor='text-white' bgHover='hover:bg-white' hoverText='hover:text-red-900' />
                                    <Button1 buttonType='submit' buttonName='Publish' paddingX='px-8' paddingY='py-2' bgColor='bg-red-900' textColor='text-white' bgHover='hover:bg-white' hoverText='hover:text-red-900' />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default PostEmployment
