import React from 'react'

export const Footer:React.FC = () => {
    const year = new Date().getFullYear()
  return (
    <div className=' flex w-full h-20 items-center justify-center bg-gray-200 rounded-t-md opacity-80 shadow-md  mt-4 p-3 dark:bg-gray-900 dark:text-teal-700  '>
         <div className=" text-center py-3">
            <p>Multi-File-uploader &copy; {year}</p>
          </div>
    </div>
  )
}
