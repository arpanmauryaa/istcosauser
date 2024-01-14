import React, { useEffect, useState } from 'react'
import { FaPlusCircle } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { getemployement } from '../../../utils/api/margeapi/MargeApi'
import { MdDelete, MdEdit } from "react-icons/md";


function EmployeList() {
    const navigate = useNavigate()
    const [employementList, setEmployementList] = useState()
    const [mapData, setMapData] = useState()
    const [buttonColour, setButtonColour] = useState()
    const [initialState, setInitialState] = useState(1)
    const [recordPerPage, setRecordPerPage] = useState(10)
    const [record, setRecord] = useState(10)



    const buttonNumber = [1, 2, 3, 4]

    const lastIndex = initialState * recordPerPage;
    const firstIndex = lastIndex - recordPerPage;

    const fistPage = () => {
        setInitialState(buttonNumber[0])
    }

    const lastPage = () => {
        setInitialState(buttonNumber[buttonNumber.length - 1])
    }

    const numberPage = (value, index) => {
        setInitialState(value)
        setButtonColour(value - 1)
        console.log(value, index, 'kkkkkkkkkkk')
    }



    useEffect(() => {
        getemployement().then(response => {
            const data1 = response.filter((item => item.Active == true))
            setMapData(data1)
            console.log(response, 'response of get employement list api')
        }).catch((error => {
            console.log('error in employement list api ')
        }))
    }, [])

    const postEmployementNavigate = () => {
        navigate('/home/list/postemployment')
    }
    return (
        <>

            <div className='bg-slate-50 lg:h-full pb-96 md:pb-0'>
                <div className='mx-8 pt-8'>
                    <div>
                        <div className='grid grid:cols-1 md:grid-cols-2 bg-white rounded-md py-3 ms:px-5 pr-3 '>
                            <div className='text-4xl font-bold text-red-900'>
                                Employment List
                            </div>

                            <div className='mt-2 flex justify-end'>
                                <p>
                                    <FaPlusCircle onClick={postEmployementNavigate} className='text-red-900 text-3xl cursor-pointer' />
                                </p>
                            </div>
                        </div>


                        <div className=" overflow-x-auto shadow-md mt-8 bg-white mb-5">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead class="text-lg text-white  bg-red-900">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Status
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Company Name
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Job Title
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Experience Year
                                        </th>
                                        <th scope="col" className="text-end pe-14 py-3">
                                            Action
                                        </th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        mapData?.slice(firstIndex, lastIndex).map((item => {
                                            return (
                                                <tr className='border-b'>
                                                    <td scope="col" className="px-6 py-3 ">{item.DraftStatus}</td>
                                                    <td scope="col" className="px-6 py-3">{item.Company}</td>
                                                    <td scope="col" className="px-6 py-3">{item.JobTitle}</td>
                                                    <td scope="col" className="px-6 py-3 ">{item.ExperienceYear}</td>
                                                    <td scope="col" className="justify-center flex pt-3 text-xl  text-red-900">
                                                        <MdEdit className='ms-1 cursor-pointer' />
                                                    </td>
                                                </tr>
                                            )
                                        }))

                                    }
                                </tbody>
                            </table>
                        </div>


                        <div className='text-center my-5'>
                            <div className='text-red-950'>
                                <button onClick={fistPage} className='bg-white rounded-l-md  hover:bg-red-900 hover:text-white border py-2 px-3'>First</button>
                                {
                                    buttonNumber.map((item, index) => {
                                        return (
                                            <button onClick={() => { numberPage(item, index) }} className={`${index == buttonColour ? 'bg-red-900 text-white' : 'bg-white'}  hover:bg-red-900 hover:text-white  border-y border-r py-2 px-3`}>{item}</button>
                                        )
                                    })
                                }
                                <button onClick={lastPage} className='bg-white rounded-r-md  hover:bg-red-900 hover:text-white border-y border-r py-2 px-3'>Last</button>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default EmployeList
