import { config } from "dotenv";
config()

import type { Request, Response } from "express";
import express from 'express';

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

