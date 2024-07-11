import { useEffect, useState } from 'react'
import Course from './components/Course'
import Navbar from './components/Navabar'
import CourseDetail from './components/CourseDetail'
import {Routes,Route} from 'react-router-dom'
import Hero from './components/Hero'
import Login from './components/Login'
import Signup from './components/Signup'

function App() {

  const [loggedIn , setLoggedIn] = useState(false)

  return (
    <div>
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
      <Routes>
          <Route path='/login' element={<Login setLoggedIn={setLoggedIn}/>}/>
          <Route path='/signUp' element={<Signup/>}/>
          <Route path='/' element={<Hero/>}/>
          <Route path='/CourseDetail' element={<CourseDetail/>}/>
          <Route path='/course' element={<Course />}/>
      </Routes>
    </div>
  )
}

export default App
