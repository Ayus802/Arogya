import React, { useEffect, useState } from 'react'
import video from '../assets/video.mp4'
import axios from 'axios'
import { Link } from 'react-router-dom'



function Course() {

  const [courses, setCourses] = useState([])

  useEffect(()=>{
    axios.defaults.withCredentials = true
    axios.get('http://localhost:8000/user/signIn/course')
    .then((res)=>{
      setCourses(res.data)
    })
    .catch((e)=>{
      console.log(e)
    })

  },[])

  return (
    <div className=" h-max  ">
      <video src={video} loop autoPlay muted className='object-cover w-screen h-full -z-10 fixed'></video>
      <div className='flex flex-wrap items-center justify-center pt-24 flex-col'>
      <h1 className='text-8xl text-center mb-8 z-10 text-white drop-shadow-[0_3.2px_3.6px_rgba(0,0,0,0.8)] font-bold'>Courses</h1>
        {courses.map((res)=> <Link to={`/courseDetail/${res._id}`}><Card key={res._id} title={res.title} description={res.description} price={res.price}/></Link>)}
      </div>
    </div>
  )
}
function Card({title, description, price}){
  
  const truncatedDisc = description.length>200? description.slice(0,200)+"..." : description;

  return(
    <div className=' w-2/3 bg-slate-950 flex p-2 ml-28 mb-24 rounded-lg shadow-2xl shadow-slate-400 border border-white relative'>
      <div className='w-1/2 h-full m-4 '>
        <img src="https://w.wallhaven.cc/full/1p/wallhaven-1pel1v.jpg" alt="" className='rounded-xl border border-white'/>
      </div>
      <div className='w-1/2 h-full p-4'>
        <h2 className='text-3xl font-bold text-white'>{title}</h2>
        <p className='mt-4 text-lg text-white'>{truncatedDisc}</p>
        <span>{price}</span>
        <button className='bg-orange-400 w-3/4 h-12 mt-4 rounded-md ml-5 text-xl text-white'>Buy Now</button>
      </div>
    </div>
  )
}

export default Course