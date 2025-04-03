import { Link } from "react-router-dom"

export default function TailNave() {
    return (
        <div className="w-10/12 mb-5">
            <ul className=" bg-gray-900 flex justify-center items-center">
                <li >

                    <Link to="/lotto" className="inline-block mr-5 text-white bg-gradient-to-r
                             from-purple-500 to-pink-500 hover:bg-gradient-to-l 
                             focus:ring-4 focus:outline-none focus:ring-purple-200 
                             dark:focus:ring-purple-800 font-bold rounded-lg 
                             text-sm px-5 py-2.5 text-center 
                             me-2 mt-2 mb-2">Lotto</Link>
                </li>

                <li >
                    <Link to="/boxOffice" className="mr-5 text-white bg-gradient-to-br
                 from-pink-500 to-orange-400 hover:bg-gradient-to-bl 
                 focus:ring-4 focus:outline-none focus:ring-pink-200
                  dark:focus:ring-pink-800 font-bold 
                  rounded-lg text-sm px-5 py-2.5 text-center 
                  me-2 mt-2 mb-2">BoxOffice</Link></li>

                <li >
                    <Link to="/treffic" className="text-white bg-gradient-to-br
                     from-green-400 to-blue-600 hover:bg-gradient-to-bl
                      focus:ring-4 focus:outline-none focus:ring-green-200
                      dark:focus:ring-green-800 font-bold 
                      rounded-lg text-sm mr-5 px-5 py-2.5 text-center 
                   me-2 mt-2 mb-2">Treffic</Link></li>

                <li >
                    <Link to="/FoodMain" className="text-white bg-gradient-to-br from-pink-500
                     to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none
                      focus:ring-pink-200 dark:focus:ring-pink-800 font-bold 
                   rounded-lg text-sm px-5 py-2.5  mr-5 text-center 
                   me-2 mt-2 mb-2">FoodMain</Link></li>


                <li >
                    <Link to="/Gallery" className="text-gray-900 bg-gradient-to-r
                 from-teal-200 to-lime-200 hover:bg-gradient-to-l
                  hover:from-teal-200 hover:to-lime-200 focus:ring-4 
                  focus:outline-none focus:ring-lime-200
                   dark:focus:ring-teal-700 font-bold 
                   rounded-lg text-sm px-5 py-2.5 mr-5 text-center 
                   me-2 mt-2 mb-2">Gallery</Link></li>


                <li >
                    <Link to="/Festival" className="text-white bg-gradient-to-br
                     from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none
                      focus:ring-blue-300 dark:focus:ring-blue-800 font-medium  
                   rounded-lg text-sm px-5 py-2.5 mr-5 text-center 
                   me-2 mt-2 mb-2">Festival</Link></li>

                <li >
                    <Link to="/Fcst" className="text-white bg-gradient-to-br
                     from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none
                      focus:ring-blue-300 dark:focus:ring-blue-800 font-medium  
                   rounded-lg text-sm px-5 py-2.5 mr-5 text-center 
                   me-2 mt-2 mb-2">Fcst</Link></li>

                <li >
                    <Link to="/MyDiv1" className="text-white bg-gradient-to-br
                     from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none
                      focus:ring-blue-300 dark:focus:ring-blue-800 font-medium  
                   rounded-lg text-sm px-5 py-2.5 mr-5 text-center 
                   me-2 mt-2 mb-2">MyDiv1</Link></li>


            </ul>
        </div>
    )
}
