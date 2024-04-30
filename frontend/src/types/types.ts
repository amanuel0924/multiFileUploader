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