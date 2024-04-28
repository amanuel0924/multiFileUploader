import React from 'react';
import { FaEdit,FaTrashAlt,FaRegEye } from "react-icons/fa";

export  const Table:React.FC=()=> {
  return (
    <div className="flex flex-col">
    <div className="-m-1.5 overflow-x-auto">
      <div className="p-1.5 min-w-full inline-block align-middle">
        <div className="overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">#</th>
                <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">title</th>
                <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Description</th>
                <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Action</th>
              </tr>
            </thead>
            <tbody>
             
              
  
             
  
              <tr  className="odd:bg-white even:bg-gray-100">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">45</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">John Brown</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">Sidney No. 1 Lake Park</td>
                <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium space-x-3">
                <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-yellow-500 hover:text-yellow-700 disabled:opacity-50 disabled:pointer-events-none"><FaRegEye size={23} /> </button> 
                  <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:pointer-events-none"><FaEdit size={20}/></button>
                  <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-red-400 hover:text-red-600 disabled:opacity-50 disabled:pointer-events-none"><FaTrashAlt size={20}/></button>
                </td>
              </tr>  
            
             
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  );
}

