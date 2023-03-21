export class CustomError extends Error {
    constructor(statusCode: number, message: string){
        super(message)
    }
}

export class InvalidName extends CustomError{ 
    constructor(){
        super(400, "Nome inválido")
    }
}

export class InvalidEmail extends CustomError{ 
    constructor(){
        super(400, "Email inválido")
    }
}

export class InvalidPassword extends CustomError{ 
    constructor(){
        super(400, "Senha inválida")
    }
}

export class InvalidPasswordLength extends CustomError{ 
    constructor(){
        super(400, "Ops! Senha inválida, a senha precisa ter mais de 6 caracteres.")
    }
}

export class UserNotFound extends CustomError{ 
    constructor(){
        super(404, "Usuário não encontrado")
    }
}

export class Unauthorized extends CustomError{ 
    constructor(){
        super(401, "Usuário não autorizado")
    }
}

export class UnauthorizedRole extends CustomError{ 
    constructor(){
        super(401, "Apenas um usuário normal pode acessar esta funcionalidade")
    }
}
export class InvalidRole extends CustomError{ 
    constructor(){
        super(401, `Deverá preencher corretamente o campo role, sendo "ADMIN" ou "NORMAL"`)
    }
}
