import React from 'react'

function Button1({buttonName,bgColor,textColor,bgHover, hoverText,buttonType,onClickFunction,paddingY,paddingX,textSize}) {
    return (
        <>
            <button type={`${buttonType}`} onClick={onClickFunction} className={`${bgColor} ${textColor} ${bgHover} ${hoverText} focus:outline-none  bg-white-700  focus:ring-2 
             focus:ring-red-900 font-medium rounded-lg  ${textSize} ${paddingX} ${paddingY} me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-950 border border-red-900 `}>{buttonName}</button>
        </>
    )
}
export default Button1
