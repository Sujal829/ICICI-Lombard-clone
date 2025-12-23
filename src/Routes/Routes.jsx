import React from 'react'
import { BrowserRouter, Route ,Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import BikeInsurance from '../Pages/Motor/BikeInsurance'
import CarInsurancePage from '../Pages/Motor/CarInsurancePage'
import Profile from '../Pages/Profile'
import PrivateRoute from './PrivateRoute'
import HomeInsurance from '../Pages/Home/HomeInsurance'
import Branches from '../pages/Branches/Branches'
import Corporate from '../pages/Home/Corporate'
import AdminPage from '../pages/Admin/AdminPage'
import Userinfo from '../pages/Admin/Userinfo'
import ProtectedRoute from './ProtectedRoute'
function PageRoutes() {
  return (
    <>
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/carinsurance' element={<CarInsurancePage/> }/>
        <Route path='/bikeinsurance' element={<BikeInsurance/>}/>
        <Route path='/dashboard' element={
          <PrivateRoute>
            <Profile/>  
          </PrivateRoute>

          } />
        <Route path='/homeinsuranc' element={<HomeInsurance/>}/>
        <Route path='/branches' element={<Branches/>} /> 
        <Route path='/corporate' element={<Corporate/>} /> 

        <Route path="/admin" element={
          <ProtectedRoute>
            <AdminPage />
          </ProtectedRoute>
          } />

        <Route path="/admin/user/:id" element={<Userinfo />} />  
        
    </Routes>
    </>
    </>
  )
}

export default PageRoutes
