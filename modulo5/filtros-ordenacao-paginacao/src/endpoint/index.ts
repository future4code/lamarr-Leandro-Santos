import express, { Request, Response} from "express"

import cors from 'cors'
import { connection } from "../dataBase/connection"

const app = express()
app.use(express.json())
app.use(cors())

// export default async function selectAllUsers():Promise<any> {
//   const result = await connection.raw(`
//      SELECT id, name, email, type
//      FROM aula48_exercicio;
//   `)

//   return result[0]
// }

// export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
//    try {
//       const users = await selectAllUsers()
 
//       if(!users.length){
//          res.statusCode = 404
//          throw new Error("No user found")
//       }
 
//       res.status(200).send(users)
      
//    } catch (error: any) {
//       console.log(error)
//       res.send(error.message || error.sqlMessage)
//    }
//  }

//Exercício
// letra a)

export const filterUser = async(req: Request,res: Response): Promise<void> =>{
  try {
     const user = async (name: string): Promise<any> => {
       const result = await connection.raw(`
           SELECT * FROM Actor WHERE name = "${name}"
        `);
         return result[0];
       };

     if(!user.length){
        res.statusCode = 404
        throw new Error("No user found")
     }

     res.status(200).send(user)
     
  } catch (error: any) {
     console.log(error)
     res.send(error.message || error.sqlMessage)
  }
}
(async () => {
  console.log(await filterUser("", "Chijo") )
})()

//Exercício 01
//letra a)


app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});