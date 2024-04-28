import { Navbar } from './componets/Navbar'
import { Upload } from './pages/Upload'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
 

  return (
    <>
     <Navbar/>
      <Upload/>
      <ToastContainer />
    </>
  )
}

export default App
