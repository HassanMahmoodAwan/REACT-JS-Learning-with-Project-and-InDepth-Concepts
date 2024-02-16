import React, { useEffect, useState } from 'react'
// ===== Optimized Method: Loader =====
import { useLoaderData } from 'react-router-dom'


function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect( ()=>{
    //     fetch("https://api.github.com/users/HassanMahmoodAwan")
    //     .then( res => res.json())
    //     .then(res =>  setData(res))
    // }, [])

  return (
    <div>
     <h1>
        GitHub Followers: {data.followers}
     </h1>  
     
     <img src={data.avatar_url} alt='Git Profile Picture' width={300}></img>
    </div>
  )
}

export default Github

export  async function gitDataInfo(){
    const response = await fetch("https://api.github.com/users/HassanMahmoodAwan")

    return response.json()
}
