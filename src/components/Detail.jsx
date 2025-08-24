import { useEffect, useState } from "react";

const url = "https://api.spoonacular.com/recipes/";
const apiKey = "79b0d8fd2d7247c09aa6c52d4c8b1abd";
export default function Detail({foodid}){
    const [details , setDetails] = useState({});
    useEffect (()=>{
     async function fetchdata(){
        const data = await fetch(`${url}${foodid}/information?apiKey=${apiKey}`);
      const respons = await data.json();
      console.log(respons);
      setDetails(respons);
      }
      fetchdata();
    },[foodid])
    return( 
        <div className="shadow-md shadow-gray-400 w-[90%] flex flex-col h-fit bg-gray-50 items-center p-3 mx-auto font-light">
             <div className="flex justify-between w-full">
            <img src={details.image} className="h-fit w-fit rounded-md shadow-md shadow-grey-400 " alt="" />
            <div className="w-[80%] text-center p-2">
                <h1 className="font-bold text-2xl">instructions</h1>
                <p>{details.instructions}</p>
            </div>
            </div>
            <div>
                 <h1 className="font-bold text-2xl">extendedIngredients</h1>
            <div className="flex justify-start items-start my-5 text-center flex-wrap  gap-3  ">
                {Array.isArray(details.extendedIngredients) && details.extendedIngredients.map(ing=>(
                    <span className=" border-r h-18 text-center flex justify-center items-center p-2"  key={ing.id || ing.name}>
                        {ing.aisle}
                    </span>
                ))}
            </div>
            
             </div>
             <div className="w-full flex justify-between p-5 ">
                <span className="p-2 border border-gray-300 rounded-xl">{details.readyInMinutes} </span>
                <span className="p-2 border border-gray-300 rounded-xl">{details.pricePerServing}</span>
            </div>
        </div>
    )
}