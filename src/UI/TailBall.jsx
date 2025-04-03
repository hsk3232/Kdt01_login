export default function TailBall({n}) {
    console.log(n)
  const bgColors = {
    "n0": "bg-red-500",
    "n1": "bg-yellow-500",
    "n2": "bg-indigo-500",
    "n3": "bg-green-500",
    "n4": "bg-blue-500",
  }


  
    return (
    <div className={`w-16 h-16 
                    ${bgColors["n"+Math.floor(n/10)]}
                    flex 
                    mr-5
                    justify-center 
                    items-center
                    text-2xl
                    text-white
                    rounded-full`}>
      {n}
    </div>
  )
}
