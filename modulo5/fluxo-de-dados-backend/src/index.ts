import express, { Request, Response } from "express";
import { products } from "./data";

import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors());

//Exercício 01

app.get("/test", (req: Request, res: Response) => {
  res.status(201).send("Servidor rodando na porta 3003");
});

//Exercício 02
//Está criado o arquivo data.ts na pasta src

//Exercício 03
//Está criado o arquivo type.ts na pasta src

//Exercício 04

//Endpoint da lista completa
app.post("/create-product", (req: Request, res: Response) => {
  const addName = req.body.name;
  const addPrice = req.body.price;

  products.push({ id: Date.now().toString(), name: addName, price: addPrice });
  res.status(201).send(products);
});

//Exercício 05
app.get("/product-list", (req: Request, res: Response) => {
  const productsList = products.map((product) => {
    return product;
  });

  res.status(201).send(productsList);
});

//Exercício 06
app.put("/edit-price", (req: Request, res: Response) => {
  const id = req.body.id;
  const newPrice = req.body.price;

  for (const item of products) {
    if (item.id === id) {
      item.price = newPrice;
    }
  }

  res.status(201).send(products);
});

//Exercício 07
app.delete("/delete-product", (req: Request, res: Response) => {
  const id = req.query.id;

  const deleteProduct = products.filter((item) => {
    return item.id !== id;
  });

  res.status(201).send(deleteProduct);
});

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});
