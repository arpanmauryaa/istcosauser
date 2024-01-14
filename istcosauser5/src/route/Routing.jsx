import React, { createContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from '../components/LoginPage'
import RegisterPage from '../components/RegisterPage'
import HomePage from '../pages/HomePage'
import NavBar2 from '../components/navbar/NavBar2'
import Home from '../components/Home'
import NavBar from '../components/navbar/NavBar'
import Notification from '../components/loginuser/Notification'
import LoginDashboard from '../components/loginuser/LoginDashboard'
import SearchAlumni from '../components/loginuser/SearchAlumni'
import SearchEmployement from '../components/loginuser/SearchEmployement'
import SEMoreDetails from '../components/loginuser/SEMoreDetails'
import SearchBusiness from '../components/loginuser/SearchBusiness'
import EmployeList from '../components/loginuser/list/EmployeList'
import PostEmployment from '../components/loginuser/list/PostEmployment'
import BusinessList from '../components/loginuser/list/BusinessList'
import PostBusiness from '../components/loginuser/list/PostBusiness'
import Employement from '../components/loginuser/jobs/Employement'
import Business from '../components/loginuser/jobs/Business'
import EditProfile from '../components/loginuser/setting/EditProfile'
import Email from '../components/loginuser/setting/Email'
import MyProfile from '../components/loginuser/setting/MyProfile'
import Password from '../components/loginuser/setting/Password'
import Profile from '../components/loginuser/setting/Profile'
import Protect from '../components/Protect'
import SBMoreDetails from '../components/loginuser/SBMoreDetails'
import AddCompanyDetails from '../components/loginuser/setting/AddCompanyDetails'
import DashboardHome from '../components/DashboardHome'
import ViewProfileLoginDashboard from '../components/loginuser/ViewProfileLoginDashboard'
import ProfileRegistration from '../components/fourstepform/ProfileRegistration'



function Routing() {
    return (
        <>

            <div>
                <Routes>
                    <Route path='/' element={<HomePage />} >
                        <Route path='/dashboardhome' element={<DashboardHome />} />
                        <Route path='/loginpage' element={<LoginPage />} />
                        <Route path='/registerpage' element={<RegisterPage />} />
                        {/* <Route path='/notification' element={<Notification />} /> */}

                    </Route>

                    <Route path='/home' element={< Protect Component={Home} />} >
                        <Route path='/home/logindashboard' element={< Protect Component={LoginDashboard} />} />
                        <Route path='/home/viewprofilelogindashboard' element={< Protect Component={ViewProfileLoginDashboard} />} />
                        <Route path='/home/searchalumni' element={<Protect Component={SearchAlumni} />} />
                        <Route path='/home/searchemployement' element={<Protect Component={SearchEmployement} />} />
                        <Route path='/home/semoredetails' element={<Protect Component={SEMoreDetails} />} />
                        <Route path='/home/searchbusiness' element={<Protect Component={SearchBusiness}   />} />
                        <Route path='/home/sbmoredetails' element={<Protect Component={SBMoreDetails}  />} />
                        <Route path='/home/list/employelist' element={< Protect Component={EmployeList}  />} />
                        <Route path='/home/list/postemployment' element={<Protect Component={PostEmployment}  />} />
                        <Route path='/home/list/businesslist' element={<Protect Component={BusinessList}  />} />
                        <Route path='/home/list/postbusiness' element={<Protect Component={PostBusiness}  />} />
                        <Route path='/home/job/employement' element={<Protect Component={Employement}  />} />
                        <Route path='/home/job/business' element={<Protect Component={Business}  />} />
                        <Route path='/home/setting/editprofile' element={<Protect Component={EditProfile}  />} />
                        <Route path='/home/setting/editprofile/addcompanydetails' element={<Protect Component={AddCompanyDetails}  />} />
                        <Route path='/home/setting/email' element={<Protect Component={Email}  />} />
                        <Route path='/home/setting/myprofile' element={<Protect Component={MyProfile}  />} />
                        <Route path='/home/setting/password' element={<Protect Component={Password}  />} />
                        <Route path='/home/setting/profile' element={<Protect Component={Profile}  />} />
                        <Route path='/home/notification' element={<Protect Component={Notification}  />} />

                        <Route path='/home/profileregistration' element={< Protect Component={ProfileRegistration} />} />
                    </Route>

                </Routes>
            </div>

        </>
    )
}

export default Routing
