import express, { Request, Response } from "express";
import cors from "cors";
import {users} from "./data";


const app = express();
app.use(express.json());
app.use(cors());


//Exercício 01
//a) Utiliza o método GET
//b) A entidade é /user
app.get("/user",(req: Request, res: Response)=>{
  const listUsers = users.map((user)=>{
    return user
  })
  res.status(201).send(listUsers)
})


//Exercício 02
//a) Passei via query
//b) Criando o ENUM

app.get("/users",(req: Request, res: Response)=>{
  let errorCode = 400
  try {
    // 1. pegando dados via query
    const {type} = req.query 

    if (!type ){
      errorCode = 422
          throw new Error("Informe o type para prosseguir: ADMIN ou NORMAL"); 
  }

    //2. verificando type
  if(type!== "ADMIN" && type !== "NORMAL"){
    errorCode = 402
    throw new Error("Insira um tipo de usuário válido, ADMIN ou NORMAL ");
}
const listUsers = users.filter((user)=>{
  return user.type === type
})
res.status(200).send(listUsers)

  } catch (error:any) {
    
    res.status(errorCode).send(error.message)  
  }



})

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});
