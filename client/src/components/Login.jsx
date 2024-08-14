import React, { useState } from 'react'
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

function Login({setLoggedIn}) {

  const [username, setusername] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate()


  const HandleSubmit = (e)=>{
    e.preventDefault()
    axios.defaults.withCredentials = true;
    axios.post('http://localhost:8000/user/signIn/',{ username, password   })
    .then((result) => {
      if(result.data.sucess){
        setLoggedIn(true);
        navigate('/courseDetail');
      }
      else{
        console.log("invalid")
      }
    })
    .catch(err => console.log(err))
    
    
  }

  return (
    <div className='bg-gray-800 min-h-screen min-w-screen flex items-center justify-center'>
      <div className='border border-white rounded-sm p-8 text-white flex flex-col text-lg max-w-fit shadow-gray-950 shadow-2xl'> 
        
        <h1 className='text-3xl text-center mb-12'>Login</h1>
        <form onSubmit={HandleSubmit}>
          <label htmlFor="username" className='mb-4' >Username</label><br />
          <input 
            type="text" 
            name='username'   
            className='mb-8 p-2 w-80 text-black rounded'  
            onChange={(e)=>setusername(e.target.value)}
          /><br />
          <label htmlFor="password" className='mb-4'>Password</label><br />
          <input 
            type="password" 
            name="password" 
            id="" 
            className='p-2 mb-8 w-full text-black rounded' 
            onChange={(e)=>setPassword(e.target.value)}
          /><br />
          <input type="submit" value="CONTINUE" className='p-2 rounded-md w-80 bg-orange-500  mb-3' />
        </form>
        <span className='text-sm text-center'>New to Arogya?</span>
      </div>
    </div>
  )
}

export default Login