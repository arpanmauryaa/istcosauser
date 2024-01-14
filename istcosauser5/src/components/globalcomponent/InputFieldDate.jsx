import React from 'react'

function InputFieldDate({label,star}) {
    return (
        <>
            <div>
                <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">{label}<span>{star}</span></label>
                <div className='mt-1'>
                    <input type="date"
                        placeholder='Enter Name'
                        className={` bg-white border border-gray-400 text-gray-700 px-4 py-2 
                        w-full rounded leading-tight focus:outline-none focus:border-blue-500`}
                    />
                </div>
            </div>
        </>
    )
}

export default InputFieldDate
