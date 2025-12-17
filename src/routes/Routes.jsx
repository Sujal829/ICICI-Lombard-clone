import React from 'react'
import { BrowserRouter, Route ,Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import BikeInsurance from '../Pages/Motor/BikeInsurance'
import CarInsurancePage from '../Pages/Motor/CarInsurancePage'
function PageRoutes() {
  return (
    <>
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/carinsurance' element={<CarInsurancePage/>}/>
        <Route path='/bikeinsurance' element={<BikeInsurance/>}/>
    </Routes>
    </>
    </>
  )
}

export default PageRoutes
