import React,{useEffect, useRef,useState} from 'react'
import fileIlustration from '../assets/fileIlustration.svg'
import { validateSize } from '../utils/fileValidator'
import {FaCloudUploadAlt} from 'react-icons/fa'
import { toast } from 'react-toastify'
import { useFecheSingle } from '../utils/requests'
import { useParams,useNavigate } from 'react-router-dom'
import Spinner from '../componets/Spinner'
import { useUpdate } from '../utils/requests'



export const UpdatePage:React.FC = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const {data,loading,error} = useFecheSingle(`${id}`)
    const {loading:updateLoading,updateFile}= useUpdate()
  const wraperRef = useRef<HTMLDivElement>(null)
  const [description,setDescription] = useState('')
  const [title,setTitle] = useState('')
  const formData:FormData = new FormData();
  const [files,setFile] = useState<FileList | null>(null)

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    wraperRef.current?.classList.add('opacity-50');
  };

  const handleDragLeave = () => {
    wraperRef.current?.classList.remove('opacity-50');
  };

  const onDropHandler = () => {
    wraperRef.current?.classList.remove('opacity-50');
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

 const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files
    if (file && file.length < 5) {
       if(validateSize(file)){
         setFile(file)
       } else{
          toast.error('single file size should not exceed 10mb')
          e.target.files = null
          setFile(null)
        }
    } else{
      toast.error('you can only upload 5 files at a time')
      e.target.files = null
      setFile(null)

    }
  };
  
  const onCancelHandler = ()=>{
    navigate('/files')
  }

  const onsubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (files && description && title) {
      for (let i = 0; i < files.length; i++) {
        formData.append('file', files[i]);
      }
      formData.append('description', description);
      formData.append('title', title);
      updateFile(`${id}`, formData);
    navigate('/')
    } else {
     toast.error('please fill all fields')
    }
  }

  useEffect(()=>{
    if(data){
      setTitle(data.title)
      setDescription(data.description)
    }
  },[data])


  return (
    <>
    {loading && <Spinner />}
    {error && <h1 className=' bg-red-100 text-red-500 text-xl font-medium text-center border-r-2 p-5 mx-10 mt-36  '>{error.message}</h1>}
    {data &&<div className='container  mt-6 h-screen flex justify-center items-center  mx-auto '>
        <form onSubmit={onsubmitHandler} className='flex flex-col items-center mx-6    p-2 h-screen w-[400px]  md:w-[500px] dark:shadow-xl dark:shadow-gray-900  '  >
           <div ref={wraperRef} onDragEnter={handleDragEnter} onDragStart={handleDragEnter} onDragLeave={handleDragLeave} onDrop={onDropHandler}   className='w-full border-dashed border-4 border-gray-600  rounded-lg relative flex items-center justify-center dark:bg-gray-700  bg-teal-50 hover:cursor-pointer hover:opacity-50 '>
           <div className=' text-center relative '>
               <img src={fileIlustration} alt='file ilustration' className=' w-full shadow-2xl ' />
               <p className=' absolute md:left-24 left-16 font-bold sm:text-lg text-small text-gray-600 top-1/2  '><FaCloudUploadAlt size={38}  className=' absolute top-10 left-24'/> Drag & Drop file here or click</p>
             </div>
                <input type='file' className=' absolute top-0 left-0 w-full h-full opacity-0 hover:cursor-pointer ' multiple   onChange={handleFileChange} disabled={files&&files.length>5?true:false}  />
           </div>
            <div className='w-full mt-2  '>
              <label htmlFor='title' className='text-center text-md font-bold text-gray-700 dark:text-white '>Title</label>
              <input type='text' name='title' required id='title' value={title} onChange={(e)=>setTitle(e.target.value)} className='w-full outline-none h-10 shadow-lg border-2 p-2 border-gray-500 rounded-lg' />
            </div>
           <div className='w-full  mt-2 '>
            <label htmlFor=' description' className='text-center text-md font-bold text-gray-700 dark:text-white '>description</label>
            <textarea name='description' required id='description' value={description} onChange={handleDescriptionChange} className='w-full outline-none  p-1 h-20 shadow-lg  border-2 border-gray-500 rounded-lg'></textarea>
           </div>
          <div className='flex space-x-3 w-full min-w-fit'>
          {updateLoading? <Spinner />: <button className='py-3 mt-1 px-4 shadow-xl  md:px-12 text-white text-center bg-teal-800 rounded-lg w-fit hover:scale-105 duration-200 hover:shadow-xl ' type='submit'>Update</button>}
          <button className='py-2 mt-1 px-4 md:px-12 shadow-xl text-white text-center bg-gray-400  dark:text-gray-900 rounded-lg w-fit  hover:scale-105 duration-200 hover:shadow-xl' type='button' onClick={onCancelHandler}>Cancel</button>
          </div>

     </form>
    </div>}
    </>
  )
}
