import { Knex } from "knex";
import { Purchase } from './Purchase';

export class PurchaseDataBase{
    constructor(private connection:Knex){
        this.connection=connection;
    }

    public insertPurchase=async(newUPurchase:Purchase)=>{
       await this.connection("Labe_Purchases").insert(newUPurchase);
    }
    public getPurchase=async()=>{
       const result= await this.connection("Labe_Purchases").select();
       return result;
    }
}