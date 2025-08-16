export default function Foods({title,img}){
    return(
        <div className="w-[230px] h-[300px]  ">
            <img src={img} className="" alt="" />
            <h1>{title}</h1>
        </div>
    )
}