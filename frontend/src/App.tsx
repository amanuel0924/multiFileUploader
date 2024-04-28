import { Navbar } from './componets/Navbar'
//import { Upload } from './pages/Upload'
import { Files } from './pages/Files';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
 

  return (
    <>
     <Navbar/>
      {/* <Upload/> */}
      <Files/>
      <ToastContainer />
    </>
  )
}

export default App
