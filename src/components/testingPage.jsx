import { useState } from "react";
export default function TestingPage(){
    const [count,setCount] = useState(0)
    return(
        <div className="w-full h-screen bg-red-900 flex justify-center items-center flex-col text-5xl">
            
            <h1> {count} </h1>

            <button onClick={
                ()=>{
                    const newCount = count + 1;
                     setCount(newCount)
                     
                }
            }>
                COUNT
            </button>
            
        </div>
    )
}