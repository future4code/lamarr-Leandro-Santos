import { CustomError } from "./CustomError";

export class InvalidDescription extends CustomError {
  constructor() {
    super(400, "Descrição Inválida, ela precisa ter mais de 30 caracteres");
  }
}
