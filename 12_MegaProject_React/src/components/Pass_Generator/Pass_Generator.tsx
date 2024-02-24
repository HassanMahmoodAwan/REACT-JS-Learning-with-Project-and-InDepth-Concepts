import {useId} from 'react'

function Pass_Generator() {
  const labelId: any = useId()
  return (

    <div className="h-[400px] w-full bg-slate-950 grid place-content-center text-slate-100">   

      <div className="max-w-md h-48 bg-slate-800 rounded  grid place-content-center px-8">
        
        <div className='flex space-x-2'>
          <label htmlFor={labelId}></label>
          <input id={labelId} type="text" placeholder="Password" className='rounded px-4 py-2'></input>

          <button className='px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded'>Copy</button>
        </div>

        <div className='flex space-x-5 my-6'>
            <div id='length'>
              <label htmlFor="length" className='text-gray-400    mb-1'>Length:</label><br/>
              <input id='length' type="range" min={8} max={52}     className='cursor-pointer'/>
            </div>

          <div className='mt-5'>
            <label htmlFor="Number" className='text-gray-400'>Number:</label>
            <input id='Number' type="checkbox" checked={false} className='ml-2' />
          </div>
        </div>

        

      </div>
        
    </div>
  )
}

export default Pass_Generator
