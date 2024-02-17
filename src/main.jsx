import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, createBrowserRouter, createRoutesFromElements,RouterProvider } from 'react-router-dom'
import './index.css'


import Layout from './Layouts/Layout'
// import pages 
import  Home from './page/Home'
import  Appointment from './page/Appointment'
import  About from './page/About'
import  Contact from './page/Contact'
import  Service from './page/Service'

import  Login from './page/Login'
import  Signup from './page/Signup'

import Admin from './components/users/Admin'
import Doctor from './components/users/Doctor'
import Patient from './components/users/Patient'



// import Header from './components/Header'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
  <Route path='/'  element={<Layout/>}>
    <Route  path='' element={<Home/>}/>
    <Route  path='appointment' element={<Appointment/>}/>
    <Route  path='about' element={<About/>}/>
    <Route  path='contact' element={<Contact/>}/>
    <Route  path='services' element={<Service/>}/>
  </Route>

  <Route path='register' element={<Signup/>}/>
  <Route path='login' element={<Login/>}/>

  <Route path='admin' element={<Admin/>}/>
  <Route path='doctor' element={<Doctor/>}/>
  <Route path='patient' element={<Patient/>}/>
  </>
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <RouterProvider  router={router} />
  </React.StrictMode>

)
