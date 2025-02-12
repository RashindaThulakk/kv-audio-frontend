import { Link } from "react-router-dom";

export default function ErrorNotFound(){
    return(
        <div>
            <h1>Error Not Found</h1>
            

            <Link
                      to="/"
                      className="w-full h-[40px] text-[25px] text-white p-1.5 m-3 outline-2 bg-amber-900 "
                    >
                       
                      Back to Home Page
                    </Link>
        </div>
    )
}