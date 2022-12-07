export class Purchase {
  constructor(public id: string, public userId: string, public productId: string, public quantity: number, public totalPrice:  number) {
    this.id = id;
    this.userId = userId
    this.productId =  productId
    this.quantity = quantity
    this.totalPrice =  totalPrice
  }
}
