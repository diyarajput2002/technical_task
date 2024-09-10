import { CiLocationOn } from "react-icons/ci";
const Navbar = () => {
  return (
    <div className="w-full h-12 flex bg-gradient-to-r from-[#262553] to-[#693442]
 justify-between">
        <div className="flex  w-1/2 px-3 py-2 text-xl gap-6 items-end">
          <img src="/assets/logo (4) 1.png" alt="" className="h-10 w-52" />
          
          <p className="text-[#F35863] flex items-center gap-1">
          <CiLocationOn className="text-white w-4 h-4" />
            Noida</p>
        </div>
        <div className="flex w-1/3 justify-center items-center text-sm gap-2">
        <button className="text-white border border-1  px-3 py-1 rounded-full">Post Property</button>
        <button className="text-white border border-1  px-3 py-1 rounded-md" >Login</button>
        <button className="text-white bg-[#F35863]  px-3 py-1 rounded-md">Register</button>
        <img src="/assets/Heart.png" alt="" />
        </div>
    </div>
  )
}


export default Navbar