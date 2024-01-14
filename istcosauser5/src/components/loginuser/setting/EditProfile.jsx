import React, { useState } from 'react'
import { MdOutlineArrowDropDown } from 'react-icons/md'
import InputField from '../../globalcomponent/InputField'
import DropDownField from '../../globalcomponent/DropDownField'
import { TiArrowSortedUp } from "react-icons/ti";
import { TiArrowSortedDown } from "react-icons/ti";
import { FaPlusCircle } from "react-icons/fa";
import Button1 from '../../globalcomponent/Button1';
import { useNavigate } from 'react-router-dom';




function EditProfile() {
    const navigate = useNavigate()
    const [isMarried, setIsMarried] = useState(false)
    const [isOpenPersonal, setIsOpenPersonal] = useState(true)
    const [isOpenProfessional, setIsOpenProfessional] = useState(false)

    const [profileData, setProfileData] = useState({
        FullName: 'N.C Hira',
        BatchName: '1963',
        RollNumber: '6301',
        Gannder: '',
        DOB: 'Jan-01-1943',
        Email: 'navinhira@yahoo.co.in',
        MobileNumber: '9815616414',
        Whatsapp: '9815616414',
        Country: '91',
        State: '',
        City: '',
        PinCode: '133301',
        NickName: '',
        RoomMate: '',
    })

    const handleChange = (e) => {
        setProfileData((oldData => ({ ...oldData, [e.target.name]: e.target.value })))
    }

    const openProfileInfo = () => {
        setIsOpenPersonal((old => !old))
        setIsOpenProfessional(false)
    }

    const openProfessional = () => {
        setIsOpenProfessional((old => !old))
        setIsOpenPersonal(false)
    }

    const updateData =(event)=>{
        event.preventDefault
        console.log(profileData,'profileData')
    }

    const addcompanydetailsavigate =()=>{
        navigate('/home/setting/editprofile/addcompanydetails')
    }


    return (
        <>
            <div className='bg-slate-50 h-full pb-5 '>
                <div className='pt-8 mx-5'>
                    <div className='bg-white px-3 py-2'>
                        <p className='text-red-900 font-bold text-3xl'>Edit Profile</p>
                    </div>
                </div>


                <div onClick={openProfileInfo} className='mx-5 bg-red-900 mt-6 cursor-pointer'>
                    <div className='flex justify-between px-3 py-2.5'>
                        <p className='mt-1 text-white text-lg font-bold'>Personal Info</p>
                        {
                            isOpenPersonal ?
                                <TiArrowSortedDown className='text-2xl text-white' /> :
                                <TiArrowSortedUp className='text-2xl text-white' />

                        }
                    </div>
                </div>


                {

                    isOpenPersonal ?

                        <div className='mx-5 bg-white px-5'>
                            <form onSubmit={updateData}>
                                <div className='pt-8 grid   grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                                    <div>
                                        <label className='block mb-1 text-sm font-bold text-gray-900 dark:text-white'> Full Name</label>
                                        <InputField placeholder='Enter Full Name'
                                            bgColor='bg-white' padding='py-2' inputType='text'
                                            name='FullName'
                                            value={profileData.FullName}
                                            handleChange={handleChange}
                                        />
                                    </div>

                                    <div>
                                        <label className='block mb-1 text-sm font-bold text-gray-900 dark:text-white'>Batch Name</label>
                                        <InputField placeholder='Enter Batch Name'
                                            bgColor='bg-gray-200' padding='py-2' inputType='text'
                                            name='BatchName'
                                            value={profileData.BatchName}
                                            handleChange={handleChange}
                                            disabled='disabled'
                                        />
                                    </div>

                                    <div>
                                        <label className='block mb-1 text-sm font-bold text-gray-900 dark:text-white'>Roll Number</label>
                                        <InputField placeholder='Enter Roll Number'
                                            bgColor='bg-gray-200' padding='py-2' inputType='text'
                                            name='RollNumber'
                                            value={profileData.RollNumber}
                                            handleChange={handleChange}
                                            disabled='disabled'
                                        />
                                    </div>

                                    <div>
                                        <label className='font-bold'>Gander </label>
                                        <div className='flex flex-wrap mt-3'>
                                            <div className="flex mb-4">
                                                <input
                                                    id="default-radio-1"
                                                    type="radio"
                                                    value='Male'
                                                    name="Gender"
                                                    onChange={handleChange}

                                                    className=" w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                                                />
                                                <label className="ms-2 text-sm font-bold text-gray-900 dark:text-gray-300">Male</label>
                                            </div>
                                            <div className="flex ms-9 ">
                                                <input
                                                    id="default-radio-2"
                                                    type="radio"
                                                    value="Female"
                                                    name="Gender"
                                                    onChange={handleChange}

                                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                                                />
                                                <label className="ms-2 text-sm font-bold text-gray-900 dark:text-gray-300">Female</label>
                                            </div>

                                        </div>
                                    </div>
                                </div>


                                <div className='mt-8 grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                                    <div>
                                        <label className='block mb-1 text-sm font-bold text-gray-900 dark:text-white'>Date Of Birth</label>
                                        <InputField
                                            bgColor='bg-white' padding='py-2' inputType='date'
                                            name='DOB'
                                            value={profileData.DOB}
                                            handleChange={handleChange}
                                        />
                                    </div>

                                    <div>
                                        <label className='block mb-1 text-sm font-bold text-gray-900 dark:text-white'>Email</label>
                                        <InputField placeholder='arpanxyz@gmail.com'
                                            bgColor='bg-white' padding='py-2' inputType='text'
                                            name='Email'
                                            value={profileData.Email}
                                            handleChange={handleChange}
                                        />
                                    </div>

                                    <div>
                                        <label className='block mb-1 text-sm font-bold text-gray-900 dark:text-white'>Mobile Number</label>
                                        <InputField placeholder='Enter Mobile Number '
                                            bgColor='bg-white' padding='py-2' inputType='text'
                                            name='MobileNumber'
                                            value={profileData.MobileNumber}
                                            handleChange={handleChange}
                                        />
                                    </div>

                                    <div>
                                        <label className='block mb-1 text-sm font-bold text-gray-900 dark:text-white'>Whatsapp</label>
                                        <InputField placeholder=' Whatsapp Number'
                                            bgColor='bg-white' padding='py-2' inputType='text'
                                            name='Whatsapp'
                                            value={profileData.Whatsapp}
                                            handleChange={handleChange}
                                        />
                                    </div>
                                </div>


                                <div className='grid mt-8  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                                    <div>
                                        <label className='block mb-1 text-sm font-bold text-gray-900 dark:text-white'>Country</label>
                                        <div className='grid grid-cols-3'>
                                            <div>
                                                <InputField padding='py-2' bgColor='bg-slate-200'
                                                    disabled='disabled'
                                                    name='Country'
                                                    value={profileData.Country}
                                                    handleChange={handleChange}
                                                />
                                            </div>
                                            <div className='col-span-2'>
                                                <DropDownField otherSelect='Choose' select='India'
                                                // batchData={contryNameData}
                                                // show='countryName'
                                                // showvalue='countryId'
                                                // name='countryId'
                                                // value={register.countryId}
                                                // handleChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label className='block mb-1 text-sm font-bold text-gray-900 dark:text-white'>State</label>
                                        <DropDownField select='Haryana' />
                                    </div>

                                    <div>
                                        <label className='block mb-1 text-sm font-bold text-gray-900 dark:text-white'>City</label>
                                        <DropDownField select='Punchkula' />
                                    </div>

                                    <div>
                                        <label className='block mb-1 text-sm font-bold text-gray-900 dark:text-white'>Pin Code</label>
                                        <InputField placeholder='Enter Pin Code'
                                            bgColor='bg-white' padding='py-2' inputType='text'
                                            name='PinCode'
                                            value={profileData.PinCode}
                                            handleChange={handleChange}
                                        />
                                    </div>
                                </div>



                                <div className='grid mt-8  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                                    <div>
                                        <label className='block mb-1 text-sm font-bold text-gray-900 dark:text-white'>ISTC Nick Name</label>
                                        <InputField placeholder='Enter Nick Name'
                                            bgColor='bg-white' padding='py-2' inputType='text'
                                            name='NickName'
                                            value={profileData.NickName}
                                            handleChange={handleChange}
                                        />
                                    </div>

                                    <div>
                                        <label className='block mb-1 text-sm font-bold text-gray-900 dark:text-white'>ISTC Friend Roommate</label>
                                        <InputField placeholder='Friend Roommate '
                                            bgColor='bg-white' padding='py-2' inputType='text'
                                            name='RoomMate'
                                            value={profileData.RoomMate}
                                            handleChange={handleChange}
                                        />
                                    </div>

                                </div>




                                <div className='mt-8'>
                                    <label for="message" class=" mb-4 text-md font-bold ">Comments :</label>
                                    <textarea name="" id="" rows="4" className='border border-gray-400 text-gray-700 px-2 
                                w-full rounded leading-tight focus:outline-none focus:border-blue-500'></textarea>

                                </div>



                                <div className='mt-8'>
                                    <label for="message" class=" mb-4 text-md font-bold ">ISTC About :</label>
                                    <textarea name="" id="" rows="4" className='border border-gray-400 text-gray-700 px-2 
                            w-full rounded leading-tight focus:outline-none focus:border-blue-500'></textarea>
                                </div>


                                <div className='mt-8'>
                                    <label for="message" class=" mb-4 text-md font-bold ">About My Self :</label>
                                    <textarea name="" id="" rows="4" className='border border-gray-400 text-gray-700 px-2 
                            w-full rounded leading-tight focus:outline-none focus:border-blue-500'>
                                        Myself N.C Hira, privileged to be the first Student of ISTC wearing Roll No - 6301. Served & Retired from ISTC as Faculty & Now running my own Unit in Panchkula
                                    </textarea>
                                </div>

                                <div className='mt-8'>
                                    <label for="message" class=" mb-4 text-md font-bold ">Search Keywords:</label>
                                    <InputField padding='p-2.5' />
                                </div>


                                <div className='mt-8'>
                                    <label for="message" class=" mb-4 text-md font-bold ">Residential Address :</label>
                                    <textarea name="" id="" rows="3" className='border border-gray-400 text-gray-700 px-2 
                             w-full rounded leading-tight focus:outline-none focus:border-blue-500'></textarea>
                                </div>



                                <div className='mt-8'>
                                    <label for="message" class=" mb-4 text-md font-bold ">Marital Status:</label>

                                    <div className='flex mt-4'>
                                        <div class="flex items-center">
                                            <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4   dark:focus:ring-blue-600  " />
                                            <label className="ms-1 text-md font-medium text-gray-900 dark:text-gray-300" value='Single'>Single</label>
                                        </div>
                                        <div class="flex items-center ms-4">
                                            <input onClick={() => setIsMarried((old => !old))} checked id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4   dark:focus:ring-blue-600 " />
                                            <label class="ms-1 text-md font-medium text-gray-900 dark:text-gray-300" value='Married' >Married</label>
                                        </div>

                                        <div class="flex items-center ms-4">
                                            <input checked id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600  dark:focus:ring-blue-600 " />
                                            <label class="ms-1 text-md font-medium text-gray-900 dark:text-gray-300" value='Divorced' >Divorced</label>
                                        </div>
                                    </div>

                                </div>

                                {/* div for marrage */}
                                {

                                    isMarried ?
                                        <div>
                                            <div className='mt-8'>
                                                <label className='block mb-1 text-md font-bold text-gray-900 dark:text-white'>Spouse Name :</label>
                                                <InputField padding='p-2.5' />
                                            </div>

                                            <div className='mt-8'>
                                                <label className='block mb-1 text-md font-bold text-gray-900 dark:text-white'>Aniversary Date :</label>
                                                <InputField padding='p-2.5' />
                                            </div>

                                            <div className='mt-8'>
                                                <label for="message" class=" mb-4 text-md font-bold ">Family Details :</label>
                                                <textarea name="" id="" rows="4" className='border border-gray-400 text-gray-700 px-2 
                                         w-full rounded leading-tight focus:outline-none focus:border-blue-500'></textarea>
                                            </div>
                                        </div>
                                        : null
                                }

                                <div className='text-end'>
                                    <Button1 buttonName='Update' buttonType='submit' paddingX='px-3' paddingY='py-1.5' bgColor='bg-red-900' textColor='text-white' bgHover='hover:bg-white' hoverText='hover:text-red-900' />
                                </div>

                            </form>

                        </div> : null
                }

















                <div onClick={openProfessional} className='mx-5 bg-red-900 mt-6 cursor-pointer'>
                    <div className='flex justify-between px-3 py-2.5'>
                        <p className='mt-1 text-white text-lg font-bold'>Professional Info</p>
                        {
                            !isOpenProfessional ?
                                <TiArrowSortedDown className='text-2xl text-white ' /> :
                                <TiArrowSortedUp className='text-2xl text-white' />

                        }
                    </div>
                </div>


                {

                    isOpenProfessional ?

                        <div className='mx-5 '>
                            <div class=" overflow-x-auto shadow-md ">
                                <table class="bg-white w-full text-lg text-left rtl:text-right  dark:text-gray-400">
                                    <thead class="text-md border-b-2 ">
                                        <tr>
                                            <th scope="col" class="px-6 py-3">
                                                Company Name
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Contact Name
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Contact Email
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Contact Number
                                            </th>
                                            <th scope="col" class="flex justify-center py-3">
                                                <FaPlusCircle onClick={addcompanydetailsavigate} className='text-red-900 text-3xl  cursor-pointer' />
                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class=" border-b  text-black dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                            <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap">
                                                Apple MacBook Pro 17"
                                            </th>
                                            <td class="px-6 py-4">
                                                Silver
                                            </td>
                                            <td class="px-6 py-4">
                                                email@gsfs
                                            </td>
                                            <td class="px-6 py-4">
                                                584554558
                                            </td>

                                            <td class="px-6 py-4 text-right">
                                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit Details</a>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                        : null
                }

            </div>
        </>
    )
}

export default EditProfile
