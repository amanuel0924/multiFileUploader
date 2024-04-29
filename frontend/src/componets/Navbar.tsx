import React, { useState } from 'react'
import Logo from './../assets/Logo.png'
import { Link,useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


export const Navbar:React.FC = () => {
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
    <div className='grid grid-cols-3 mt-1 rounded-lg shadow-md m-2 p-3 '>
        <div className='mx-6 flex space-x-2 items-center'>
            <img src={Logo} alt='logo' className=' h-14 md:ml-20 ' />
            <h1 className=' font-bold text-xl text-teal-700'>fylo</h1>
        </div>
        <div className=' flex items-center justify-center min-w-5 '>
            <input type="text" placeholder='search' value={keyword} className=' border-2 focus:outline-none min-w-5 p-1 ' onChange={(e)=>setKeyword(e.target.value)}/>
            <button onClick={searchHandler} className='bg-teal-700 text-white p-1 border-2 border-teal-800'>Search</button>

        </div>
        <div className='  '>
             <div className='flex items-center space-x-5 text-teal-700 justify-end md:mr-20 h-full '>
             <Link to='/' className=' sm:text-sm text-md font-bold hover:text-teal-800 hover:scale-110 duration-150 hover:underline ' >Upload</Link>
              <Link to='/files' className=' sm:text-sm text-md font-bold hover:text-teal-800 hover:scale-110 duration-150 ' >Files</Link>
              <button  className=' text-2xl font-bold hover:text-teal-800 hover:scale-110 duration-150  '>X</button>
             </div>
        </div>
    </div>
  )
}
