import React from 'react'

export default function TailInput({ type, id, ref, onFocus }) {
    return (

        <>
            <div className="bg-gray-50 border border-gray-300
                           text-gray-900 text-lg rounded-lg  text-center
                           focus:ring-blue-500 focus:border-blue-500 block w-full p-1"/>

            <form className="p-5 flex items-center w-full mx-auto">
                <label htmlFor="search" className="sr-only">Search</label>
                <div className="relative w-10/12">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 18 20">
                            <path stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-4.35-4.35M17 10.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z" />
                        </svg>
                    </div>


                    <input type={type}
                        id={id}
                        onFocus={onFocus}
                        ref={ref}
                        className="bg-gray-50 border border-gray-300 
                                                               text-gray-900 text-sm rounded-lg 
                                                               focus:ring-blue-500 focus:border-blue-500 
                                                                block w-full ps-10 p-2.5"
                        placeholder="관광지를 검색해 보세요!" required />
                </div>
            </form>
        </>

    )
}
