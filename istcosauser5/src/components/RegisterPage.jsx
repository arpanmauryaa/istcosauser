

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DropDownField from './globalcomponent/DropDownField'
import InputField from './globalcomponent/InputField'
import InputFieldDate from './globalcomponent/InputFieldDate'
import Button1 from './globalcomponent/Button1'
import { city, commonType, contry, getBatch, getRollNumberByBatch, getnamebyrollnumber } from '../utils/api/margeapi/MargeApi'
import NavBar from './navbar/NavBar'
import NavBar2 from './navbar/NavBar2'

function RegisterPage() {
    const [checked, setChecked] = useState(false);
    const [cityData, setCityData] = useState([])
    const [stateData, setStateData] = useState([])
    const [contryNameData, setContryName] = useState([])
    const [batchYears, setBatchYears] = useState([])
    const [batchRollNumber, setBatchRollNumber] = useState([])
    const [oldImage, setOldImage] = useState('')

    const [errorMassage, setErrorMassage] = useState({
        errorRollNumberID: '',
        errorBatchID: '',
        errorFullName: '',
        errorGender: '',
        errorDateOfBirth: '',
        errorPhoneNumber: '',
        errorEmail: '',
        errorPinCode: '',
        errorcountryId: '',
        errorStateID: '',
        errorCityID: '',
        errorPassword: '',
        errorConfirmPassword: '',
    })

    const [register, setRegister] = useState({
        BatchID: '',
        RollNumberID: 0,
        FullName: '',
        Gender: '',
        DateOfBirth: '',
        PhoneNumber: '',
        Email: '',
        countryId: null,
        countryCode: null,
        StateID: 0,
        CityID: 0,
        PinCode: '',
        Password: '',
        ConfirmPassword: '',
        UploadImage: ''
    })

    const handleChange = (e) => {
        setRegister((oldData => ({ ...oldData, [e.target.name]: e.target.value })))
        // setErrorMassage((old=>({...old,[`error${e.target.name}`:'']})))
        setErrorMassage((old => ({ ...old, [`error${e.target.name}`]: "" })))
    }

    // rollnumber api
    useEffect(() => {
        getRollNumberByBatch(register.BatchID).then(response => {
            const data = response
            setBatchRollNumber(data)
        })
    }, [register.BatchID])

    const handleSubmit = (event) => {
        event.preventDefault();
        validation();
        console.log(register, 'outerData')
    }

    // batch api
    useEffect(() => {
        getBatch().then(response => {
            const data = response.filter(item => { return item.Active == true })
            setBatchYears(data)
        })


        //  contry api
        contry().then(response => {
            setContryName(response)
            console.log(response, 'country')
        })
    }, [])


    // getName by roll number
    useEffect(() => {
        getnamebyrollnumber(register.RollNumberID).then(response => {
            setRegister({
                FullName: response.FullName,
                Gender: response.Gender
            })
            setOldImage(response.OldImage)
            console.log(response)
        }).catch(error => {
            console.log('error in get Name by roll number api')
        })
    }, [register.RollNumberID])



    // for contry Code
    useEffect(() => {
        const filterData = contryNameData.filter((item, index) => {
            return (
                item.countryId == register.countryId
            )
        })
        const code = filterData[0]?.countryCode
        register.countryCode = code;
        console.log(code)
    }, [register.countryId])


    // state api    
    useEffect(() => {
        commonType(register.countryId).then(response => {
            setStateData(response)
            // console.log(response,'hhhhhhhh')
        })
    }, [register.countryId])

    // city api
    useEffect(() => {
        city(register.StateID).then(response => {
            setCityData(response)
        })
    }, [register.StateID])


    const functionForReset = () => {
        setRegister({
            BatchID: '',
            RollNumberID: 0,
            FullName: '',
            Gender: '',
            DateOfBirth: '',
            PhoneNumber: '',
            Email: '',
            countryId: 0,
            countryCode: '',
            StateID: 0,
            CityID: 0,
            PinCode: '',
            Password: '',
            ConfirmPassword: '',
            UploadImage: ''
        })
    }

    const validation = () => {
        const error = ({
            errorRollNumberID: '',
            errorBatchID: '',
            errorFullName: '',
            errorGender: '',
            errorDateOfBirth: '',
            errorPhoneNumber: '',
            errorEmail: '',
            errorPinCode: '',
            errorcountryId: '',
            errorStateID: '',
            errorCityID: '',
            errorPassword: '',
            errorConfirmPassword: '',
        })

        let isValid = true

        const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        const phonePattern = /^[0-9]{10}$/;
        const pinPattern = /^[0-9]{6}$/;
        const d = new Date();

        if (!register.BatchID) {
            error.errorBatchID = 'Select Batch Year';
            isValid = false;
        }
        if (!register.RollNumberID) {
            error.errorRollNumberID = 'Select Roll Number'
            isValid = false
        }
        if (!register.FullName) {
            error.errorFullName = 'Name can not be empty'
            isValid = false
        }
        else if (register.FullName.length >= 20) {
            error.errorFullName = 'Name should be less then 20 charector'
            isValid = false;
        }
        if (!register.Gender) {
            error.errorGender = 'Select Gender'
            isValid = false;
        }
        if (!register.DateOfBirth) {
            error.errorDateOfBirth = 'select Date of birth'
            isValid = false;
        }
        if (!register.PhoneNumber) {
            error.errorPhoneNumber = 'Enter Phone Number'
            isValid = false;
        } else if (!phonePattern.test(register.PhoneNumber)) {
            error.errorPhoneNumber = 'Enter  10 digit Phone Number '
            isValid = false;
        }
        if (!register.Email) {
            error.errorEmail = 'Email can not be empty'
            isValid = false;
        } else if (!emailPattern.test(register.Email) === true) {
            error.errorEmail = 'Enter Valid email'
            isValid = false;
        }
        if (!register.countryId) {
            error.errorcountryId = 'Select Country Name'
            isValid = false;
        }
        if (!register.StateID) {
            error.errorStateID = 'select state Name'
            isValid = false;
        }
        if (!register.CityID) {
            error.errorCityID = "select city name"
            isValid = false;
        }
        if (!register.PinCode) {
            error.errorPinCode = 'Enter Pin Code'
            isValid = false;
        } else if (!pinPattern.test(register.PinCode)) {
            error.errorPinCode = 'Enter only 6th digit number'
            isValid = false;
        }
        if (!register.Password) {
            error.errorPassword = 'Enter Password';
            isValid = false;
        }
        if (register.ConfirmPassword.length !== register.Password.length
            || register.ConfirmPassword !== register.Password) {
            error.errorConfirmPassword = 'Password did not match'
            isValid = false;
        }


        if (!isValid) {
            setErrorMassage(error)
        }

        if (isValid) {
            console.log(register, 'registerData')
        }

    }

    const showPassword = () => {
        setChecked((old => !old))
        // console.log('hii')
    }


    return (
        <>



            <div className=''>
                <div className='text-center font-bold text-4xl'>
                    <p className='text-red-950'>Alumni <span className='text-black'> Registration</span></p>
                </div>

                <div className='px-4 pt-8 pb-3 font-bold'>
                    <hr />
                    <hr />
                </div>

                <form onSubmit={handleSubmit} >
                    <div className='mt-8 grid grid-cols-1 md:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 gap-6 justify-center  lg:px-40 md:px-14 sm:px-14 px-14  w-full'>

                        <div>
                            <label className="font-bold block mb-2 text-sm  text-gray-900 dark:text-white">Batch No..<span>*</span></label>
                            <DropDownField option1='89632' option2='55555'
                                select='---select---'
                                show='BatchID'
                                showvalue='BatchID'
                                batchData={batchYears}
                                name='BatchID'
                                value={register.BatchID}
                                handleChange={handleChange}
                            />
                            <p className='text-red-500'>{errorMassage.errorBatchID}</p>
                        </div>

                        <div>
                            <label className="font-bold block mb-2 text-sm  text-gray-900 dark:text-white">Roll No.<span>*</span></label>
                            <DropDownField option1='89632' option2='55555' otherSelect='Choose'
                                select='---select---'
                                show='RollNumberID'
                                showvalue='RollNumberID'
                                batchData={batchRollNumber}
                                name='RollNumberID'
                                value={register.RollNumberID}
                                handleChange={handleChange}
                            />
                            <p className='text-red-500'>{errorMassage.errorRollNumberID}</p>
                        </div>

                        <div>
                            <label className='block mb-2 text-sm font-bold text-gray-900 dark:text-white'>Full Name <span>*</span></label>
                            <InputField bgColor='bg-white' padding='py-2' marginTop='' star='*' placeholder='Enter Name' inputType='text'
                                name='FullName'
                                value={register.FullName}
                                handleChange={handleChange}
                            />
                            <p className='text-red-500'>{errorMassage.errorFullName}</p>

                        </div>
                    </div>

                    <div className='mt-8 gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-1 xs:grid-cols-1 justify-center  lg:px-40 md:px-14 sm:px-14 px-14  w-full'>

                        <div >
                            <label class="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Gander<span>*</span></label>
                            <div className='flex flex-wrap mt-4'>
                                <div className="flex mb-4">
                                    <input
                                        id="default-radio-1"
                                        type="radio"
                                        value='Male'
                                        checked={register.Gender == 'Male'?true : null}
                                        name="Gender"
                                        onChange={handleChange}
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label className="ms-2 text-sm font-bold text-gray-900 dark:text-gray-300">Male</label>
                                </div>
                                <div className="flex ms-9 ">
                                    <input
                                        id="default-radio-2"
                                        type="radio"
                                        value="Female"
                                        checked={register.Gender == 'Female'?true : null}
                                        name="Gender"
                                        onChange={handleChange}

                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label className="ms-2 text-sm font-bold text-gray-900 dark:text-gray-300">Female</label>
                                </div>

                            </div>
                            <p className='text-red-500'>{errorMassage.errorGender}</p>
                        </div>

                        <div>
                            <label className='block mb-2 text-sm font-bold text-gray-900 dark:text-white'> Date of birth<span>*</span></label>
                            <InputField bgColor='bg-white' inputType='date' star='*' padding='py-2.5 pt-1'
                                name='DateOfBirth'
                                value={register.DateOfBirth}
                                handleChange={handleChange}
                            />
                            <p className='text-red-500'>{errorMassage.errorDateOfBirth}</p>
                        </div>

                        <div>
                            <label className='block mb-2 text-sm font-bold text-gray-900 dark:text-white'> Phone Number<span>*</span></label>

                            <InputField bgColor='bg-white' inputType='text' star='*' placeholder='Enter Phone Number' padding='py-2'
                                name='PhoneNumber'
                                value={register.PhoneNumber}
                                handleChange={handleChange}
                            />
                            <p className='text-red-500'>{errorMassage.errorPhoneNumber}</p>
                        </div>

                        <div>
                            <label className='block mb-2 text-sm font-bold text-gray-900 dark:text-white'>Email Address<span>*</span></label>

                            <InputField bgColor='bg-white' inputType='text' star='*' placeholder='Enter Email Address' padding='py-2'
                                name='Email'
                                value={register.Email}
                                handleChange={handleChange}
                            />
                            <p className='text-red-500'>{errorMassage.errorEmail}</p>
                        </div>

                    </div>




                    <div className='mt-8 gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-1 xs:grid-cols-1 justify-center  lg:px-40 md:px-14 sm:px-14 px-14  w-full'>

                        <div>
                            <label className="font-bold block  text-sm  text-gray-900 dark:text-white">Country<span>*</span></label>
                            <div className='grid grid-cols-3 mt-1'>
                                <div>
                                    <InputField padding='py-2' bgColor='bg-slate-200	'
                                        value={register.countryCode}

                                    />
                                </div>
                                {/* countryId */}
                                <div className='col-span-2 mt-1'>
                                    <DropDownField otherSelect='Choose' select='---select---'
                                        batchData={contryNameData}
                                        show='countryName'
                                        showvalue='countryId'
                                        name='countryId'
                                        value={register.countryId}
                                        handleChange={handleChange}
                                    />
                                    <p className='text-red-500'>{errorMassage.errorcountryId}</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className='block mb-2 text-sm font-bold text-gray-900 dark:text-white'>State <span>*</span></label>
                            <DropDownField select='---select---'
                                batchData={stateData}
                                name='StateID'
                                show='StateName'
                                showvalue='StateId'
                                value={register.StateID}
                                handleChange={handleChange}
                            />
                            <p className='text-red-500'>{errorMassage.errorStateID}</p>
                        </div>
                        <div>
                            <label className='block mb-2 text-sm font-bold text-gray-900 dark:text-white'>City <span>*</span></label>
                            <DropDownField option1='Varanasi' option2='Mohali' select='---select---'
                                show='CityName'
                                showvalue='CityId'
                                batchData={cityData}
                                name='CityID'
                                value={register.CityID}
                                handleChange={handleChange}
                            />
                            <p className='text-red-500'>{errorMassage.errorCityID}</p>
                        </div>

                        <div>
                            <label className='block mb-1 text-sm font-bold text-gray-900 dark:text-white'> Pin Code<span>*</span></label>

                            <InputField bgColor='bg-white' inputType='text' placeholder='Enter Pin Code' padding='py-2'
                                name='PinCode'
                                value={register.PinCode}
                                handleChange={handleChange}
                            />
                            <p className='text-red-500'>{errorMassage.errorPinCode}</p>
                        </div>
                    </div>



                    <div className='mt-6 gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-1 xs:grid-cols-1 justify-center  lg:px-40 md:px-14 sm:px-14 px-14  w-full'>
                        <div>
                            <label className='block mb-2 text-sm font-bold text-gray-900 dark:text-white'> Password<span>*</span></label>

                            <InputField bgColor='bg-white' placeholder='Enter Password' padding='py-2 pt-2'
                                inputType={
                                    checked ? 'text' : 'password'
                                }

                                id='pass'
                                name='Password'
                                value={register.Password}
                                handleChange={handleChange}
                            />
                            <p className='text-red-500'>{errorMassage.errorPassword}</p>
                        </div>

                        <div>
                            <label className='block mb-2 text-sm font-bold text-gray-900 dark:text-white'> Confirm Password<span>*</span></label>
                            <InputField bgColor='bg-white' placeholder='Enter Confirm Password' padding='py-2'
                                inputType={
                                    checked ? 'text' : 'password'
                                }
                                name='ConfirmPassword'
                                value={register.ConfirmPassword}
                                handleChange={handleChange}
                            />
                            <p className='text-red-500'>{errorMassage.errorConfirmPassword}</p>
                        </div>

                        <div className='lg:mt-7 hidden sm:hidden lg:block'>
                            <input id="check" onClick={showPassword} type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600" />

                            <label id="check" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Show Password</label>
                        </div>
                    </div>


                    <div className='mt-6 gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-1 xs:grid-cols-1 justify-center  lg:px-40 md:px-14 sm:px-14 px-14  w-full'>
                        <div>
                            <label className='block mb-1 text-sm font-bold text-gray-900 dark:text-white'> Photo Upload<span>*</span></label>
                            <InputField bgColor='bg-white' inputType='file' padding='py-1.5'
                                name='UploadImage'
                                value={register.UploadImage}
                                handleChange={handleChange}
                            />
                        </div>


                        <div className='md:mt-8 lg:hidden sm:block'>
                            <input onClick={showPassword} type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600" />
                            <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Show Password</label>
                        </div>
                    </div>

                    {
                        oldImage ?
                            <div className=' mt-5   lg:px-40 md:px-14 sm:px-14 px-14 '>
                                <img src={oldImage} alt="" className='w-36' />
                            </div> : null
                    }


                    <div className='w-full text-end lg:px-36 md:px-11 px-11 mt-6'>
                        <Button1 buttonName='Reset' onClickFunction={functionForReset} buttonType='button' textColor='text-red-900'
                            paddingX='py-2' paddingY='px-5' bgHover='hover:bg-red-900' hoverText='hover:text-white' />
                        <Button1 buttonName='Submit' buttonType='submit' bgColor='bg-red-900' textColor='text-white'
                            paddingX='py-2' paddingY='px-5' bgHover='hover:bg-white' hoverText='hover:text-black' />
                    </div>


                    <div className='text-center mt-11'>
                        Have already an account?
                        <a href="#" className=" ms-2 font-bold text-red-900  hover:underline dark:text-primary-500">Login Here</a>
                    </div>
                </form>
            </div>
        </>
    )
}

export default RegisterPage