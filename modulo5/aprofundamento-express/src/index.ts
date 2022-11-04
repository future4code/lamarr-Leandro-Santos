import express, { Request, Response } from "express";

import cors from "cors";
import { title } from "process";

const app = express();

app.use(express.json());

app.use(cors());

//Exercício 01

app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("Pong! 🏓");
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

// Array com todos os afazeres

app.get("/todos", (req: Request, res: Response) => {
  const lists = toDoList.map((list) => {
    return list;
  });

  res.status(200).send(lists);
});

//Exercício 04

app.get("/todos/status", (req: Request, res: Response) => {
  const lists = toDoList.map((list) => {
    return list;
  });

  const newList = lists.filter((item) => {
    if (item.completed === true) {
      return lists;
    }
  });

  res.status(200).send(newList);
});

// Exercício 05

app.post("/create/todo", (req: Request, res: Response) => {
  const todoName = req.body.title;
  const addId = req.body.id;
  const addCompleted = Boolean(req.body.completed);
  const addUserid = req.headers.authorization;

  if (!todoName || !addUserid || !addId || (addCompleted && !addCompleted)) {
    res
      .status(400)
      .send(
        "⚠️ Deverá informar os campos: id, userId, title e completed, para adicionar um novo afazer.⚠️"
      );
  } else {
    toDoList.push({
      id: Number(addId),
      userId: Number(addUserid),
      title: todoName,
      completed: addCompleted,
    });
  }

  res.status(200).send(toDoList);
});

// Exercício 06

app.put("edit/", (req: Request, res: Response) => {
  res.status(200).send();
});

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});
