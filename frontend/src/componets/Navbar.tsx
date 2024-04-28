import React from 'react'
import Logo from './../assets/Logo.png'


export const Navbar:React.FC = () => {
  return (
    <div className='grid grid-cols-2 mt-1 rounded-lg shadow-md m-2 p-3 '>
        <div className='mx-6 flex space-x-2 items-center'>
            <img src={Logo} alt='logo' className=' h-14 md:ml-20 ' />
            <h1 className=' font-bold text-xl text-teal-700'>fylo</h1>
        </div>
        <div className='  '>
             <div className='flex items-center space-x-5 text-teal-700 justify-end md:mr-20 h-full '>
             <p className=' text-lg font-bold hover:text-teal-800 hover:scale-110 duration-150 hover:underline ' >Upload</p>
              <p className=' text-lg font-bold hover:text-teal-800 hover:scale-110 duration-150 ' >Files</p>
              <button className=' text-2xl font-bold hover:text-teal-800 hover:scale-110 duration-150  '>X</button>
             </div>
        </div>
    </div>
  )
}
