import { useState } from 'react'


function App() {
  const [color, setColor] = useState("Olive")

  return (
    <div className="w-full h-screen duration-500" style={{backgroundColor:color}}>
      
      {/* ==== Color Pannel ==== */}
      <div className='flex flex-wrap justify-center fixed mx-5 p-2 bg-slate-300 bottom-12 inset-x-5 rounded-xl shadow-xl'>
          
          <button className='bg-red-500 px-4 py-2 mx-2 text-slate-100 rounded-2xl drop-shadow-lg' onClick={ ()=>(setColor("red"))}>
            Red
          </button>

          <button className='bg-blue-500 px-4 py-2 mx-2 text-slate-100 rounded-2xl drop-shadow-lg' onClick={ ()=>(setColor("blue"))}>
            Blue
          </button>

          <button className='bg-green-500 px-4 py-2 mx-2 text-slate-100 rounded-2xl drop-shadow-lg' onClick={ ()=>(setColor("green"))}>
            Green
          </button>

          <button className='bg-orange-500 px-4 py-2 mx-2 text-slate-100 rounded-2xl drop-shadow-lg' onClick={ ()=>(setColor("orange"))}>
            orange
          </button>

          <button className='bg-slate-100 px-4 py-2 mx-2 text-slate-900 rounded-2xl drop-shadow-lg' onClick={ ()=>(setColor("white"))}>
            white
          </button>

          <button className='bg-slate-900 px-4 py-2 mx-2 text-slate-100 rounded-2xl drop-shadow-lg' onClick={ ()=>(setColor("black"))}>
            black
          </button>
          
      </div>
    </div>
  )
}

export default App
