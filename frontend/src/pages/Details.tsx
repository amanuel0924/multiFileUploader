import Spinner from "../componets/Spinner";
import { useFecheSingle } from "../utils/requests";
import { useParams } from "react-router-dom";
import { downloadFile } from "../utils/requests";

export const DetailPage = () => {
  const { id } = useParams();
  const {data,loading,error} = useFecheSingle(`${id}`)
  

  return (
    <div className=" md:container mx-auto dark:bg-gray-800 py-8 shadow-lg">
      {loading && <Spinner />}
      {error &&<h1 className=' bg-red-100 text-red-500 text-xl font-medium text-center border-r-2 p-5 mx-10 mt-36  '>{error.message}</h1>}
      {data && <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
        <div className="md:flex-1 px-4 my-12">
            <h2 className="text-2xl font-bold text-teal-700 dark:text-white mb-2">
              {data?.title}
            </h2>
            <div>
             
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-8">
               {data?.description}
              </p>
            </div>
          </div>
          <div className="md:flex-1 px-4 my-4 shadow-lg">
            <div className="h-[460px] rounded-lg  dark:bg-gray-700 mb-4 overflow-auto">

            <table className="min-w-full h-fit">
              <thead className="bg-white border-b dark:bg-teal-700">
                <tr>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    #
                  </th>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    file name
                  </th>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    size
                  </th>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    action
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  data?.files.map((file,index)=>{
                    return(
                      <tr key={file.id} className={`${index % 2 === 0 ? 'bg-gray-100 dark:bg-zinc-300' : 'bg-white dark:bg-slate-400'}`}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index+1}</td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {file.name}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                       {file.size}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <button onClick={()=>downloadFile(file.name)} className=" px-3 py-1 bg-teal-800 outline-none text-white border-0 ">download</button>
                      </td>
                    </tr>
                    )
                }
                )}

              </tbody>
            </table>
            </div>
          </div>
          
        </div>
      </div>}
    </div>
  );
};

