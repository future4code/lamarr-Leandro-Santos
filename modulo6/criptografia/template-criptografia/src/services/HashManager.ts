import * as bcrypt from "bcryptjs";

export class HashManager {
  generateHash = async (plaintext: string): Promise<string> => {
    //cost
    const cost: number = Number(process.env.BCRYPT_COST);
    //salt
    const salt: string = await bcrypt.genSalt(cost);
    //hash
    const hash: string = await bcrypt.hash(plaintext, salt);
    return hash;
  };

  compareHast = async (
    plaintext: string,
    hashText: string
  ): Promise<boolean> => {
    const result = await bcrypt.compare(plaintext, hashText);
    return result;
  };
}
