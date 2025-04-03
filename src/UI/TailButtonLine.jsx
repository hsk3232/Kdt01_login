export default function TailButtonLine({caption, color, onClick}) {

    const border100 = {
        "blue": "border-blue-100",
        "red": "border-red-100", 
        "gray": "border-gray-100",

      }

    const bg500 ={
        "blue": "bg-blue-500",
        "red": "bg-red-500", 
         "gray": "bg-white",
      }
  
      const bgHover ={
        "blue": "hover:bg-sky-200",
        "red": "hover:bg-pink-500", 
        "gray": "",
      }
  
  
    return (
      <button className={`p-2 m-2 rounded-4xl font-bold 
                            text-xl text-black
                          border ${border100[color]} 
                          ${bg500[color]} 
                          ${bgHover[color]} 
                        
                            ${color !== "gray" && "hover:text-white"}`} 
                            onClick={onClick}>
        {caption}
      </button>
    )
}
