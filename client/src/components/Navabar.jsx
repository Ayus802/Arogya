// import { div } from "react-router-dom"
export default function Navbar(){
    return(
    <>
        <div className="fixed h-14 z-50 flex justify-between pl-3 pr-3 backdrop-blur-lg items-center cursor-pointer shadow-sm shadow-black text-black w-full">
            <div>
                <div >Arogya</div>
            </div>
            <div className={" items-center p-2 flex"} >
                <div >Home</div>
                <div className={"px-3 py-2 hover:bg-red-300 rounded"}>Login</div>
                <div className="px-3 py-2 hover:bg-red-300 rounded">SignUp</div>
            </div>
        </div>
    </>
    )
}