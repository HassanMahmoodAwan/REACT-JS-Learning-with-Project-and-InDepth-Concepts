import React, {useContext, useState} from 'react'
import UserContext from '../context/UserContext'



function Login() {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    
    const {setUser} = useContext(UserContext)

    function handleuserLogin(e){
        e.preventDefault()
        setUser( {userName, password})
    }
  return (
    <div >
      <h1>USER LOGIN</h1>
      <input type='text' placeholder='userName' value={userName} onChange={ (e)=>(setUserName(e.target.value))} />
      <input type='password' placeholder='Password' value={password} onChange={ (e) => (setPassword(e.target.value))} />

      <button  onClick={handleuserLogin}> lOGIN </button>
    </div>
  )
}

export default Login
