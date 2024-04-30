import React, { useState } from 'react'
import Logo from './../assets/Logo.png'
import { Link,useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import {FaSun, FaRegMoon } from "react-icons/fa"

interface NavProps{
  darks: string
  handleDark: () => void
}

export const Navbar:React.FC <NavProps> = ({darks,handleDark}) => {
  const navigate = useNavigate()
  const [keyword, setKeyword] = useState('')


  const searchHandler = () => {
    if (keyword.trim()) {
      navigate(`/search/${keyword}`)
      setKeyword("")
    } else {
      toast.error('please provied search input')
      setKeyword("")
    }

  }

  

  return (
    <div className='grid grid-cols-3 mb-1 rounded-lg shadow-md p-3 w-full  '>
        <Link to={'/'} className='mx-6 flex space-x-2 items-center'>
            <img src={Logo} alt='logo' className=' h-9 sm:h-14 md:ml-20 ' />
            <h1 className=' font-bold text-xl  text-teal-700'>fylo</h1>
        </Link>
        <div className=' flex items-center justify-center min-w-3  '>
            <input type="text" placeholder='search' value={keyword} className=' border-2 focus:outline-none min-w-5 p-1 rounded-l-md ' onChange={(e)=>setKeyword(e.target.value)}/>
            <button onClick={searchHandler} className='bg-teal-700 text-white p-1 border-2 border-teal-800 rounded-r-md'>Search</button>
        </div>
        <div className='  '>
             <div className='flex items-center space-x-2 sm:space-x-5  text-teal-700 justify-end md:mr-20 h-full '>
             <Link to='/' className=' text-sm sm:text-md font-bold hover:text-teal-800 hover:scale-110 duration-150 hover:underline ' >Upload</Link>
              <Link to='/files' className=' text-sm md:text-md font-bold hover:text-teal-800 hover:scale-110 duration-150 hover:underline ' >Files</Link>
              <button onClick={() => handleDark()}  className='  font-bold hover:text-teal-800 hover:scale-110 duration-150  '>  {darks ? <FaSun size={24} /> : <FaRegMoon size={24} />}</button>
             </div>
        </div>
    </div>
  )
}
