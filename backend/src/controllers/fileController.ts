import fs from "fs";
import { Request, Response} from "express";
import { File } from "../models/fileModel";
import Document from "../models/documentModel";
import path from "path";




export const createFile= async (req: Request, res: Response) => {
     
    try {
        if(req.files&&req.body.description){
            const  document=await Document.create({description:req.body.description});
            const files= req.files as Express.Multer.File[];
            let createdFiles:File[] =[]
            await Promise.all(
                files.map(async (file) => {
                  const name = file.filename;
                  const size = file.size;
                  const type = path.extname(file.originalname);
                  const currentFile:File= await File.create({ name, size, type, documentId: document.id });
                    createdFiles.push(currentFile);
                })
              );
            return res.status(201).json({ message: "Files created successfully" ,
            data:{
                documentId:document.id,
                description:document.description,
                files:createdFiles
            }});
        }
        else
        {
            return res.status(500).json({ message: "File not found"});
        }
    } catch (error:any) {
        return res.status(500).json({ error: error.message });
    }
}