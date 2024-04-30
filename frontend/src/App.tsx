import { Navbar } from './componets/Navbar'
import { Files } from './pages/Files';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Upload } from './pages/Upload';
import { DetailPage } from './pages/Details';
import { UpdatePage } from './pages/UpdatePage';
import { Footer } from './componets/Footer';
import { useState } from 'react';


function App() {
  const [darks, setDarks] = useState<string>("dark");
  const handleDark = () => {
    setDarks(darks === "dark" ? "" : "dark");
  };
 
  return (
    <div className={`${darks}`}>
     <div className='dark:bg-gray-800'>
     <BrowserRouter>
     <Navbar  darks={darks} handleDark={handleDark}  />
		<Routes>
			<Route path="/" element={<Upload />} />
			<Route path="/files" element={ <Files/>} />
      <Route path="/files/:pageNumber" element={ <Files/>} />
      <Route path="/search/:keyword" element={ <Files/>} />
      <Route path="/files/detail/:id" element={<DetailPage/>} />
      <Route path="/files/update/:id" element={<UpdatePage/>} />
		</Routes>
    <Footer/>
  <ToastContainer />
  </BrowserRouter>
     </div>
    </div>
  )
}

export default App
