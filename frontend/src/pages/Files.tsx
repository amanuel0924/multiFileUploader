import React,{useState} from 'react'
import { Table } from '../componets/Table'
import { useDelete, useFecheAll } from '../utils/requests'
import Spinner from '../componets/Spinner'
import { useParams } from 'react-router-dom'
import Paginate from '../componets/Paginate'
import { Modal } from '../componets/Modal'


export const Files:React.FC = () => {
    const {pageNumber,keyword}=useParams()
    const {data,loading,error} = useFecheAll({pageNumber,keyword})
    const [open,setOpen]=useState(false)
    const {loading:deleteloading,error:deleteerror,deleteFile}=useDelete();
    const [id,setId]=useState('')
    
    const handeleClick = (id:string)=>{
      deleteFile(id);
      setOpen(false)
      window.location.reload();
   }

    return (
      <div className='md:container flex flex-col p-4 mx-auto h-screen  shadow-lg  '>
         {loading && <Spinner />}
          {error &&<h1 className=' bg-red-100 text-red-500 text-xl font-medium text-center border-r-2 p-5 mx-10 mt-36  '>{error.message}</h1>}
          {data?.files &&data?.files?.length>0&& <Table data={data} setOpen={setOpen} setid={setId} loading={deleteloading} error={deleteerror} />}
          {data &&data?.files?.length===0&&  <div className='flex justify-center '>
      <h2 className='text-2xl font-medium text-gray-500 mt-52'>No Files Found</h2>
    </div>}
    {data?.page && data?.pages &&!keyword&& <div className=' flex-grow relative'>
      <Paginate page={data.page} pages={data.pages}/>
      </div>}
      <Modal open={open} onClose={()=>setOpen(false)} >
      <div className='flex flex-col items-center  justify-center'>
        <h1 className='text-xl font-bold text-red-500'>Are you sure you want to delete this file?</h1>
        <div className='flex gap-4'>
          <button onClick={()=>handeleClick(id)} className='bg-red-500 w-full  text-white p-2 rounded-lg'>Delete</button>
          <button onClick={()=>setOpen(false)} className='bg-gray-300 w-full text-white p-2 rounded-lg'>Cancel</button>
        </div>
      </div>
    </Modal>
    </div>
    )
}

