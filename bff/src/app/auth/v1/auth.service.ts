import { Injectable, Logger } from "@nestjs/common";
import { LoginInputDto } from "./dto/login-input.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import * as bcrypt from 'bcrypt';
import { CreateUserInputDto } from "./dto/create-user-input.dto";
import { ResponseEntity } from "src/shared/entities/response.entity";
import { User } from "src/models/v1/user/user.entity";
import { RoleEnum } from "src/models/v1/user/role.entity";

@Injectable()
export class AuthService {

    private logger = new Logger('AuthService');

    constructor(
        @InjectRepository(User) // adição de metodos para manipulação do banco de dados
        private readonly UserRepository: Repository<User>,
    ) { }

    public async login({ email, password }: LoginInputDto): Promise<ResponseEntity> {
        try {
            const existingUser = await this.UserRepository.findOne({ where: { email } });
            if (!existingUser) return ResponseEntity.error("Usuário não encontrado.");

            const isPasswordValid = await bcrypt.compare(password, existingUser.password);
            if (!isPasswordValid) return ResponseEntity.error("Credenciais inválidas.");

            const { name, role } = existingUser;
            const user = { name, role, email };

            return ResponseEntity.success("Login realizado com sucesso!", user);
        } catch (error) {
            this.logger.error('Erro ao realizar login.', error);
            return ResponseEntity.error("Erro ao realizar login.");
        }
    }


    public async register({ email, name, password, role }: CreateUserInputDto): Promise<ResponseEntity> {
        try {
            if (!Object.values(RoleEnum).includes(role)) return ResponseEntity.error('Tipo de usuário inválido.');

            // Verifica se o usuário já existe
            const existingUser = await this.UserRepository.findOne({
                where: { email },
                select: ["email", "name", "password", "role"],
            });

            if (existingUser) return ResponseEntity.error('Usuário com esse email já existe.');

            const hashedPassword = await bcrypt.hash(password, 10);
            if (!hashedPassword) {
                this.logger.error('Erro ao encriptar senha.');
                return ResponseEntity.error('Erro ao criar conta.');
            }

            const newUser = this.UserRepository.create({
                name, email, password: hashedPassword, role,
            });

            const savedUser = await this.UserRepository.save(newUser);
            this.logger.log('Sucesso na criação.', savedUser);

            const finalUser = { name, email, role };
            return ResponseEntity.success('Conta criada com sucesso!', finalUser);
        } catch (error) {
            this.logger.error('Erro ao criar conta.', error);
            return ResponseEntity.error('Erro ao criar conta.');
        }
    }
}