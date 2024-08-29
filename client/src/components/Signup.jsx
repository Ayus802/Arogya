import axios from 'axios'
import React from 'react'
import { useState } from 'react'



function Signup() {

  const [username, setusername] = useState('')
const [password, setPassword] =useState('')
const [name, setName] = useState('')

const Handle = ()=>{
  axios.post('http://localhost:8000/user/signUp/', { 
    name : name,
    username : username,
    password : password
   }).then((res)=>{
    console.log(res)
   }).catch((err)=>{
    console.warn(err)
   })
}

  return (
    <div className='bg-slate-900 h-min-screen'>
      <input type="text" placeholder='name' onChange={(e)=>setName(e.target.value)}/>
      <input type="text" placeholder='username' onChange={e=>setusername(e.target.value)}/>
      <input type="password" name="" id="" placeholder='password' onChange={e=>setPassword(e.target.value)}/>
      <button type="submit" onClick={Handle}>SignUp</button>
    </div>
  )
}

export default Signup