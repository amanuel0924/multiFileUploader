import { FaXmark } from "react-icons/fa6";


interface ModalProps {
    open: boolean;
    onClose:()=>void;
    children?: React.ReactNode;
}

export const Modal = ({open,onClose,children}:ModalProps) => {
  return (
    <div onClick={onClose} className={`fixed inset-0 flex justify-center items-center transition-colors ${open?"visible bg-black/20":"invisible"}`} >
        <div onClick={(e)=>e.stopPropagation()}  className={`bg-white rounded-xl shadow p-6 transition-all ${open?'scale-100 opacity-100':'scale-125 opacity-0'}`}>
        <button onClick={onClose} className='absolute top-2 right-2 text-2xl text-gray-500 hover:text-gray-900'><FaXmark/></button>
        {children}
        </div>
    </div>
  )
}
