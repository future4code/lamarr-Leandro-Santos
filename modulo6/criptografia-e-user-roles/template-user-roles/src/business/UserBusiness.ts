import { UserDatabase } from "../data/UserDatabase";
import {
  CustomError,
  InvalidEmail,
  InvalidName,
  InvalidPassword,
  InvalidPasswordLength,
  InvalidRole,
  Unauthorized,
  UnauthorizedRole,
  UserNotFound,
} from "../error/customError";
import {
  UserInputDTO,
  user,
  EditUserInputDTO,
  EditUserInput,
  LoginInputDTO,
  UserRole,
} from "../model/user";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { TokenGenerator } from "../services/TokenGenerator";

const idGenerator = new IdGenerator();
const tokenGenerator = new TokenGenerator();
const hashManager = new HashManager();
const userDatabase = new UserDatabase();

export class UserBusiness {
  public createUser = async (input: UserInputDTO): Promise<string> => {
    try {
      const { name, nickname, email, password, role } = input;

      if (!name || !nickname || !email || !password || !role) {
        throw new CustomError(
          400,
          'Preencha os campos "name", "nickname", "email", "password" e "role"'
        );
      }

      if (name.length < 3) {
        throw new InvalidName();
      }

      if (password.length < 6) {
        throw new InvalidPasswordLength();
      }

      if (!email.includes("@")) {
        throw new InvalidEmail();
      }

      if (role.toUpperCase() != UserRole.ADMIN && role.toUpperCase() != UserRole.NORMAL) {
        throw new InvalidRole();        
      }

      const id: string = idGenerator.generateId();

      const hashPassword: string = await hashManager.hash(password);

      const user: user = {
        id,
        name,
        nickname,
        email,
        password: hashPassword,
        role
      };

      await userDatabase.insertUser(user);
      const token = tokenGenerator.generateToken(id, role);

      return token;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public login = async (input: LoginInputDTO): Promise<string> => {
    try {
      const { email, password } = input;

      if (!email || !password) {
        throw new CustomError(400, 'Preencha os campos"email" e "password"');
      }

      if (!email.includes("@")) {
        throw new InvalidEmail();
      }

      const user = await userDatabase.findUser(email);

      if (!user) {
        throw new UserNotFound();
      }

      const isValidPassword: boolean = await hashManager.compare(
        password,
        user.password
      );

      if (!isValidPassword) {
        throw new InvalidPassword();
      }

      const token = tokenGenerator.generateToken(user.id, user.role);

      return token;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public editUser = async (input: EditUserInputDTO) => {
    try {
      const { name, nickname, id, token } = input;

      if (!name || !nickname || !id || !token) {
        throw new CustomError(
          400,
          'Preencha os campos "id", "name", "nickname" e "token"'
        );
      }

      const data = tokenGenerator.tokenData(token);
      // requisição pro banco foi embora
      if (data.role.toUpperCase()!==UserRole.ADMIN){
        throw new UnauthorizedRole()
      }

      if (!data.id) {
        throw new Unauthorized();
      }

      if (name.length < 4) {
        throw new InvalidName();
      }

      const editUserInput: EditUserInput = {
        id,
        name,
        nickname,
      };
      await userDatabase.editUser(editUserInput);
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };
}
