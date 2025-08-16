import { useState } from "react";
import Form from "../components/form";
import Foods from "../components/foods";

export default function Home(){
    const[foods,setfoods]= useState([]);
    return(
      <div>
        {/* Navbar */}
        {/* input */}
        <Form foods={foods} setfoods={setfoods}/>
        {/* contener card */}
        <div className="flex justify-between flex-wrap p-6 gap-3">
            {foods.map(food=>(
                <Foods title= {food.title} img= {food.image}/>
            ))}
        </div>
        {/* footer */}
      </div>
    )
}