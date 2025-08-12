import 'dotenv/config'
import express from 'express';
import VMRoutes from './routes/VMRoutes.js';
import cors from 'cors';

const app = express()

const port = process.env.PORT 

app.use(cors()); 
app.use(express.json()); 
app.use(VMRoutes)

app.listen(port, () => {
  console.log(`Server runing at the port: ${port} \nGood Hacking! 👀`)
})
