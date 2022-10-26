import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

//Exercício 01

app.get("/",(req:Request, res:Response)=>{
  
  res.status(200).send("Hello from Express")
})









app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});