import express from 'express';
import dotenv from 'dotenv';

dotenv.config({quiet:true});

import type { Request, Response } from "express";

const app = express();
import db from '../database/knex.ts';

app.use(express.json());

const PORT = process.env.PORT;

if(!PORT){
    throw new Error("Variável de ambiente PORT não definida");
}

app.listen(Number(PORT),()=>{
    console.log(`Servidor tá up! Porta:${process.env.PORT}`)
})

