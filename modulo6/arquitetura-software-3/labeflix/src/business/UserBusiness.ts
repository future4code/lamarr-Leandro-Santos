import { UserDatabase } from "../data/UserDatabase";
import { CustomError } from "../error/CustomError";
import { InvalidEmail, InvalidPassword } from "../error/UserErrors";
import { userDTO, UserInputDTO } from "../model/userDTO";
import { generateId } from "../services/idGenerator";
import { User } from "../types/User";

export class UserBusiness {
  public create = async (input: userDTO) => {
    try {
      const { name, email, password } = input;

      if (!email || !name || !password) {
        throw new CustomError(
          400,
          'Preencha os campos "name", "email" e "password"'
        );
      }
      if (!email.includes("@")) {
        throw new InvalidEmail();
      }

      if (password.length <= 6) {
        throw new InvalidPassword();
      }

      const id = generateId();

      const userDatabase = new UserDatabase();

      const userInput: UserInputDTO = {
        id: id,
        name: name,
        email: email,
        password: password,
      };

      await userDatabase.create({ userInput });
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
  };

  public getUsers = async () => {
    try {
      const userDatabase = new UserDatabase();
      return await userDatabase.getUsers();
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
  };
}
