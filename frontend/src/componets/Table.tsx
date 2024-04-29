import React from 'react';
import { FaEdit,FaTrashAlt,FaRegEye } from "react-icons/fa";
import { Data } from '../utils/requests';
import { useDelete } from '../utils/requests';
import Spinner from './Spinner';
import { Link } from 'react-router-dom';


interface TableProps {
  data: Data[];
}

export  const Table:React.FC<TableProps>=({data})=> {
  
  const {loading,error,deleteFile}=useDelete('http://localhost:3031/api/files/');

  const handeleClick = (id:string)=>{
    const confirm = window.confirm('Are you sure you want to delete this file?');
    if(confirm){
     deleteFile(id);
     window.location.reload();
    }

  }


  return (
   <>
   {loading &&<Spinner /> }
   {error && <h1 className=' bg-red-100 text-red-500 text-xl font-medium text-center border-r-2 p-5 mx-10 mt-36  '>{error.message}</h1>}
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
              {
                data.map((item,index)=>{
                  return(
                    <tr  className="odd:bg-white even:bg-gray-100">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{index+1}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{item.title}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{item.description}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium space-x-3">
                      <Link to={`/files/update/${item.id}`} type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-yellow-500 hover:text-yellow-700 disabled:opacity-50 disabled:pointer-events-none"><FaEdit size={20}/> </Link> 
                        <Link to={`/files/${item.id}`} type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:pointer-events-none"><FaRegEye size={23} /></Link>
                        <button type="button"   className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-red-400 hover:text-red-600 disabled:opacity-50 disabled:pointer-events-none" onClick={()=>handeleClick(item.id)}><FaTrashAlt size={20}/></button>
                      </td>
                   </tr>  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
   </>
  );
}

