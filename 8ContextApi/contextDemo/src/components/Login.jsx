import React, { useState, useContext } from 'react'
import userContext from '../context/userContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {setUser} = useContext(userContext)

    const handleSubmit = ()=>{
        e.preventDefault()
        setUser({username, password})

    }

  return (
    <>
    <h2>Login</h2>
    <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='username'/>
    <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password'/>
    <button onClick={handleSubmit}>Submit</button>
    
    </>
  )
}

export default Login