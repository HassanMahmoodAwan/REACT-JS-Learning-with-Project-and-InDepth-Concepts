// import { useState } from 'react'
import Card from './Components/Card'
import './App.css'

function App() {

  const Text = "Click me"

  return (
    <>
      <h1 className='bg-green-400 rounded-xl p-4 text-black shadow-lg mb-5'>TailwindCSS</h1>

      <Card  username = "Aleena" btnText = {Text}/>
      <Card  username = "Hadia"/>
    </>
  )
}

export default App
