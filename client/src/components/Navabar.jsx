import { Link } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"

export default function Navbar({loggedIn,setLoggedIn}){
    


    const LogOut = () => {
        axios.defaults.withCredentials = true
        axios.get('http://localhost:8000/user/signin/logout')
        .then(result => {
            setLoggedIn(false);
            console.log(result)
        })
        console.log("logged out" )
    }
    

    function LoggedOut(){
                return(
                    <div className={" items-center p-2 flex"} >
                        <Link >Home</Link>
                        <Link to='/login' className={"px-3 py-2 hover:bg-red-300 rounded"}>Login</Link>
                        
                        <Link to='/signup' className="px-3 py-2 hover:bg-red-300 rounded">SignUp</Link>
                    </div>
                )
            }
            
        
    function LogedIn(){
            return(
                <div className={" items-center p-2 flex"} >
                    <div  >Watchlist</div>
                    <div className={"px-3 py-2 hover:bg-red-300 rounded"}>Purchased</div>
                    <div className="px-3 py-2 hover:bg-red-300 rounded" onClick={LogOut(setLoggedIn)}>Logout</div>
                </div>
            )
        }
    return(
        <div className="sticky h-14 z-50 flex justify-between pl-3 pr-3 backdrop-blur-lg items-center cursor-pointer shadow-sm shadow-gray-400 text-white w-full">
            <div>
                <div >Arogya</div>
            </div>
           { loggedIn ? <LoggedOut/> : <LogedIn/>}
        </div>
    )
}