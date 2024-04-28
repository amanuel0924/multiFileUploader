import express from 'express';
import { createFile} from '../controllers/fileController';
import uploader from './../controllers/uploadController';

const router = express.Router();

router.post('/',uploader,createFile);

export default router;