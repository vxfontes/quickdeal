import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsEmail, MinLength, MaxLength, IsEnum } from "class-validator";
import { RoleEnum } from "src/models/user/role.entity";
import { ErrorConstant } from "src/shared/core/errors/error.constants";

export class CreateUserInputDto {
    @ApiProperty({ description: 'Nome completo do usuário', example: 'João da Silva', })
    @IsString({ message: 'O nome deve ser uma string.' })
    @IsNotEmpty({ message: 'O nome é obrigatório.' })
    name: string;

    @ApiProperty({ description: 'Endereço de e-mail do usuário', example: 'example@example.com' })
    @IsNotEmpty({ message: ErrorConstant.MUST_HAVE })
    @IsString({ message: ErrorConstant.INVALID_TYPE_STRING })
    @IsEmail({}, { message: ErrorConstant.INVALID_TYPE_EMAIL })
    email: string;

    @ApiProperty({ description: 'Senha do usuário', example: 'Senha1234!' })
    @IsNotEmpty({ message: ErrorConstant.MUST_HAVE })
    @IsString({ message: ErrorConstant.INVALID_TYPE_STRING })
    @MinLength(8, { message: ErrorConstant.INVALID_MIN_PASSWORD })
    @MaxLength(30)
    password: string;

    @ApiProperty({ description: 'Papel do usuário no sistema', enum: RoleEnum, example: RoleEnum.CUSTOMER })
    @IsEnum(RoleEnum, { message: 'O papel do usuário deve ser um valor válido.' })
    @IsNotEmpty({ message: 'O papel do usuário é obrigatório.' })
    role: RoleEnum;
}