import {useState, useCallback, useEffect, useRef} from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')
  const [copyColor, setCopyColor] = useState('#007FFF')

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTWXYZabcdefghijklmnopqrstwxyz'

    if (numberAllowed) str += '123456789'
    if (charAllowed) str += '!@#$%^&*(){}|/?'

    for (let i=0; i<= length; i++){
      let charIndex = parseInt(Math.random() * str.length + 1)
      pass += str.charAt(charIndex)
    }
    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  const copyClipboard = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 17)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(()=>{passwordGenerator()}, [length,numberAllowed, charAllowed, passwordGenerator])

  return (
    <div className="bg-slate-900 w-full h-screen text-white p-10 flex justify-center">
      <div className="fixed w-full max-w-lg bg-slate-800 rounded-xl p-5">
          
          <h1 className="text-center text-4xl mb-10">Password Generator</h1>
          
          <div className="flex">
            <input 
            type="text" 
            placeholder="Password" 
            value={password} 
            readOnly 
            ref={passwordRef}
            className="p-2 rounded  text-black w-full shadow-md" />

            <button 
            className=" ml-2 p-3 rounded shadow-md" 
            style={{backgroundColor: copyColor}} 
            onClick={()=>{
              setCopyColor("#002D62")
              copyClipboard()
              }}>Copy
            </button>
          </div>

        <div className='flex mt-5'>
          <div className='flex  align-center'>
            <input 
            type='range'
            min={8}
            max={16}
            value={length}
            onChange={ (e)=>{setLength(e.target.value)}}
            className='cursor-pointer mr-2' />
            
            <label className='text-orange-300'>Length: {length}</label>
          </div>

          <div className='flex align-center'>
            <input 
            type='checkBox'
            defaultChecked = {numberAllowed}
            onChange={ ()=>{setNumberAllowed((prev) => !prev ) }}
            className='cursor-pointer ml-4' />
            <label className='text-orange-300'>Number</label>
          </div>

          <div className='flex align-center'>
            <input 
            type='checkBox'
            defaultChecked = {charAllowed}
            onChange={ ()=>{setCharAllowed((prev) => !prev) }}
            className='cursor-pointer ml-4' />
            <label className='text-orange-300'>Characters</label>
          </div>


        </div>

      </div>
    </div>
  )
}

export default App
