import React from 'react';
import { FaEdit,FaTrashAlt,FaRegEye } from "react-icons/fa";
import { FileData} from '../types/types';

import Spinner from './Spinner';
import { Link } from 'react-router-dom';
import { AxiosError } from 'axios';




interface TableProps {
  data: FileData;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setid: React.Dispatch<React.SetStateAction<string>>;
  loading: boolean;
  error: AxiosError<unknown> | undefined;
}

export  const Table:React.FC<TableProps>=({data,loading,error,setid,setOpen})=> {
  const{files} =data


  return (
   <>
   {loading &&<Spinner /> }
   {error && <h1 className=' bg-red-100 text-red-500 text-xl font-medium text-center border-r-2 p-5 mx-10 mt-36 dark:bg-teal-900 '>{error?.message}</h1>}
    <div className="flex flex-col dark:bg-gray-700 mt-3">
    <div className="-m-1.5 overflow-x-auto">
      <div className="p-1.5 min-w-full inline-block align-middle  ">
        <div className="overflow-hidden rounded-lg ">
          <table className="min-w-full divide-y  divide-gray-200   ">
            <thead className='dark:bg-teal-700  ' >
              <tr>
                <th scope="col" className="px-6 py-3 text-start text-xs font-medium dark:text-gray-900  text-gray-500 uppercase">#</th>
                <th scope="col" className="px-6 py-3 text-start text-xs font-medium dark:text-gray-900 text-gray-500 uppercase">title</th>
                <th scope="col" className="px-6 py-3 text-start text-xs font-medium dark:text-gray-900 text-gray-500 uppercase">Description</th>
                <th scope="col" className="px-6 py-3 text-end text-xs font-medium dark:text-gray-900 text-gray-500 uppercase">Action</th>
              </tr>
            </thead>
            <tbody>
              {
               files.map((item,index)=>{
                  return(
                    <tr  className="odd:bg-white even:bg-gray-100 dark:even:bg-zinc-400 dark:odd:bg-zinc-200 ">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{index+1}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{item.title}</td>
                      <td className="px-6 py-4  text-sm text-gray-800">{item.description}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium space-x-3">
                      <Link to={`/files/update/${item.id}`} type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent dark:text-zinc-800 text-yellow-500 hover:text-yellow-700 disabled:opacity-50 disabled:pointer-events-none hover:scale-110 "><FaEdit size={20}/> </Link> 
                        <Link to={`/files/detail/${item.id}`} type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent dark:text-zinc-800 text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:pointer-events-none  hover:scale-110"><FaRegEye size={23} /></Link>
                        <button type="button"   className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent dark:text-zinc-800 text-red-400 hover:text-red-600 disabled:opacity-50 disabled:pointer-events-none  hover:scale-110" onClick={()=>{
                          setid(item.id)
                          setOpen(true)
                        }}><FaTrashAlt size={20}/></button>
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

