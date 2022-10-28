import express, { Request, Response } from "express";

import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors());

//Exercício 01

app.get("/ping", (req: Request, res: Response) => {
  res.send("Pong! 🏓");
});

//Exercício 02
type ToDo = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
};

//Exercício 03

const toDoList: ToDo[] = [
  {
    id: 1,
    userId: 1,
    title: "Comprar pão",
    completed: false,
  },
  {
    id: 1,
    userId: 2,
    title: "Comprar queijo",
    completed: false,
  },
  {
    id: 1,
    userId: 3,
    title: "Comprar presunto",
    completed: false,
  },
  {
    id: 1,
    userId: 4,
    title: "Fazer café",
    completed: true,
  },
  {
    id: 1,
    userId: 5,
    title: "Fazer suco",
    completed: true,
  },
];

//Exercício 04

app.get("/todos", (req: Request, res: Response) => {
  const lists = toDoList.map((list) => {
    return list;
  });

  const newList = lists.filter((item) => {
    if (item.completed === true) {
      return lists;
    }
  });

  res.send(newList);
});




app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});
