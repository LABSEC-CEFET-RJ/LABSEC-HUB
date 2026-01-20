import express from 'express';
import dotenv from 'dotenv';

dotenv.config({quiet:true});


const app = express();

app.use(express.json());

const PORT = process.env.PORT;

if(!PORT){
    throw new Error("Variável de ambiente PORT não definida");
}

app.listen(Number(PORT),()=>{
    console.log(`Servidor tá up! Porta:${process.env.PORT}`)
})

