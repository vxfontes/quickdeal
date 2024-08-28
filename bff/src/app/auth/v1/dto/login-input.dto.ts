import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";
import { ErrorConstant } from "src/shared/core/errors/error.constants";

export class LoginInputDto {
    /**
   * Email do usuário para autenticação
   * @example 'email@email.com'
   */
    @IsNotEmpty({ message: ErrorConstant.MUST_HAVE })
    @IsString({ message: ErrorConstant.INVALID_TYPE_STRING })
    @ApiProperty({ example: "teste@teste.com", description: "Email do usuário." })
    email: string;
    
    /**
     * Password do usuário para autenticação
     * @example 'abc123'
    */
    @IsNotEmpty({ message: ErrorConstant.MUST_HAVE })    
    @IsString({ message: ErrorConstant.INVALID_TYPE_STRING })    
    @ApiProperty({ example: "123456", description: "Senha do usuário." })    
    password: string;
}