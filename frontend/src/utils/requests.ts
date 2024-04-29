import axios,{AxiosError} from "axios";
import  FileDownLoad from 'js-file-download'
import { toast } from "react-toastify";
import {useState,useEffect} from "react";

export type File ={
  id: string;
  documentId: string;
  name: string;
  size: number;
  type: string;
  createdAt: string;
  updatedAt: string;
}

export type Data= {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  files: File[];
}

export type FileData = {
files:Data[];
  page:number;
  pages:number;
}

interface UseFetchAllProps {
  pageNumber?: string;
  keyword?: string;
}

const BASE_URL = "http://localhost:3031/api/files";

export const postRequest = async (url: string, data: FormData) => {
  try {
    const response = await axios.post(url, data,{
        headers: {
            'Content-Type': 'multipart/form-data', 
          }
    });
    toast.success("File uploaded successfully");
    return response.data;
  } catch (error) {
    console.error(error);
   toast.error('Error uploading file');
  }
};

export const useFecheAll = ({pageNumber,keyword}:UseFetchAllProps) => {

  const [data, setData] = useState<FileData|null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AxiosError>();
  console.log(keyword)

  const orginalURl=pageNumber?`${BASE_URL}?pageNumber=${pageNumber}`:keyword?`${BASE_URL}?keyword=${keyword}`:BASE_URL;


  useEffect(() => {
    setLoading(true);
    axios
      .get(`${orginalURl}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [orginalURl]);

return { data, loading, error };

}

export const usePost = (url: string,file: FormData) => {
  const [data, setData] = useState<Data|null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AxiosError>();

  useEffect(() => {
    setLoading(true);
    axios
      .post(url,file)
      .then((response) => {
        setData(response.data);
        toast.success("File uploaded successfully");
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url,file]);

return { data, loading, error };
  }

export const useDelete = (url:string) => {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AxiosError>();

  const deleteFile = async (id: string) => {
   setLoading(true);
   axios.delete(`${url}/${id}`).then(() => {
      toast.success("File deleted successfully");
    }).catch((error) => {
      setError(error);
    }).finally(() => {
      setLoading(false);
    });
  };

  return { loading, error, deleteFile };
}

export const useFecheSingle = (id: string) => {
  const [data, setData] = useState<Data|null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AxiosError>();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${BASE_URL}/${id}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

return { data, loading, error };

}

export const useUpdate = () => {
  const [data, setData] = useState<Data|null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AxiosError>();

  const updateFile = async (id: string,file: FormData) => {
    setLoading(true);
    axios.put(`${BASE_URL}/${id}`,file,{
      headers: {
        'Content-Type': 'multipart/form-data', 
      }
    }).then(() => {
      setData(data);
      setError(error);
       toast.success("File Updated successfully");
     }).catch((error) => {
       toast.error(error.message);
     }).finally(() => {
       setLoading(false);
     });
   };

return { data, loading, error, updateFile };
  }

  export const downloadFile = async (filename:string)=>{
    axios.get(`http://localhost:3031/api/files/download/${filename}`,
      {
        responseType: 'blob',
       method: 'GET',
      }
    )
    .then(response => {
        FileDownLoad(response.data,filename)
    })
    .catch(error => {
        console.error(error);
    });
  }



