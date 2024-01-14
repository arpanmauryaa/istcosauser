import React from 'react'

function InputField({ placeholder, marginTop,  star, inputType, name, value,disabled,
    handleChange, padding, bgColor, error, openError,id }) {
    return (
        <>

            <div className={`${marginTop}`}>
               
                <div className=''>
                    <input type={`${inputType}`}
                        id={id}
                        disabled={disabled}
                        name={name}
                        value={value}
                        onChange={handleChange}
                        placeholder={`${placeholder ? `${placeholder}` : ''}`}
                        className={` ${bgColor} border border-gray-400 text-gray-700 px-2 ${padding}
                        w-full rounded leading-tight focus:outline-none focus:border-blue-500`}
                    />
                   
                </div>
            </div>
        </>
    )
}



export default InputField