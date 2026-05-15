import express from 'express';
import dotenv from 'dotenv';
import router from './routes';
import { errorHandler } from './middleware/errorHandler';

dotenv.config({quiet:true});
const app = express();

app.use(express.json());
app.use(router)
app.use(errorHandler)

const PORT = process.env.PORT;
const host = process.env.DB_HOST

if(!PORT){
    throw new Error("Variável de ambiente PORT não definida");
}

app.listen(Number(PORT),()=>{
    console.log(`Servidor tá up! Porta:${process.env.PORT}`)
})

