import { Link } from "react-router-dom"
import axios from "axios"
import { useEffect, useMemo, useState } from "react"

export default function Navbar(){
    
    const [auth, setAuth] = useState(null)

    const LogOut = () => {
        axios.defaults.withCredentials = true
        axios.get('http://localhost:8000/user/signin/logout')
        .then(result => {
            setAuth(!auth)
        })
        console.log("logged out" )
    }
    useEffect(()=>{
        axios.defaults.withCredentials = true;
        axios.get('http://localhost:8000/user/signin/userdetail')
        .then(res=>{
            console.log(res.data.message)
            res.data.message.name? setAuth(res.data): setAuth(!auth)
        })
        .catch(err=>console.log(err))
    },[]);

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
                    <Link to='/purchase' className="px-3 py-2 hover:bg-red-300 rounded">Purchase</Link>
                    <div className="px-3 py-2 hover:bg-red-300 rounded" onClick={LogOut}>Logout</div>
                </div>
            )
        }
    return(
        <div className=" h-14 z-50 flex justify-between pl-3 pr-3 backdrop-blur-lg items-center cursor-pointer shadow-sm shadow-gray-400 text-white w-full">
            <div>
                <div >Arogya</div>
            </div>
            
           {useMemo(()=>auth ? <LogedIn/> :<LoggedOut/>,[auth])  }
        </div>
    )
}