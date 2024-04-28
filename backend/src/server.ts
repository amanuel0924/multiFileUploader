import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { DBconnection } from './config/dbConfig';


dotenv.config();
DBconnection();

const app = express();
const port = process.env.PORT||3031 ;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

