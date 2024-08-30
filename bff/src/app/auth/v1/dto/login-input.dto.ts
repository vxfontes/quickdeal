import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";
import { ErrorConstant } from "src/shared/core/errors/error.constants";

export class LoginInputDto {
    @IsNotEmpty({ message: ErrorConstant.MUST_HAVE })
    @IsString({ message: ErrorConstant.INVALID_TYPE_STRING })
    @ApiProperty({ example: "example@example.com", description: "Email do usuário." })
    email: string;
    
    @IsNotEmpty({ message: ErrorConstant.MUST_HAVE })    
    @IsString({ message: ErrorConstant.INVALID_TYPE_STRING })    
    @ApiProperty({ example: "Senha1234!", description: "Senha do usuário." })    
    password: string;
}