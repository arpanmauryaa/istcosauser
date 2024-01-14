import React, { useEffect } from 'react'


function DropDownField({ label, star, marginTop, handleChange, name, value, option1, option2,
    batchData, showvalue, show, otherSelect, select, openError, error }) {




    return (
        <>
            <div className={`${marginTop}`}>
                <select
                    name={name}
                    value={value}
                    onChange={(batchData) => handleChange(batchData)}
                    className=" bg-white border border-gray-400 text-gray-700 px-2 py-1.5 
                    w-full
                    rounded leading-tight focus:outline-none focus:border-blue-500"
                >
                    <option>{select}</option>

                    {
                        batchData?.map((item, index) => {
                            return (
                                <>
                                    <option key={index} value={item[showvalue]}>{item[show]}</option>
                                </>
                            )
                        })
                    }

                </select>

            </div>


        </>
    )
}

export default DropDownField



// <div className={`${marginTop}`}>
// <label className="font-bold block mb-2 text-sm text-gray-900 dark:text-white">{label}<span>{star}</span></label>
// <select
//     name={name}
//     value={value}
//     onChange={(e) => handleChange(e)}
//     className=" bg-white border border-gray-400 text-gray-700 px-2 py-1.5
//     w-full
//     rounded leading-tight focus:outline-none focus:border-blue-500"
// >
//     <option>{select}</option>
//     {batchData?.map((item, index) => (
//         <option key={index} value={item[showvalue]}>
//             {item[show]}
//         </option>
//     ))}
// </select>
// </div>