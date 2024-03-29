import  { useState } from 'react'

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
    setCounter(count + 1)
    setCounter(count + 1) 
    setCounter(count + 1)   /*Will be Increament One Time */

    // For Multiple Add-On
    // setCounter( (prevCounter)=>(prevCounter + 1))
    // setCounter( (prevCounter)=>(prevCounter + 1))
    // setCounter( (prevCounter)=>(prevCounter + 1))
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
