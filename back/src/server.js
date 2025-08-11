import 'dotenv/config'
import express from 'express';
const app = express()

const port = process.env.PORT 

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port} \nGood Hacking! 👀`)
})
