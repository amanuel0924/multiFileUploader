import axios from "axios";
import { toast } from "react-toastify";

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