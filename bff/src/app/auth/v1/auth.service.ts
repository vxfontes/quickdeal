import { Injectable } from "@nestjs/common";
import { LoginInputDto } from "./dto/login-input.dto";
import { JwtService } from "@nestjs/jwt";

const fakeUsers = [
    {
        email: "teste@teste.com",
        password: "123456"
    },
    {
        email: "alo@teste.com",
        password: "123456"
    }
]

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService) {}

    public async login({email, password}: LoginInputDto) {
        const user = fakeUsers.find(user => user.email === email && user.password === password);
        console.log(user, 'esse é o user');
        if (!user) {
            console.log('entrou no if');
            throw new Error("Usuário ou senha inválidos");
        }
        return {
            token: this.jwtService.sign({user})
        }
    }
}