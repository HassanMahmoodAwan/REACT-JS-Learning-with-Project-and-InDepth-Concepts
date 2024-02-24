// import React from 'react'

function Home() {
  return (
    <div className="h-[400px] bg-slate-950 grid place-content-center text-white">
        <h1 className="text-3xl font-bold text-slate-100 ">Utility APP with Lots of Functions</h1>
        <p className="mt-3 text-md text-slate-500 text-center">Design By Hassan Mahmood</p>

        <div id="Portfolio" className="mt-8 flex justify-center space-x-5">
            <button className="px-6 py-2 rounded bg-blue-600 hover:bg-blue-700">
              Portfolio
            </button>
            <button className=" px-6 py-2 rounded outline outline-blue-800 hover:bg-blue-800" >
              GitHub
            </button>
        </div>
    </div>
  )
}

export default Home
