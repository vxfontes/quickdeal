import { ApiProperty } from "@nestjs/swagger";
import { SuccessRequestResponseDto } from "src/shared/core/dto/success-request.response";
import { PartialType } from "@nestjs/mapped-types";
import { CreateUserInputDto } from "./create-user-input.dto";

export class CreateOutputDto extends PartialType(CreateUserInputDto) {}

export class CreateResponseDto extends SuccessRequestResponseDto {
    @ApiProperty({ description: "Retorno do cadastro do usuário.", example: {
        id: 'f1a4e4af-dc52-41e8-bb01-ecf143a5f66d',
        email: "teste@teste.com",
        name: "Teste",
        role: "customer",
    } })
    data: CreateOutputDto;
}