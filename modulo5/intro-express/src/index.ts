import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

//Exercício 01

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Hello from Express");
});

// Exercício 02

type User = {
  id: number;
  name: string;
  phone: number;
  email: string;
  website: string;
};

// Exercício 03

const usersList: User[] = [
  {
    id: 1,
    name: "Leandro",
    phone: 123,
    email: "leandro@email.com",
    website: "string",
  },

  {
    id: 2,
    name: "Gui",
    phone: 123456,
    email: "gui@email.com",
    website: "string",
  },
  {
    id: 3,
    name: "Vitim",
    phone: 123456,
    email: "vitim@email.com",
    website: "string",
  },
  {
    id: 4,
    name: "Israel",
    phone: 123456,
    email: "israel@email.com",
    website: "string",
  },
];

// Exercício 04

app.get("/users", (req: Request, res: Response) => {
let users = usersList.map((user)=>{
  return user 
})

  res.status(200).send(users);
});

// Exercício 05

type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;  
};

 // Exercício 06
 // Prefiro criar dentro de um array, pois acho que fica mais organizado e padrão com as apis já vistas

 const postList: Post[] = [
  {
    id: 1,
    userId: 1,
    title: "Como fazer API",
    body: "Como fazer uma api bacana para o site com todos os recursos necessários",  
    
  },
  {
    id: 2,
    userId: 2,
    title: "Como encontrar a solução para bugs",
    body: "Como encontrar a solução para bugs debugando o código e o deixando mais clean",  
    
  },
  {
    id: 3,
    userId: 3,
    title: "Tudo o que você precisa saber sobre Express",
    body: "udo o que você precisa saber sobre Express, guia inicial passo a passo",  
    
  },
  {
    id: 4,
    userId: 4,
    title: "O que fazer para conquistar uma vaga",
    body: "O que fazer para conquistar uma vaga, trazemos as principais dicas para conseguir a primeira vaga dev",  
    
  },  
  
];
//Exercício 07

app.get("/posts", (req: Request, res: Response) => {
  let users = postList.map((post)=>{
    return post 
  })
  
    res.status(200).send(users);
  });



app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});
