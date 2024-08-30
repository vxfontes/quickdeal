import { ApiProperty } from "@nestjs/swagger";
import { SuccessRequestResponseDto } from "src/shared/core/dto/success-request.response";
import { PartialType } from "@nestjs/mapped-types";
import { CreateUserInputDto } from "./create-user-input.dto";

export class CreateOutputDto extends PartialType(CreateUserInputDto) {}

export class CreateResponseDto extends SuccessRequestResponseDto {
    @ApiProperty({ description: "Retorno do cadastro do usuário.", example: {
        email: "teste@teste.com",
        name: "Teste",
        role: "customer",
    } })
    data: CreateOutputDto;
}