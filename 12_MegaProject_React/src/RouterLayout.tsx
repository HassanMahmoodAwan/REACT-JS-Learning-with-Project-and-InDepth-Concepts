// import React from 'react'
import {Outlet} from 'react-router-dom'
import { Footer, Navbar } from './components'

function RouterLayout() {
  return (
    <div className='h-screen bg-slate-950'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default RouterLayout
