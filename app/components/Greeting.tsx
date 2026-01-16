'use client';
import { useState } from "react";

export default function GreetingInput () {
    const [names , setNames] = useState("")
   
    return (

        <div className="flex flex-col items-center gap-2 p-4 border rounder-xl bg-gray-900">
           
           <input  
             className="bg-success-soft border border-success-subtle text-fg-success-strong text-sm rounded-base focus:ring-success focus:border-success block w-full px-3 py-2.5 shadow-xs placeholder:text-fg-success-strong"
            placeholder="Comment your Thought"
            type="text"
            value={names}
            onChange={(e)=>setNames(e.target.value)}
           />
            
             <p className="font-bold text-lg text-pink-50"> Comments : {names}</p>

        </div>
    )

}