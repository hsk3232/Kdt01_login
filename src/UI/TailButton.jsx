export default function TailButton({caption, color, onClick}) {
    const bg ={
      "blue": "bg-blue-500",
      "red": "bg-red-500", 
      "yellow": "bg-yellow-500"
    }

    const bgHover ={
      "blue": "hover:bg-purple-500",
      "red": "hover:bg-yellow-500", 
      "yellow": "hover:bg-blue-500"
  
    }


  return (
    <button className={`w-full p-2 m-2 text-base hover:font-bold rounded-xl shadow-lg
     shadow-gray-500/50 text-white ${bg[color]} ${bgHover[color]}`} onClick={onClick}>
      {caption}
    </button>
  )
}
