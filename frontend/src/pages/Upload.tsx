import React,{useRef,useState} from 'react'
import fileIlustration from '../assets/fileIlustration.svg'
import { postRequest } from '../utils/requests'
import { validateSize } from '../utils/fileValidator'
import {FaCloudUploadAlt} from 'react-icons/fa'
import { toast } from 'react-toastify'



export const Upload:React.FC = () => {
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
          //remove the file from the input
          e.target.files = null
          setFile(null)

        }
    } else{
      toast.error('you can only upload 5 files at a time')
      e.target.files = null
      setFile(null)

    }
  };

  const onsubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (files && description && title) {
      for (let i = 0; i < files.length; i++) {
        formData.append('file', files[i]);
      }
      formData.append('description', description);
      formData.append('title', title);
      postRequest('http://localhost:3031/api/files/', formData);
      setDescription('');
      setTitle('');
      setFile(null);
    } else {
     toast.error('please fill all fields')
      setFile(null);
      setDescription('');
      setTitle('');
    }
  }


  return (
    <div className='container  mt-6 h-screen  shadow-lg mx-auto'>
        <form onSubmit={onsubmitHandler} className='flex flex-col mx-6  border-4 p-2 '  >
           <div ref={wraperRef} onDragEnter={handleDragEnter} onDragStart={handleDragEnter} onDragLeave={handleDragLeave} onDrop={onDropHandler}   className='w-[500px] border-dashed border-4 border-gray-600  rounded-lg relative flex items-center justify-center bg-teal-50 hover:cursor-pointer hover:opacity-50 '>
           <div className=' text-center relative '>
               <img src={fileIlustration} alt='file ilustration' className=' w-full ' />
               <p className=' absolute left-24 font-bold text-lg text-gray-600 top-1/2  '><FaCloudUploadAlt size={48} className=' absolute top-10 left-24'/> Drag & Drop file here or click</p>
             </div>
                <input type='file' className=' absolute top-0 left-0 w-full h-full opacity-0 hover:cursor-pointer ' multiple   onChange={handleFileChange} disabled={files&&files.length>5?true:false}  />
           </div>
            <div className='w-[500px] mt-2 '>
              <label htmlFor='title' className='text-center text-md font-bold text-gray-700 '>Title</label>
              <input type='text' name='title' required id='title' value={title} onChange={(e)=>setTitle(e.target.value)} className='w-full outline-none h-8 border-2 border-gray-500 rounded-lg' />
            </div>
           <div className='w-[500px] mt-2 '>
            <label htmlFor=' description' className='text-center text-md font-bold text-gray-700 '>description</label>
            <textarea name='description' required id='description' value={description} onChange={handleDescriptionChange} className='w-full outline-none h-15 border-2 border-gray-500 rounded-lg'></textarea>
           </div>
           <button className='py-3 mt-1 px-12 text-white text-center bg-teal-800 rounded-lg w-fit' type='submit'>Upload</button>

     </form>
    </div>
  )
}
