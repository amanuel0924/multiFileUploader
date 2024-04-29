import { Navbar } from './componets/Navbar'
import { Files } from './pages/Files';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Upload } from './pages/Upload';
import { DetailPage } from './pages/Details';
import { UpdatePage } from './pages/UpdatePage';

function App() {
 
  return (
    <><BrowserRouter>
     <Navbar/>
		<Routes>
			<Route path="/" element={<Upload />} />
			<Route path="/files" element={ <Files/>} />
      <Route path="/files/:id" element={<DetailPage/>} />
      <Route path="/files/update/:id" element={<UpdatePage/>} />
		</Routes>
  <ToastContainer />
  </BrowserRouter>
    </>
  )
}

export default App
