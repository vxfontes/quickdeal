import { ApiProperty } from "@nestjs/swagger";
import { SuccessRequestResponseDto } from "src/shared/core/dto/success-request.response";
import { LoginInputDto } from "./login-input.dto";
import { PartialType } from "@nestjs/mapped-types";

export class LoginOutputDto extends PartialType(LoginInputDto) {}

export class LoginResponseDto extends SuccessRequestResponseDto {
    @ApiProperty({ description: "Retorno do login do usuário.", example: {
        id: 'qwew-e123',
        email: "teste@teste.com",
        name: "Teste",
        role: "customer",
    } })
    data: LoginOutputDto;
}