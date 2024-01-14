import { Dropdown } from 'flowbite-react';
import React, { useState } from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import { MdArrowForwardIos } from "react-icons/md";



function DropDownButton({ buttonName, padding, border, marginStart, marginStartDownIcone, optionName1,
    optionName2, optionName3, textSize, optionName4, optionName5, arrowLeftIcone , navigationOption,navigationOption2
    ,navigationOption3 ,employeListNavigate,navigationOption4,navigationOption5
}) {
    const [isData, setIsData] = useState(false)
    const fun = () => {
        setIsData((old => !old))
    }
    return (
        <>


            <div>
                <button onClick={fun}
                    className={`rounded-sm ${padding} ${marginStart} py-2 text-center inline-flex items-center`} type="button">
                    {buttonName} <IoMdArrowDropdown className={`${marginStartDownIcone} ${textSize}`} />
                </button>


                {
                    isData ?
                        <div>
                            <ul className={`w-32 bg-white ps-2 ${border}`}>
                                <li className='flex'>
                                    {
                                        optionName1 ?
                                            <MdArrowForwardIos className='text-sm mt-5' /> : null

                                    }
                                    <a href="#" onClick={navigationOption} className="mt-4">{optionName1}</a>
                                </li>
                                <li className='flex'>
                                    {
                                        optionName2 ?
                                            <MdArrowForwardIos className='text-sm mt-5' /> : null

                                    }
                                    <a href="#" onClick={navigationOption2} className="mt-4">{optionName2}</a>
                                </li>
                                <li className='flex'>
                                    {
                                        optionName3 ?
                                            <MdArrowForwardIos className='text-sm mt-5' /> : null
                                    }
                                    <a href="#" onClick={navigationOption3} className="mt-4">{optionName3}</a>
                                </li>
                                <li className='flex'>
                                    {
                                        optionName4 ?
                                            <MdArrowForwardIos className='text-sm mt-5' /> : null
                                    }
                                    <a href="#" onClick={navigationOption4} className="mt-4">{optionName4}</a>
                                </li>
                                <li className='flex'>
                                    {
                                        optionName5 ?
                                            <MdArrowForwardIos className='text-sm mt-5' /> : null
                                    }
                                    <a href="#" onClick={navigationOption5} className="mt-4">{optionName5}</a>
                                </li>
                            </ul>
                        </div> : null
                }
            </div>
        </>
    )
}

export default DropDownButton
