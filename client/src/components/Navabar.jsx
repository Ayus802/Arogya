// import { Cookies } from "react-cookie"
import { Link } from "react-router-dom"
// import ApiCall from "../server/ApiCall"
// import { LogOut } from "../server/LogOut"
import axios from "axios"

export default function Navbar({loggedIn ,setLoggedIn}){

    const LogOut = () => {
        axios.defaults.withCredentials = true
        axios.get('http://localhost:8000/user/signIn/logout')
        .then(result => {
            console.log(result)
        })
        setLoggedIn(false)
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
        <div className="fixed h-14 z-50 flex justify-between pl-3 pr-3 backdrop-blur-lg items-center cursor-pointer shadow-sm shadow-gray-400 text-white w-full">
            <div>
                <div >Arogya</div>
            </div>
            {loggedIn ? <LogedIn/>:<LoggedOut/>}
            
        </div>
    )
}