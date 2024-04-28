import express from 'express';
import { createFile,deleteFile,getFilesById,updateFile} from '../controllers/fileController';
import uploader from './../controllers/uploadController';

const router = express.Router();

router.post('/',uploader,createFile);
router.delete('/:id',deleteFile);
router.get('/:id',getFilesById);
router.put('/:id',uploader,updateFile);

export default router;