import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import LoginPage from './components/LoginPage.jsx'
import { BrowserRouter } from 'react-router-dom'
import Hii from './components/Hii.jsx'
import { QueryClient, QueryClientProvider } from 'react-query'
import DropDown from './components/globalcomponent/DropDownField.jsx'
import InputField from './components/globalcomponent/InputField.jsx'
import Button1 from './components/globalcomponent/Button1.jsx'
import NavBar3 from './components/navbar/NavBar3.jsx'
import SideBar from './components/sidebar/SideBar.jsx'
import LoginDashboard from './components/loginuser/LoginDashboard.jsx'
import HomePage from './pages/HomePage.jsx'
import Home from './components/Home.jsx'
import SearchAlumni from './components/loginuser/SearchAlumni.jsx'
import CardImage from './components/loginuser/CardImage.jsx'
import SideBar2 from './components/sidebar/SideBar2.jsx'
import SBMoreDetails from './components/loginuser/SBMoreDetails.jsx'
import Toastify from './components/globalcomponent/Toastify.jsx'
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  
  // <QueryClientProvider client= { queryClient}>
  <BrowserRouter>
    <App/>
    {/* <Hii/> */}
    {/* <NavBar3/> */}
    {/* <SideBar/> */}
    {/* <LoginDashboard/> */}
    {/* <HomePage/> */}
    {/* <Home/> */}
    {/* <SearchAlumni/> */}
    {/* <CardImage/> */}
    {/* <SideBar2/> */}
    {/* <SBMoreDetails/> */}
    {/* <ViewProfileLoginDashboard/> */}
    {/* <Toastify/> */}
    
  </BrowserRouter>,
  // </QueryClientProvider>
)
  