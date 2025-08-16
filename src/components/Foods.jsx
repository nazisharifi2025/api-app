export default function Foods({title,img}){
    return(
        <div className="w-[370px] flex flex-col justify-center items-center h-[300px] border border-gray-200 rounded-md mx-auto px-auto ">
            <img src={img} className="" alt="" />
            <h1 className="font-bold text-xl">{title}</h1>
        </div>
    )
}