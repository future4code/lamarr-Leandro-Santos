import express from "express"
import cors from 'cors'
const app = express()
import dotenv from "dotenv"

dotenv.config();

app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3003, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`);
});

export default app;