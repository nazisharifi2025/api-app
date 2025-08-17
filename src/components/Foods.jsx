import { useState } from "react"

export default function Foods({title,img,id,setfoodid}){

    return(
        <div className="w-[370px] flex flex-col justify-center text-center gap-2 items-center h-[340px] border border-gray-200 rounded-md mx-auto px-auto ">
            <img src={img} className="h-[220px] w-[90%]" alt="" />
            <h1 className="font-bold text-xl">{title}</h1>
            <button onClick={()=>setfoodid(id)} className="border border-gray-300 px-3 py-2 rounded-md hover:bg-gray-200">Learn More..</button>
        </div>
    )
}