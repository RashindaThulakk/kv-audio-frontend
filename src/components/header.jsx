import { Link } from "react-router-dom"
import logo from "../assets/logo.jpg";
export default function Header(){
    return(
        <header className="w-full h-[120px] shadow-2xl flex justify-center items-center relative ]">
            <img src={logo} alt="logo " className="w-[100px] h-[100px] object-fill absolute left-1 border-2 rounded-full shadow-2xl border-b-gray-400"/>

            <Link to="/" className="text-[25px] font-bold m-1"> Home</Link>


           <Link to="/contact" className="text-[25px] font-bold m-1"> Contact</Link>

           <Link to="/gallery" className="text-[25px] font-bold m-1"> Gallery</Link>

           <Link to="/items" className="text-[25px] font-bold m-1"> Items</Link>
        
            
            
        
        
        
        </header>
    )
}