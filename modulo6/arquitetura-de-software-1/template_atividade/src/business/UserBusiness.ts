import { UserDatabase } from "../data/UserDatabase";

export class UserBusiness {
  createUser = async (input: any): Promise<void> => {
    try {
      const { name, email, password } = input;

      if(!input.name || !input.email || !input.password ){
        throw new Error("Please fill all the fields");
    }

    if(input.email.indexOf("@") === -1){
        throw new Error("Invalid Email");
    }

    if(input.password.length < 6){
        throw new Error("Password must have at least 6 characters");
    }
      const id: string = Date.now().toString();

      const userDatabase = new UserDatabase();
      await userDatabase.insertUser({
        id,
        name,
        email,
        password,
      });
      


      
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  allUsers  = async (): Promise<void> => {
    const userDatabase = new UserDatabase();
      await userDatabase.allUsers
  }

  


  deleteUser = () => {};
}
