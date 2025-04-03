import React from 'react'

export default function TailSelect({ id, ops, refSel, handleChange }) {
    return (
        <div>

            <select id={id} ref={refSel}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                             focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                
                {ops.map(item => <option key={item} value={item}>{item}</option>)}

            </select>

        </div>
    )
}
