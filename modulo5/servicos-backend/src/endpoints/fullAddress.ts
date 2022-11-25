import {Request, Response} from "express"
import getFullAddress from "../services/getAddress";

  async function FullAddress(req: Request, res: Response) {
    const {cep} = req.body;
    

    if (!cep){
      res.statusCode = 422
      throw new Error("O CEP é obrigatório")  
    }
  
    const result = await getFullAddress(cep)
      res.send (result)
     }

export default FullAddress;

