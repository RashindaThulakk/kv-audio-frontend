import { BiBookmarks } from "react-icons/bi";
import { LuUserPlus } from "react-icons/lu";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { PiSpeakerHifiBold } from "react-icons/pi";
import { Link, Route, Routes } from "react-router-dom";

export default function AdminPage() {
  return (
    
    <div className="w-full h-screen flex">
      {/* Sidebar */}
      <div className="w-[300px] h-full bg-red-900 flex flex-col items-center">
        <Link
          to="/admin/dashboard"
          className="w-full h-[40px] text-[25px] font-bold flex justify-center items-center text-white"
        >
          <MdOutlineDashboardCustomize className="size-[30px]" />
          Dashboard
        </Link>

        <Link
          to="/admin/bookings"
          className="w-full h-[40px] text-[25px] font-bold flex justify-center items-center text-white"
        >
          <BiBookmarks className="size-[30px]" />
          Bookings
        </Link>

        <Link
          to="/admin/items"
          className="w-full h-[40px] text-[25px] font-bold flex justify-center items-center text-white"
        >
          <PiSpeakerHifiBold className="size-[30px]" />
          Items
        </Link>

        <Link
          to="/admin/users"
          className="w-full h-[40px] text-[25px] font-bold flex justify-center items-center text-white"
        >
          <LuUserPlus className="size-[30px]" />
          Users
        </Link>
      </div>

     {/* Content Area */}
     <div className="w-[calc(100vw-300px)] h-full bg-red-300 p-5">
        <Routes>
          <Route path="/admin/dashboard" element={<h1>Dashboard</h1>} />
          <Route path="/admin/bookings" element={<h1>Bookings</h1>} />
          <Route path="/admin/items" element={<h1>Items</h1>} />
          <Route path="/admin/users" element={<h1>Users</h1>} />
          <Route path="/admin/*" element={<h1>Page not found</h1>}/>
        </Routes>
        
      </div>

      
    </div>
  );
}
