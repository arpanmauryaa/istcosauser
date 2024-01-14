import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Toastify() {

    const notify = () => {
        toast('Defalt notification!', {
            position: toast.POSITION.TOP_RIGHT
        })
        console.log('hii');
    }
    return (
        <>
            <button onClick={notify}>Click</button>
            <ToastContainer />
        </>
    )
}

export default Toastify
