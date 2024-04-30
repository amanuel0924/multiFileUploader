import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { DBconnection } from './config/dbConfig';
import  fileRoutes  from './routes/fileRoutes';
import { notFound,errorHandler} from './middleware/errorHandler'
import morgan from 'morgan';

dotenv.config();
DBconnection();

const app = express();
const port = process.env.PORT||3031 ;


app.use(cors({
    origin: '*', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/files', fileRoutes);


app.use("*",notFound);
app.use(errorHandler);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


  
