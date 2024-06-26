import fs from "fs";
import  { Request, Response,NextFunction} from "express";
import { File } from "../models/fileModel";
import Document from "../models/documentModel";
import path from "path";
import { Op } from "sequelize";




export const createFile= async (req: Request, res: Response,next:NextFunction) => {
     
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
                id:document.id,
                description:document.description,
                title:document.title,
                files:createdFiles
            }});
        }
        else
        {
            
            res.status(400);
           throw new Error("Please provide all the required fields");
        }
    } catch (error:any) {
        console.log(error)
        next(error);
    }
}


export const deleteFile= async (req: Request, res: Response,next:NextFunction) => {
    try {
          
        console.log(__dirname)
        const { id } = req.params;
        const doc:Document|null = await Document.findByPk(id, {include: ['files']});
        if (!doc) {
           res.status(404);
              throw new Error("File not found");
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

        next(error);
    }
}

export const getFilesById= async (req: Request, res: Response ,next:NextFunction) => {
    try {
        const { id } = req.params;
        const doc:Document|null = await Document.findByPk(id, {
            include: ['files']
        });
        if (!doc) {
             res.status(404)
            throw new Error("File not found");
        }
        return res.status(200).json(doc);
    } catch (error:any) {
       next(error);
    }
}
export const updateFile= async (req: Request, res: Response,next:NextFunction) => {
    try {
        const { id } = req.params;
        let createdFiles:File[] =[]
        const doc:Document|null = await Document.findByPk(id, {include: ['files']});
        if (!doc) {
             res.status(404)
            throw new Error("File not found");
        }
        if(req.files){
            const files= req.files as Express.Multer.File[];
          
            // delete all files in the folder
            if(doc.files){
                await Promise.all(
                    doc.files.map(async (file) => {
                        await fs.promises.unlink(path.join(__dirname, '..','uploads',file.name));
                        await file.destroy();
                        }
                ));
            }
            // create new files in the folder
            await Promise.all(
                files.map(async (file) => {
                  const name = file.filename;
                  const size = file.size;
                  const type = path.extname(file.originalname);
                 const currentFile:File= await File.create({ name, size, type, documentId: doc.id });
                    createdFiles.push(currentFile);
                })
              );
        }
        doc.description=req.body.description||doc.description;
        doc.title=req.body.title||doc.title;
        await doc.save();
        return res.status(200).json({ message: "File updated successfully" , data:{
            id:doc.id,
            description:doc.description,
            title:doc.title,
            files:createdFiles
        }});
    }
    catch (error:any) {
        next(error);
    }
}

export const  getAllFile= async (req: Request, res: Response,next:NextFunction) => {
    try {
        const pageSize = 7
        const page = Number(req.query.pageNumber) || 1
        const keyword = req.query.keyword
        let where = {};
        if (keyword) {
          where = {
            title: { [Op.like]: `%${keyword}%` }
          };
        }
        const count= await Document.count({
            distinct: true,
            col: 'id',
            where,
        })
       
        
        
        const Documents= await Document.findAll({
        include: ['files'],
        where,
        order: [['createdAt', 'DESC']],
        limit: pageSize,
        offset: (page - 1) * pageSize,
        });
        if (!Documents) {
            res.status(404)
            throw new Error("Files not found");
        }
        return res.status(200).json({
            files:Documents,
            page,
            pages: Math.ceil(count / pageSize),
        });
    } catch (error:any) {
       next(error);
    }
}

export const downloadFile = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const filename = req.params.filename;
      res.download(path.join(__dirname, '..', 'uploads', filename), (err) => {
        if (err) {
          
          res.status(404).send({ message: 'Download was cancelled or file not found.' });
        }
      });
  
    } catch (error: any) {
      next(error);
    }
  }