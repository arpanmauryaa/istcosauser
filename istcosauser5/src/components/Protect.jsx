import React, {  Component, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Protect({Component}) {
    const navigate = useNavigate()

    const data = localStorage.getItem('token');
    console.log(data, 'data')

    const fun = () => {
        if (!data) {
            navigate('/loginpage')
        }

    }

    useEffect(() => {
        fun();
    },[])


    return (
        <>
            <Component/>
        </>
    )
}

export default Protect
