import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { CustomError } from "../error/CustomError";
import { userDTO } from "../model/userDTO";

export class UserController {
  async create(req: Request, res: Response): Promise<void> {
    try {
      const { name, email, password } = req.body;

      const input: userDTO = {
        name,
        email,
        password,
      };

      const userBusiness = new UserBusiness();
      await userBusiness.create(input);

      res.status(201).send({ message: "Usuário cadastrado com sucesso" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }

  public getUsers = async (req: Request, res: Response) => {
    try {
      const userBusiness = new UserBusiness();
      const users = await userBusiness.getUsers();

      res.status(201).send(users);
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
  };
}
