import express, { Request, Response } from "express";
import cors from "cors";
import { connection } from "./dataBase/connection";

const app = express();
app.use(express.json());
app.use(cors());

//EXERCÍCIO 01
//letra a) Ao usar o raw, permite que enviemos uma query para o banco usando a linguagem SQL diretamente, de forma crua, sem ter que abrir o My Sql

// letra b)

// const searchActor = async (name: string): Promise<any> => {
//   const result = await connection.raw(`
//     SELECT * FROM Actor WHERE name = "${name}"
//   `);
//   return result[0];
// };
// (async () => {
//   console.log(await searchActor("Victor Motta") )
// })()

//letra c)

// const searchGender = async (gender: string): Promise<any> => {
//   const result = await connection.raw(`
//     SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
//   `);
//   const count = result[0][0].count;
//   return count;
// };
// (async () => {
//   console.log(await searchGender("female") )
// })(),
// (async () => {
//   console.log(await searchGender("male") )
// })()

//Exercício 02
//letra a)
// const update = async (salary: number, id: string): Promise<void> => {


//   await connection("Actor")
//     .update({
//       salary: salary,
//     })
//     .where("id", id);
// };
// (async () => {
//   console.log(await update(10, "004"));
// })();

//letra b)

// const deleteActor = async (id: string): Promise<void> => {
//   await connection("Actor")
//     .delete()
//     .where("id", id);
// }; 
// (async () => {
//   console.log(await deleteActor("001"));
// })();
// //Não consegui deletar pois tem Foreign key

// app.listen(3003, () => {
//   console.log("Server is running in http://localhost:3003");
// });
