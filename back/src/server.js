import 'dotenv/config'
import express from 'express';
import VMService from './services/VMService.js';
const app = express()

const port = process.env.PORT 

app.get('/inicia', (req, res) => {
  res.send(VMService.createVM())
})

app.get('/ip', (req, res) => {
  res.send(VMService.returnIPVM());
})

app.get('/mata', (req, res) => {
  res.send(VMService.KillVM());
})



app.listen(port, () => {
  console.log(`Server runing at the port: ${port} \nGood Hacking! 👀`)
})
