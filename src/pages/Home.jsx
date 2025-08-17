import { useState } from "react";
import Form from "../components/form";
import Foods from "../components/foods";
import Detail from "../components/Detail";

export default function Home(){
    const[foods,setfoods]= useState([]);
     const [foodid , setfoodid] = useState("");
    return(
      <div>
        {/* Navbar */}
        {/* input */}
        <Form food={foods} setfoods={setfoods}/>
        {/* contener card */}
        <div className="w-full h-fit text-center font-bold text-2xl p-5">
           <Detail foodid={foodid}/>
        </div>
        {/* Detals */}
        <div className="flex flex-wrap p-2 gap-4">
            {foods.map(food=>(
                <Foods title= {food.title} img= {food.image} id={food.id} setfoodid={setfoodid}/>
            ))}
        </div>
        {/* footer */}
      </div>
    )
}