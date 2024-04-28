import express from 'express';
import { createFile,deleteFile,getFilesById} from '../controllers/fileController';
import uploader from './../controllers/uploadController';

const router = express.Router();

router.post('/',uploader,createFile);
router.delete('/:id',deleteFile);
router.get('/:id',getFilesById);

export default router;