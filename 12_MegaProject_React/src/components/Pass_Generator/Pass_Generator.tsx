import {useCallback, useEffect, useId, useState} from 'react'

function Pass_Generator() {
  const labelId: any = useId()
  const [length, setLength] = useState(0)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('Hello')
  const [copyColor, setCopyColor] = useState('#007FFF')

  const passwordGenerator = useCallback(()=>{

    let passwordString = "abcdefghijklmnopqrstwxyz"
      passwordString += passwordString.toUpperCase()
      let passGenerated = ""
      let NumString = "0123456789"
      let charString = "!@#$%^&*()<>?:;{}"

      if (numAllowed)
          passwordString += NumString
      if (charAllowed)
        passwordString += charString
      
      
      for(let i=0; i<length; i++){
        let index = Math.floor(Math.random() * passwordString.length + 1) 
        passGenerated += passwordString[index]
      }      
      return passGenerated

  }, [length, numAllowed, charAllowed])

  function copyPassword(){
      setCopyColor('#005FFF')
      window.navigator.clipboard.writeText(password)
  }


  useEffect(()=>{
    const pass = passwordGenerator()
    console.log(pass)
    
    setPassword(pass)
  }, [length, numAllowed, charAllowed, Pass_Generator])
      
  
  
  return (

    <div className="h-[400px] w-full bg-slate-950 grid place-content-center text-slate-100 ">   

      <div className="max-w-md h-auto bg-slate-800 rounded  grid place-content-center px-8 shadow-2xl shadow-slate-900">
        
        <div className='flex space-x-2 mt-7'>
          <label htmlFor={labelId}></label>
          <input id={labelId} type="text" placeholder="Password" className='rounded px-4 py-2 text-slate-900'
          value={password} readOnly/>

          <button 
          className='px-5 py-2 rounded'
          style={{backgroundColor: copyColor}} 
          onClick={copyPassword} >Copy</button>
        </div>

        <div className='flex space-x-5 my-6'>
            <div id='length'>
              <label htmlFor="length" className='text-gray-400    mb-1'>Length:</label><br/>
              <input id='length' type="range" min={0} max={16}     className='cursor-pointer' value={length} onChange={(e)=>setLength(Number(e.target.value))}/>
            </div>

          <div className='mt-5'>
            <label htmlFor="Number" className='text-gray-400'>Number:</label>
            <input id='Number' type="checkbox" checked={numAllowed} className='ml-2' onChange={()=> setNumAllowed((prev)=>!prev)} />
          </div>

          <div className='mt-5'>
            <label htmlFor="Number" className='text-gray-400'>Characters:</label>
            <input id='Number' type="checkbox" checked={charAllowed} className='ml-2' onChange={()=>setCharAllowed((prev)=>!prev)} />
          </div>

        </div>

        {/* Generate Button */}
        <div className='mb-5 flex justify-center'>
          <button
          className='px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded'>Generate Password</button>
        </div>

      </div>
        
    </div>
  )
}

export default Pass_Generator
