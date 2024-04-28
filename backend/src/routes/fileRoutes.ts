import express from 'express';
import { createFile,deleteFile} from '../controllers/fileController';
import uploader from './../controllers/uploadController';

const router = express.Router();

router.post('/',uploader,createFile);
router.delete('/:id',deleteFile);

export default router;