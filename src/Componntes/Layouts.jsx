import React from 'react'
import Hader from './Hader'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Layouts = () => {
  return (
    <>
    <Hader/>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layouts