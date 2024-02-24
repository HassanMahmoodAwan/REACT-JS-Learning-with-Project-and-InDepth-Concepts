import {NavLink} from 'react-router-dom'

function Footer() {
  return (
    <section className="h-[250px] w-full relative bottom-0 bg-gray-950 border border-1 border-gray-800">
        <div className="h-full w-full flex justify-between items-center px-8">
            
            <div id="logo" className="text-xl font-bold text-blue-500">Utilities APP</div>

            <ul className="space-y-3 text-gray-300 ">
                <li>
                <NavLink to='/' className={({isActive})=>`${isActive ? 'text-blue-400':'text-blue-100'}`}>
                    Home
                </NavLink>
                </li>
                
                <li>
                <NavLink to='/pass_Generator' className={({isActive})=>`${isActive ? 'text-blue-400':'text-blue-100'}`}>
                    Pass_Generator
                </NavLink>
                </li>

                <li>
                  <NavLink to='/curr_Converter' className={({isActive})=>`${isActive ? 'text-blue-400':'text-blue-100'}`}>
                    curr-Convert
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

            <div id="Icons" className="flex space-x-2 text-gray-200">
                <div className="border-2 border-blue-500 rounded-full p-2">T</div>
                <div className="border-2 border-blue-500 rounded-full p-2">L</div>
                <div className="border-2 border-blue-500 rounded-full p-2">G</div>
                
            </div>

        </div>
    </section>
  )
}

export default Footer
