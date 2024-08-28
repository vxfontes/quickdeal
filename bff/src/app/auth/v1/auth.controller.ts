import { Body, Controller, HttpException, HttpStatus, Post } from "@nestjs/common";
import { ApiBadRequestResponse, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { LoginInputDto } from "./dto/login-input.dto";
import { AuthService } from "./auth.service";
import { LoginResponseDto } from "./dto/login-output.dto";
import { BadRequestResponseDto } from "src/shared/core/errors/bad-request.error";

@Controller("auth/v1")
@ApiTags("auth")
export class AuthController {

    constructor(private authService: AuthService) {}

    /**
     * Realiza o login do usuário
     */
    @Post("login")
    @ApiOperation({ summary: "Login de usuário", description: "Realiza o login de um usuário e retorna um token JWT." })
    @ApiResponse({ status: 200, description: "Login realizado com sucesso.", type: LoginResponseDto })
    @ApiBadRequestResponse({ description: "Usuário ou senha inválidos.", type: BadRequestResponseDto })
    public async login(@Body() authModel: LoginInputDto) {
        try {
            console.log(authModel);
            return await this.authService.login(authModel);
        } catch (error) {
            console.log(error.message);
            throw new HttpException({
                statusCode: HttpStatus.BAD_REQUEST,
                message: error.message ?? "Houve um erro ao tentar fazer login.",
                error: "Bad Request"
            }, HttpStatus.BAD_REQUEST);
        }
    }
}