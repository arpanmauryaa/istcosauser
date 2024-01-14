import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from './navbar/NavBar'
import NavBar2 from './navbar/NavBar2'
import InputField from './globalcomponent/InputField'
import Button1 from './globalcomponent/Button1'
import { userlogin } from '../utils/api/margeapi/MargeApi'
import LoginDashboard from './loginuser/LoginDashboard'


export const a = createContext({name:'Ahh'})

function LoginPage() {
    var hii = 'niii'
    const navigate = useNavigate()
    const [checked, setChecked] = useState(false)
    const [userId2, setUserID2] = useState()
    const [errorMassage, setErrorMassage] = useState({
        errorUserName: '',
        errorPassword: '',
    })
    const [loginData, setLoginData] = useState({
        UserName: '',
        Password: '',
    })

    const handleChange = (e) => {
        setLoginData((oldData => ({ ...oldData, [e.target.name]: e.target.value })))
        setErrorMassage((old => ({ ...old, [`error${e.target.name}`]: "" })))
    }

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     localStorage.setItem('login', JSON.stringify(loginData));
    //     // localStorage.removeItem("login")
    //     console.log(loginData)
    //     homeNavigate();
    // }

    const handleSubmit = (event) => {
        event.preventDefault();
        let isValid = true

        const error = ({
            errorUserName: '',
            errorPassword: '',
        })

        if (!loginData.UserName) {
            error.errorUserName = 'Enter Roll number'
            isValid = false
        }

        if (!loginData.Password) {
            error.errorPassword = 'Enter Password'
            isValid = false
        }

        if (!isValid) {
            setErrorMassage(error)
        }

        if (isValid) {
            userlogin(loginData).then(response => {
                const token = response.Token
                const userID = response.UserId
                setUserID2(userID)
                // console.log(userId,'userId')
                if (token) {
                    localStorage.setItem('userId', userID);
                    localStorage.setItem('token', token);
                
                    // homeNavigate()
                    navigate('/home/logindashboard', { state: { data: userID } })
                } else {
                    alert('Authentication failed')
                }

            }).catch(error => {
                alert('Enter valid User And Password')
            })
        }

    }

    const registerNavigate = () => {
        navigate('/registerpage')
    }

    const homeNavigate = () => {
        navigate('/home/logindashboard')
    }

    const showPassword = () => {
        setChecked(old => !old)
    }

    <a.Provider value={a.name}>
        <LoginDashboard />
    </a.Provider>



    return (
        <>


            <div>
                <div className='w-screen'>
                    <div className=' flex justify-center px-9'>
                        <div className='bg-stone-100 shadow-xl  p-9'>

                            <div>
                                <p className='font-bold text-center text-3xl text-red-950'>Login Here</p>
                            </div>

                            <form onSubmit={handleSubmit}>
                                <div>
                                    <InputField bgColor='bg-white' label='Email' padding='py-2' marginTop='mt-8' star='*' placeholder='Enter Roll Number' inputType='text'
                                        name='UserName'
                                        value={loginData.UserName}
                                        handleChange={handleChange}
                                    />
                                    <p className='text-red-700'>{errorMassage.errorUserName}</p>
                                </div>

                                <div>
                                    <InputField bgColor='bg-white' label='Password' padding='py-2' marginTop='mt-8' star='*' placeholder='Enter Password'
                                        inputType={
                                            checked ? 'text' : 'password'
                                        }
                                        name='Password'
                                        value={loginData.Password}
                                        handleChange={handleChange}
                                    />
                                    <p className='text-red-700'>{errorMassage.errorPassword}</p>
                                </div>

                                <div className="flex justify-between my-4 ">
                                    <div>
                                        <input onClick={showPassword} id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Show Password</label>
                                    </div>
                                    <div>
                                        <a href="#" className="text-blue-800 text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                                    </div>
                                </div>

                                <div className='mt-8 text-center'>
                                    {/* <Button1  buttonName='Reset' onClickFunction={functionForReset} buttonType='button' textColor='text-red-900' bgHover='hover:bg-red-900' hoverText='hover:text-white'/> */}
                                    <button type="submit" className="w-36 text-white bg-red-900 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                                </div>


                            </form>

                            <div>
                                <p className="text-md mt-8 text-center ">
                                    Don’t have an account yet? <a href="#" onClick={registerNavigate} className="font-medium text-blue-800 hover:underline dark:text-primary-500">Registered</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default LoginPage
