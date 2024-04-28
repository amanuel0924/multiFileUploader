import fs from "fs";
import { Request, Response} from "express";
import { File } from "../models/fileModel";
import Document from "../models/documentModel";
import path from "path";




export const createFile= async (req: Request, res: Response) => {
     
    try {
        if(req.files&&req.body.description&&req.body.title){
            const  document=await Document.create({description:req.body.description,title:req.body.title});
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

export const deleteFile= async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const doc:Document|null = await Document.findByPk(id, {include: ['files']});
        if (!doc) {
            return res.status(404).json({ error: "File not found" });
        }
     
        if(doc.files){
            await Promise.all(
                doc.files.map(async (file) => {
                    await fs.promises.unlink(path.join(__dirname, '..','uploads',file.name));
                    })
            );
        }

        await doc.destroy();
        return res.status(200).json({ message: "File deleted successfully" });
    }
    catch (error:any) {
        return res.status(500).json({ error: error.message });
    }
}