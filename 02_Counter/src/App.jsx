import  { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [count, setCounter] = useState(0)
  let counter = 0;
  
  function addValue(){
    counter += 1
    console.log(`Counter value: ${counter}`)
  }
  function addUsingHooks(){
    setCounter(count + 1)
  }
  const removeValue = ()=>{
    if (count <= 0) setCounter(count)
    else setCounter(count - 1)
  }

  return (
    <>
      <h1>COUNTER using REACT AND JS</h1>
      <h3>Counter: {count}</h3>
      <button onClick={addValue}>ADD</button>  {/*Not Updated */}
      <button onClick={addUsingHooks}>Add using Hooks</button> 
      <button onClick= {removeValue}>Remove</button>
      <p>Result: {count}</p>
    </>
  )
}

export default App
