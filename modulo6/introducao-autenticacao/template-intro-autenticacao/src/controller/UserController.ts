import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserDatabase } from "../data/UserDatabase";
import { EditUserInputDTO, LoginInputDTO, UserInputDTO } from "../model/user";
import { Authenticator } from "../services/Authenticator";

export class UserController {

      public signup = async (req: Request, res: Response) => {
        try {
          const { name, nickname, email, password } = req.body;
    
          const input: UserInputDTO = {
            name,
            nickname,
            email,
            password,
          };
          const userBusiness = new UserBusiness()
          const token = await userBusiness.signup(input);
    
          res.status(201).send({ message: "Usuário criado!", token });
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      };    


      public login = async (req: Request, res: Response) => {
        try {
          const { email, password } = req.body; 
    
          const input: LoginInputDTO = {
            email,
            password,
          };
          const userBusiness = new UserBusiness()
          const token = await userBusiness.login(input);
    
          res.status(200).send({ token });
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      };    


      public editUser = async (req: Request, res: Response) => {
        try {
          
          const input: EditUserInputDTO = {
            name: req.body.name,
            nickname: req.body.nickname,
            token: req.headers.authorization as string
          };

          const userBusiness = new UserBusiness()
          await userBusiness.editUser(input);
    
          res.status(201).send({ message: "Usuário alterado!" });
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      }; 
 
      
      public getUser = async (req: Request, res: Response, token:string) => {
        
        try {
          
          const data = Authenticator.getTokenData(token);
          if (!data) {
            throw new Error("Token inválido/expirado");
          }
      
          const userDatabase = new UserDatabase();
          const user = await userDatabase.getUserById(data.id);
          
          res.status(200).send({
            id: user.id,
            email: user.email,
          }) 
        } catch (err:any) {
          res.status(400).send({
            message: err.message,
          });
        }
      }; 



}
