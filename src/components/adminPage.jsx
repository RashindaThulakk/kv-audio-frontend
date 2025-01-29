import { BiBookmarks } from "react-icons/bi";
import { LuUserPlus } from "react-icons/lu";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { PiSpeakerHifiBold } from "react-icons/pi";

export default function AdminPage(){
    return(
        <div className='w-full h-screen flex '>

        <div className='w-[400px] h-full bg-red-900 flex flex-col items-center'>

            <button className='w-full h-[40px] text-[25px] font-bold flex justify-center items-center'>
            <MdOutlineDashboardCustomize className='size-[30px]'/>
            Dashboard
            </button>

            <button className='w-full h-[40px] text-[25px] font-bold flex justify-center items-center'>
            <BiBookmarks className='size-[30px]'/>

            Bookings
            </button>

            <button className='w-full h-[40px] text-[25px] font-bold flex justify-center items-center'>
            <PiSpeakerHifiBold className='size-[30px]'/>
            Items
            </button>

            <button className='w-full h-[40px] text-[25px] font-bold flex justify-center '>
            <LuUserPlus className='size-[30px]'/>
            Users
            </button>
        
        </div>

        <div className='w-full h-full bg-red-300'>
        
        </div>

      
  </div>

    )
}