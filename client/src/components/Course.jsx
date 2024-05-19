import React from 'react'

function Course() {
  return (
    <div className=" h-max pt-24 bg-[url('https://w.wallhaven.cc/full/1p/wallhaven-1pel1v.jpg')] bg-contain">
      <h1 className='text-8xl text-center mb-8 text-shad'>Courses</h1>
      <div className='flex flex-wrap items-center justify-center'>
        <Card className='ml-56'/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  )
}
function Card(){
  return(
    <div className=' w-2/3 bg-white flex p-2 ml-28 mb-24 rounded-lg shadow-2xl shadow-slate-400  relative'>
      <div className='w-1/2 h-full m-4 '>
        <img src="https://w.wallhaven.cc/full/1p/wallhaven-1pel1v.jpg" alt="" className='rounded-xl'/>
      </div>
      <div className='w-1/2 h-full p-4'>
        <h2 className='text-3xl font-bold'>Title Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem!</h2>
        <p className='mt-4 text-lg'>details Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio sit accusantium incidunt ratione laudantium placeat, cupiditate neque hic iusto assumenda.</p>
        <button className='bg-orange-300 w-3/4 h-12 mt-4 rounded-md ml-5 text-xl text-white'>Buy Now</button>
      </div>
    </div>
  )
}

export default Course