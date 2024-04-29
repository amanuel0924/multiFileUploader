import React from 'react'
import { Table } from '../componets/Table'
import { useFecheAll } from '../utils/requests'
import Spinner from '../componets/Spinner'


export const Files:React.FC = () => {
  const {data,loading,error} = useFecheAll('http://localhost:3031/api/files/')

  return (
    <div className='md:container p-4 mx-auto h-screen shadow-lg '>
       {loading && <Spinner />}
        {error &&<h1 className=' bg-red-100 text-red-500 text-xl font-medium text-center border-r-2 p-5 mx-10 mt-36  '>{error.message}</h1>}
        {data &&data.length>0&& <Table data={data} />}
        {data &&data.length===0&&  <div className='flex justify-center '>
    <h2 className='text-2xl font-medium text-gray-500 mt-52 '>No Files Found</h2>
  </div>}
  </div>
  )
}

