import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams,Link } from 'react-router-dom'

function CourseDetail() {

  let {id} = useParams();
  const [courses, setCourses] = useState([]);
  const [display, setDisplay] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:8000/user/signIn/course')
    .then((res)=>{
      setCourses(res.data)
      const course = res.data.find(course=> course._id === id);
      setDisplay(course)
    })
    .catch((e)=>{
      console.log(e)
    })

  },[id])

  function purchase(courseId){
    axios.defaults.withCredentials = true
    axios.put('http://localhost:8000/user/signIn/purchase',{
      courseId
    })
   .then((res)=>res.data)
   .catch((err)=> err)
  }
  

  
  

  return (
    <div className='bg-neutral-800 pt-14 min-h-screen overscroll-y-contain flex '>
        <div className='p-10 leading-loose min-w-96 bg-neutral-900 h-fit m-3 ml-12 mt-10 rounded-md text-white sticky top-20'>
          <h2 className='text-2xl font-medium pb-3'>All Courses</h2>
          <ul className='text-lg '>
            {courses.map((res)=><li key={res._id} className='p-3 pl-0 border-b-2 border-gray-400'>
                <Link to={`/CourseDetail/${res._id}`}>{res.title}</Link>
              </li>)}
          </ul>
        </div>
        { display && <>
                <Blueprint key={display._id} title={display.title} description={display.description} price={display.price}/>
                <button onClick={()=>purchase(display._id)} className='text-white text-wrap bg-orange-400 p-5 right-0 top-14 bottom-0  w-14 h-screen'>Buy Now</button>
                {console.log('hello ayuhs jijijiji')}
              </>
        }
      </div>
  )


  function Blueprint(props){
    return(
      <div className='p-14 text-gray-400 bg-neutral-900 m-7 mr-12 rounded-md'>
          <div className='text-6xl text-white mb-5 font-mono font-semibold'>{props.title}</div>
          <div className='text-xl '>eligibilty : Open to 6 years and above</div>
          <h1 className='text-4xl mt-8 mb-2 text-white'>Course Description</h1>
          <p className='text-xl'>{props.description}</p>
          <h1 className='text-4xl mt-8 mb-2 text-white'>Price</h1>
          <p className='text-xl'>&#x20b9; {props.price}</p>
          <h1 className='text-4xl mt-8 mb-2 text-white'>What will you learn?</h1>
          <ul className='list-disc pl-5 text-xl'>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
          </ul>
        </div>
        
    )
  }
}

export default CourseDetail