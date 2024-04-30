import React from 'react'
import { Link } from 'react-router-dom'
import fileIlustration from '../assets/fileIlustration.svg'

export const LandingPage:React.FC = () => {
  return (
    <div className=' max-w-6xl mx-auto h-screen flex flex-col sm:flex-row space-y-6 sm:space-y-0 space-x-0 sm:space-x-10 m-4 justify-center items-center'>
        <div className='flex flex-col space-y-3 text-center sm:text-left w-1/2 sm:mx-20 '>
            <h1 className=' text-teal-700 text-3xl sm:text-5xl   font-bold'>Welcome to the MultiFile Uploader</h1>

            <p className='text-gray-500 text-center sm:text-left  dark:text-white '>
        MultiFile Uploader is a simple and efficient tool for uploading multiple files simultaneously.
         Whether you need to upload images, documents, or any other file types,it's that simple!
      </p> 

      <Link to={'/upload'} className=' bg-teal-700 text-white self-center sm:self-start mt-8 px-4 py-2 outline-none border-none w-fit'>
        Upload Now
      </Link>
        
            
        </div>
        <div className=' p-5 w-1/2 '>
        <img src={fileIlustration} alt='file ilustration' className=' w-full shadow-2xl  ' />
        </div>

    </div>
  )
}
