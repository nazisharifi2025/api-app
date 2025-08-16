import { useEffect, useState } from "react"
const url = "https://api.spoonacular.com/recipes/complexSearch";
const apiKey = "79b0d8fd2d7247c09aa6c52d4c8b1abd";
export default function Form({food,setfoods}){
    const[name , setName] = useState("beans");
    useEffect(()=>{
       async function fitchfood(){
         const data= await  fetch(`${url}?query=${name}&apiKey=${apiKey}`); 
         const respons = await data.json();
         setfoods(respons.results)
        }
        fitchfood()
    },[name]) 
    return(
        <div className="h-[50%] w-full flex justify-center items-center">
            <label htmlFor="name" className="w-full flex-col flex items-center justify-center">
                <span>Recipi Name:</span>
            <input type="text"
            value={name}
            onChange={(e)=> setName(e.target.value )}
             className="py-2 px-4 border w-[60%] mx-auto rounded-full outline-0"
             placeholder="search your Resepi food"
            id="name"
            />
            </label>
        </div>
    )
}