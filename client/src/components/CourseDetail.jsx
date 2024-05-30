import React from 'react'

function CourseDetail() {
  return (
    <div className='bg-gray-700 pt-14 '>
      <div className=''>
        <img src="https://www.everwallpaper.co.uk/cdn/shop/collections/3D_Wallpaper.jpg?v=1660209305" alt="" className='w-screen h-64 -z-10 static '/>
        <span className='absolute top-32 left-1/4 right-1/4 pl-10 text-7xl text-white'>Lorem, ipsum dolor.</span>
      </div>
      <div className='flex'>
        <div className='p-10 leading-loose w-1/4'>
          <h2 className='text-2xl font-medium pb-3
          '>All Courses</h2>
          <ul className='text-lg '>
            <li className='p-3 pl-0 border-b-2 border-gray-400'>Lorem, ipsum.</li>
            <li className='p-3 pl-0 border-b-2 border-gray-400'>Lorem, ipsum dolor.</li>
            <li className='p-3 pl-0 border-b-2 border-gray-400'>lorem</li>
            <li className='p-3 pl-0 border-b-2 border-gray-400'>Lorem, ipsum dolor.</li>
            <li className='p-3 pl-0 border-b-2 border-gray-400'>Lorem, ipsum.</li>
          </ul>
        </div>
        <div className='p-10 text-gray-400'>
          <div className='text-xl '>Duration : 1 day</div>
          <div className='text-xl '>eligibilty : Open to 6 years and above</div>
          <h1 className='text-4xl mt-8 mb-2 text-white'>Course Description</h1>
          <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi!</p>
          <h1 className='text-4xl mt-8 mb-2 text-white'>Who should attend?</h1>
          <p className='text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, est veritatis!</p>
          <h1 className='text-4xl mt-8 mb-2 text-white'>What will you learn?</h1>
          <ul className='list-disc pl-5 text-xl'>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CourseDetail