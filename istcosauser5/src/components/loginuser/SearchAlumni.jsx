import React, { useEffect, useState } from 'react'
import InputField from '../globalcomponent/InputField'
import DropDownField from '../globalcomponent/DropDownField'
import Button1 from '../globalcomponent/Button1'
import { advancesearch, city, commonType, contry, getBatch, useradvancesearch, viewprofile } from '../../utils/api/margeapi/MargeApi'
import { useNavigate } from 'react-router-dom'

function SearchAlumni({ batchData }) {

    
    const [getSearchData, setGetSearchData] = useState()
    const [buttonColor, setButtonColor] = useState()
    const [filterData, setFilterData] = useState(getSearchData)
    const [cityData, setCityData] = useState()
    const [contryNameData, setContryName] = useState()
    const [batchYears, setBatchYears] = useState()
    const [stateData, setStateData] = useState()

    const [totalResult, setTotalResults] = useState(3607)
    const [searchData, setSearchData] = useState({
        FullName: '',
        RollNumberID: '',
        BatchID: '',
        Email: '',
        PhoneNumber: '',
        NickName: '',
        Company: '',
        countryId: '',
        StateID: '',
        CityID: '',
        Badges: '',
        Members: '',
    })

    const navigate = useNavigate()


    const [initialState, setInitialState] = useState(1)
    const [recordPerPage, setRecordPerPage] = useState(370)

    const lastIndex = initialState * recordPerPage;
    const firstIndex = lastIndex - recordPerPage;

    const arrbutton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const firstFunction = () => {
        setInitialState(arrbutton[0])
        console.log('hii')
    }

    const lastFunction = () => {
        setInitialState(arrbutton.length)
    }

    const numberPage = (value) => {
        setInitialState(value)
        setButtonColor(value - 1)
    }

    const handleChange = (e) => {
        setSearchData((oldData => ({ ...oldData, [e.target.name]: e.target.value })))
    }

    // get search data
    useEffect(() => {
        advancesearch().then(response => {
            const data = response
            console.log(data, 'get user data')
            setFilterData(data)
            setGetSearchData(data)

        }).catch(error => {
            console.log('error in get user api')
        })
    }, [])

    // batch api
    useEffect(() => {
        getBatch().then(response => {
            const data = response.filter(item => { return item.Active == true })
            setBatchYears(data)
        })

        contry().then(response => {
            setContryName(response)
            console.log(response, 'country')
        })

        // setFilterData(aluminiData)
    }, [])


    useEffect(() => {
        commonType(searchData.countryId).then(response => {
            setStateData(response)
        })
    }, [searchData.countryId])


    useEffect(() => {
        city(searchData.StateID).then(response => {
            setCityData(response)
        })
    }, [searchData.StateID])

    // useEffect(() => {
    //     useradvancesearch().then(response => {
    //         console.log(response, 'advance search')
    //     })
    // }, [])


    const viewprofile = (id) => {
        navigate('/home/viewprofilelogindashboard', { state: id })
    }


    const filterFunction = (event) => {
        event.preventDefault();
        const data1 = getSearchData.filter((data, index) => {

            if (searchData.FullName == data.FullName && searchData.RollNumberID == data.RollNumberID) {
                return data.RollNumber == searchData.RollNumberID
            }
            else if (searchData.FullName) {
                return data.FullName === searchData.FullName
            }
            else if (searchData.RollNumberID) {
                return data.RollNumberID == searchData.RollNumberID
            }
            else if (searchData.PhoneNumber) {
                return data.PhoneNumber == searchData.PhoneNumber
            }
            else if (searchData.Email) {
                return data.Email == searchData.Email
            }
            else if (searchData.BatchID) {
                return data.BatchID == searchData.BatchID
            } else {
                return false
            }
        });

        if (searchData.FullName || searchData.RollNumberID || searchData.PhoneNumber || searchData.BatchID || searchData.Email) {
            if (data1.length) {
                // console.log(data1, 'hii')
                const num = data1.length
                setTotalResults(num)
                setFilterData(data1);
                console.log(data1, 'filterData')
            } else {
                setFilterData([])
                setTotalResults(0)
            }
        }

    };





    const resetFunction = () => {
        console.log(getSearchData, 'hii')

        setSearchData({
            FullName: '',
            RollNumberID: '',
            BatchID: '',
            Email: '',
            PhoneNumber: '',
            NickName: '',
            Company: '',
            countryId: '',
            StateID: '',
            CityID: '',
            Badges: '',
            Members: '',
        })
        setFilterData(getSearchData)
        setTotalResults(3607)

    }

    return (
        <>

            <div className='bg-slate-50 h-full '>
                <div className='mx-5'>
                    <div className='pt-7 '>
                        <p className='bg-white py-3 px-6 rounded-lg font-bold text-red-900 text-4xl'>Search Alumni</p>
                    </div>

                    <div>
                        {/* onSubmit={filterFunction} */}
                        <form onSubmit={filterFunction} className='bg-white px-5 mt-5 py-1'>
                            <div>
                                <div className='mt-8 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 lg:gap-4 gap-2'>
                                    <div>
                                        <label className='block mb-2 text-sm font-bold text-gray-900 dark:text-white'>Full Name <span>*</span></label>
                                        <InputField bgColor='bg-white' padding='py-2' star='*' placeholder='Enter Name' inputType='text'
                                            name='FullName'
                                            value={searchData.FullName}
                                            handleChange={handleChange}
                                        />
                                    </div>

                                    <div>
                                        <label className='block mb-2 text-sm font-bold text-gray-900 dark:text-white'>Batch Year <span>*</span></label>
                                        <DropDownField
                                            select='---select---'
                                            show='BatchID'
                                            showvalue='BatchID'
                                            batchData={batchYears}
                                            name='BatchID'
                                            value={searchData.BatchID}
                                            handleChange={handleChange}
                                        />
                                    </div>

                                    <div>
                                        <label className='block mb-2 text-sm font-bold text-gray-900 dark:text-white'>Roll Number <span>*</span></label>

                                        <InputField bgColor='bg-white' padding='py-2' star='*' placeholder='Roll Number' inputType='text'
                                            name='RollNumberID'
                                            value={searchData.RollNumberID}
                                            handleChange={handleChange}
                                        />
                                    </div>

                                    <div>
                                        <label className='block mb-2 text-sm font-bold text-gray-900 dark:text-white'>Email ID<span>*</span></label>

                                        <InputField bgColor='bg-white' padding='py-2' star='*' placeholder='Email Address' inputType='text'
                                            name='Email'
                                            value={searchData.Email}
                                            handleChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div className='mt-8 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 lg:gap-4 gap-2'>
                                    <div >
                                        <label className='block mb-2 text-sm font-bold text-gray-900 dark:text-white'>Mobile Number<span>*</span></label>

                                        <InputField bgColor='bg-white' padding='py-2' placeholder='Phone Number' inputType='text'
                                            name='PhoneNumber'
                                            value={searchData.PhoneNumber}
                                            handleChange={handleChange}
                                        />
                                    </div>

                                    <div >
                                        <label className='block mb-2 text-sm font-bold text-gray-900 dark:text-white'>ISTC Nick Name<span>*</span></label>

                                        <InputField bgColor='bg-white' padding='py-2' placeholder='Nick Name' inputType='text'
                                            name='NickName'
                                            value={searchData.NickName}
                                            handleChange={handleChange}
                                        />
                                    </div>

                                    <div>
                                        <label className='block mb-2 text-sm font-bold text-gray-900 dark:text-white'>Company<span>*</span></label>
                                        <InputField bgColor='bg-white' padding='py-2' placeholder='Search Keywords' inputType='text'
                                            name='Company'
                                            value={searchData.Company}
                                            handleChange={handleChange}
                                        />
                                    </div>

                                    <div>
                                        <label className='block mb-2 text-sm font-bold text-gray-900 dark:text-white'>Country<span>*</span></label>
                                        <DropDownField select='---select---'
                                            batchData={contryNameData}
                                            show='countryName'
                                            showvalue='countryId'
                                            name='countryId'
                                            value={searchData.countryId}
                                            handleChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div className='mt-8 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 lg:gap-4 gap-2'>
                                    <div>
                                        <label className='block mb-2 text-sm font-bold text-gray-900 dark:text-white'>State<span>*</span></label>

                                        <DropDownField select='---select---'
                                            batchData={stateData}
                                            name='StateID'
                                            show='StateName'
                                            showvalue='StateId'
                                            value={searchData.StateID}
                                            handleChange={handleChange}
                                        />
                                    </div>

                                    <div>
                                        <label className='block mb-2 text-sm font-bold text-gray-900 dark:text-white'>City<span>*</span></label>
                                        <DropDownField select='---select---'
                                            show='CityName'
                                            showvalue='CityId'
                                            batchData={cityData}
                                            name='CityID'
                                            value={searchData.CityID}
                                            handleChange={handleChange}
                                        />
                                    </div>

                                    <div>
                                        <label className='block mb-2 text-sm font-bold text-gray-900 dark:text-white'>Badges<span>*</span></label>

                                        <InputField bgColor='bg-white' padding='py-2' placeholder='All' inputType='text'
                                            name='Badges'
                                            value={searchData.Badges}
                                            handleChange={handleChange}
                                        />
                                    </div>

                                    <div>
                                        <label className='block mb-2 text-sm font-bold text-gray-900 dark:text-white'>Members<span>*</span></label>

                                        <InputField bgColor='bg-white' padding='py-2' placeholder='All' inputType='text'
                                            name='Members'
                                            value={searchData.Members}
                                            handleChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div className='grid grid-cols-1 md:grid-cols-2 mt-8'>
                                    <div>
                                        <p><span className='font-medium'>Total Results : </span> <span>{totalResult}</span></p>
                                    </div>

                                    <div className='text-center mt-5 md:text-end'>
                                        <Button1 buttonType='button' onClickFunction={resetFunction} buttonName='Reset' paddingX='px-3' paddingY='py-2' bgColor='bg-red-900' bgHover='hover:bg-white' textColor='text-white' hoverText='hover:text-red-900' />
                                        <Button1 buttonType='submit' buttonName='Search' paddingX='px-3' paddingY='py-2' bgColor='bg-red-900' bgHover='hover:bg-white' textColor='text-white' hoverText='hover:text-red-900' />
                                    </div>
                                </div>

                            </div>
                        </form>

                        {/* aluminiData */}

                        <div className={`grid pb-4 grid-cols-1 ${filterData ? 'md:grid-cols-2 lg:px-36' : 'md:grid-cols-1 lg:px-96'}   gap-4 lg:py-4  mt-5 bg-white`}>
                            {/* <div className={`grid pb-4 grid-cols-1  'md:grid-cols-2   gap-4 lg:py-4  mt-5 bg-white`}> */}

                            {
                                filterData?.slice(firstIndex, lastIndex).map((item => {
                                    return (
                                        <div className=' gap-4 justify-center border-2  border-red-900 bg-red-2 pt-8 px-5  rounded-medium shadow'>
                                            {
                                                item.MembershipType ?
                                                    <p className='text-end text-red-900 italic'>{item.MembershipType}</p> : null
                                            }
                                            <div className=" flex  dark:bg-gray-800 dark:border-gray-700">
                                                <div className=''>
                                                    {/* <img src={`http://new.istcosa.com/Images/Old_Images/${item.RollNumberID}.jpg`} alt="img" className='w-36 lg:h-40' /> */}
                                                </div>
                                                <div className="md:ps-10 ps-3 ">
                                                    <p>Name: <span>{item.FullName}</span></p>
                                                    <p>Roll No: <span>{item.RollNumberID}</span></p>
                                                    <p>Mobile No. <span>{item.PhoneNumber}</span></p>
                                                    <p>Email ID: <span>{item.Email}</span></p>
                                                    {/* <p>Location: <span>{item.Location}</span></p> */}
                                                </div>
                                            </div>
                                            <div className='text-end'>
                                                <Button1 onClickFunction={() => viewprofile(item.RollNumberID)} buttonName='View Profile' paddingX='px-3' paddingY='py-2' bgColor='bg-red-900' bgHover='hover:bg-white' textColor='text-white' hoverText='hover:text-red-900' />
                                            </div>
                                        </div>
                                    )
                                }))

                            }
                        </div>

                    </div>

                    {
                        !totalResult ?
                            <div className='text-center bg-white mb-10'>
                                <p className='mx-5  text-4xl text-opacity-25 py-7'>"No Record Found"</p>
                            </div> : null
                    }

                    <div className='text-center my-5'>
                        <div className='text-red-950'>
                            <button onClick={firstFunction} className='bg-white rounded-l-md  hover:bg-red-900 hover:text-white border py-2 px-3'>First</button>
                            {
                                arrbutton.map(((item, index) => {
                                    return (
                                        <button onClick={() => { numberPage(item) }} className={`${index == buttonColor ? 'bg-red-900 text-white' : 'bg-white'}  hover:bg-red-900 hover:text-white  border-y border-r py-2 px-3`}>{item}</button>
                                    )
                                }))
                            }
                            <button onClick={lastFunction} className='bg-white rounded-r-md  hover:bg-red-900 hover:text-white border-y border-r py-2 px-3'>Last</button>
                        </div>
                    </div>

                </div>
            </div>


        </>
    )
}

export default SearchAlumni
