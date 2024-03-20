// Learn Race Condition API, Debouncing, Trohteling

import { useState, useEffect } from 'react'
import axios from "axios"


function App() {
  const [products, setProducts]= useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('')
  
  useEffect(()=>{
    ;(async ()=>{
      
      try {
        setError(false)
        setLoading(true)
        const response = await axios.get('/app/products?search='+search)
        setProducts(response.data)
        setLoading(false)
      } catch (error) {
        setError(true)
        console.log("Error Occurred")
      }
    })();
  }, [search])


  return (
    <div className='h-screen w-screen bg-gray-950 text-gray-100 text-center py-20 px-20 space-y-5'>
      <h1 className='text-4xl font-bold '>Hello to CRUD using Axios and Express</h1>

      <input type="text" value={search} placeholder='Search' className='bg-gray-700 text-white rounded'
      onChange={(e)=>setSearch(e.target.value)} />

      <p className='text-xl font-semibold'>
        {error?"Something went Wrong":loading?"Loading....":`Number of Products: ${products.length}`}
      </p>

      
      {products.map((product)=>{
        <div key={product.id}>
          hello
        </div>
      })}

    </div>
  )

}
export default App


