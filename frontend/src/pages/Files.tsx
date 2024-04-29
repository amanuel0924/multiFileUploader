import React, { useState } from 'react'
import { Table } from '../componets/Table'
import { useFecheAll } from '../utils/requests'
import Spinner from '../componets/Spinner'
import { useParams } from 'react-router-dom'
import Paginate from '../componets/Paginate'


export const Files:React.FC = () => {
    const {pageNumber,keyword}=useParams()
    const {data,loading,error} = useFecheAll({pageNumber,keyword})
    const [open,setOpen]=useState()

  console.log(data)
    return (
      <div className='md:container flex flex-col p-4 mx-auto h-screen  shadow-lg '>
         {loading && <Spinner />}
          {error &&<h1 className=' bg-red-100 text-red-500 text-xl font-medium text-center border-r-2 p-5 mx-10 mt-36  '>{error.message}</h1>}
          {data?.files &&data?.files?.length>0&& <Table data={data} />}
          {data &&data?.files?.length===0&&  <div className='flex justify-center '>
      <h2 className='text-2xl font-medium text-gray-500 mt-52 '>No Files Found</h2>
    </div>}
    {data?.page && data?.pages &&!keyword&& <div className=' flex-grow relative'>
      <Paginate page={data.page} pages={data.pages}/>
      </div>}
    </div>
    )
}

