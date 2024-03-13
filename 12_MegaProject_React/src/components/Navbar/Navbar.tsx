// import React from 'react'

import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <div className='h-14 w-full sticky top-0 bg-gray-900 text-white z-10'>   
        <div className="h-full w-full px-8 flex justify-between items-center">
            <div className="text-blue-500 text-xl font-bold">Utilites APP</div>
            <ul className="hidden md:flex space-x-8">
                <li>
                  <NavLink to='/' className={({isActive})=> `${isActive ? 'text-blue-400': 'text-blue-100'}`}>
                    Home
                  </NavLink>
                </li>

                <li>
                  <NavLink to='/pass_Generator' className={({isActive})=>`${isActive ? 'text-blue-400':'text-blue-100'}`}>
                    Pass-Generate
                  </NavLink>
                </li>
                
                
                <li>
                  <NavLink to='/curr_Converter' className={({isActive})=>`${isActive ? 'text-blue-400':'text-blue-100'}`}>
                    Curr-Convert
                  </NavLink>
                </li>

                
                <li>
                  <NavLink to='/curr_Converter' className={({isActive})=>`${isActive ? 'text-blue-400':'text-blue-100'}`}>
                      Todo-Props
                  </NavLink>
                </li>

                
                <li>
                  <NavLink to='/curr_Converter' className={({isActive})=>`${isActive ? 'text-blue-400':'text-blue-100'}`}>
                    Todo-C_API
                  </NavLink>
                </li>

                
                <li>
                  <NavLink to='/curr_Converter' className={({isActive})=>`${isActive ? 'text-blue-400':'text-blue-100'}`}>
                    Todo-Redux
                  </NavLink>
                </li>
                
            </ul>

            <button className="hidden lg:block bg-blue-700 px-5 py-2 rounded hover:bg-blue-800">Linkedin</button>

            {/* Hamburger Icon */}
            <div className="block md:hidden text-3xl cursor-pointer text-blue-400">&#9776;</div>

        </div>
    </div>
  )
}

export default Navbar
