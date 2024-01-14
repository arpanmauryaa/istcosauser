import React, { useEffect, useState } from 'react'
import InputField from '../globalcomponent/InputField'
import Button1 from '../globalcomponent/Button1'
import { useNavigate } from 'react-router-dom'
import { tableData } from './Json'

function SearchBusiness() {
    const [buttonColour, setButtonColor] = useState()
    const [initialState, setInitialState] = useState(1)
    const [recordPerPage, setRecordPerPage] = useState(2)
    const [record, setRecord] = useState(10)
    const [mapData, setMapData] = useState(tableData)
    const [searchTableData, setSearchTableData] = useState('')

    const navigate = useNavigate()

    const handleChange = (e) => {
        setSearchTableData(e.target.value)
    }


    // Routing function
    const moreDetailsBusiness = (id) => {
        const data2 = tableData.filter((data => { return (data.Id == id) }))
        navigate('/home/sbmoredetails', { state: data2 });
        console.log(data2, 'hiiiiii')
    }

    // function for filter
    const searchFunction = () => {
        const filterData = tableData.filter((item => {
            return (
                item.CompanyName == searchTableData
            )
        }))
        setMapData(filterData)


        if (searchTableData) {
            if (filterData.length) {
                setMapData(filterData);
            } else {
                setMapData([])
                setRecord('')
            }
        } else {
            setMapData(tableData)
        }
    }

    const buttonNumber = [1, 2, 3, 4, 5]
    const lastIndex = initialState * recordPerPage;
    const firstIndex = lastIndex - recordPerPage

    const firstPage = () => {
        setInitialState(buttonNumber[0])
    }

    const lastPage = () => {
        setInitialState(buttonNumber.length)
    }

    const numberPage = (value, index) => {
        setInitialState(value)
        setButtonColor(value - 1)
    }

    return (
        <>
            <div className='bg-slate-50 lg:h-full pb-80 md:pb-0'>
                <div className='mx-8 pt-8'>
                    <div>
                        <div className=' bg-white rounded-lg'>
                            <p className='p-3 text-red-900 font-bold text-4xl '>Business Details</p>
                        </div>

                        <div className='grid lg:grid-cols-12'>
                            <div className='lg:lg:col-span-11 mt-8'>
                                <InputField bgColor='bg-white' padding='py-2.5' marginTop='mt-8' placeholder='Search By Company' inputType='text'
                                    value={searchTableData}
                                    handleChange={handleChange}
                                />
                            </div>

                            <div className='lg:mt-16 mt-4 text-center'>
                                <Button1 onClickFunction={searchFunction} buttonName='Search' paddingX='px-5' paddingY='py-1.5' bgColor='bg-red-900'
                                    bgHover='hover:bg-white' textColor='text-white' hoverText='hover:text-red-900' textSize='text-xl' />
                            </div>
                        </div>

                        <div className='mt-5 mb-5'>


                            <div class=" overflow-x-auto shadow-md ">
                                <table class="w-full text-lg text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <thead class="text-md text-white  bg-red-900">
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
                                            <th scope="col" class="text-end pe-14 py-3">
                                                Action
                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            mapData.slice(firstIndex, lastIndex).map((item => {
                                                return (
                                                    <tr class="bg-white border-b  text-black dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                        <td scope="row" class="px-6 py-4   whitespace-nowrap">
                                                            {item.CompanyName}
                                                        </td>
                                                        <td class="px-6 py-4">
                                                            {item.ContactName}
                                                        </td>
                                                        <td class="px-6 py-4">
                                                            {item.ContactEmail}
                                                        </td>
                                                        <td class="px-6 py-4">
                                                            {item.CantactNumber}
                                                        </td>

                                                        <td class="px-6 py-4 text-right">
                                                            <p onClick={() => moreDetailsBusiness(item.Id)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer">More Details</p>
                                                        </td>
                                                    </tr>
                                                )
                                            }))


                                        }

                                    </tbody>
                                </table>
                            </div>



                            <div className='shadow-md'>
                                {
                                    !record ?
                                        <div className='text-center bg-white mb-10'>
                                            <p className='mx-5 text-center  text-4xl text-opacity-25 py-7'>"No Record Found"</p>
                                        </div> : null
                                }
                            </div>




                            <div className='text-center my-5'>
                                <div className='text-red-950'>
                                    <button onClick={firstPage} className='bg-white rounded-l-md  hover:bg-red-900 hover:text-white border py-2 px-3'>First</button>
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



                        <div>

                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchBusiness
