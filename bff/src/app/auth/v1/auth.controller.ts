import { BadRequestException, Body, Controller, HttpException, HttpStatus, Post } from "@nestjs/common";
import { ApiBadRequestResponse, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { LoginInputDto } from "./dto/login-input.dto";
import { AuthService } from "./auth.service";
import { LoginResponseDto } from "./dto/login-output.dto";
import { BadRequestResponseDto } from "src/shared/core/errors/bad-request.error";
import { CreateUserInputDto } from "./dto/create-user-input.dto";
import { ResponseEntity } from "src/shared/entities/response.entity";

@Controller("auth/v1")
@ApiTags("auth")
export class AuthController {

    constructor(private authService: AuthService) { }

    /**
     * Realiza o login do usuário
     */
    @Post("login")
    // @UseGuards(LocalGuard)
    @ApiOperation({ summary: "Login de usuário", description: "Realiza o login de um usuário e retorna um token JWT." })
    @ApiResponse({ status: 200, description: "Login realizado com sucesso.", type: LoginResponseDto })
    @ApiBadRequestResponse({ description: "Usuário ou senha inválidos.", type: BadRequestResponseDto })
    public async login(@Body() authModel: LoginInputDto): Promise<ResponseEntity> {
        const data = await this.authService.login(authModel);
        if (data.isError()) throw new BadRequestException(data);
        return data;
    }

    /**
     * Realiza a criação de um novo usuário
    */
    @Post("register")
    @ApiOperation({ summary: "Registro de usuário", description: "Realiza o registro de um novo usuário." })
    @ApiResponse({ status: 201, description: "Usuário criado com sucesso." })
    @ApiBadRequestResponse({ description: "Erro ao criar usuário.", type: BadRequestResponseDto })
    public async register(@Body() createModel: CreateUserInputDto): Promise<ResponseEntity> {
        const data = await this.authService.register(createModel);
        if (data.isError()) throw new BadRequestException(data);
        return data;
    }

    // para rotas bloqueadas
    // @UseGuards(LocalGuard)
}