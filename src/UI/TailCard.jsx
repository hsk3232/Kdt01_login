import React from 'react'

export default function TailCard({ title, subtitle, imgurl, kws }) {
  if(kws == "")
    kws = "미정";
  else kws;

  let arr = kws.split(',').map(item => item.trim());


  return (

    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm
            dark:bg-gray-800 dark:border-gray-700">
        <img className="rounded-t-lg" src={imgurl} alt="" />

        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight
              text-gray-900 dark:text-white">{title}</h5>

          <p className="mb-3 font-normal text-gray-700
                  dark:text-gray-400">{subtitle}</p>
          <div className="flex flex-wrap justify-start items-end gap-2 ">
            {arr.map((keyword, index) => (
              <span
                key={index}
                className="w-auto px-3 py-1 text-sm font-medium 
                        text-white bg-blue-700 rounded-lg 
                        hover:bg-blue-800 focus:ring-4 focus:outline-none
                         focus:ring-blue-300 
                         dark:bg-blue-600 dark:hover:bg-blue-700
                          dark:focus:ring-blue-800"
              >
                {keyword}
              </span>
            ))}

          </div>
        </div>
    </div>
  )
}
