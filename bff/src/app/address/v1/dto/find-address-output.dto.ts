import { PartialType } from "@nestjs/mapped-types";
import { ApiProperty } from "@nestjs/swagger";
import { SuccessRequestResponseDto } from "src/shared/core/dto/success-request.response";
import { CreateAddressDto } from "./create-address-input.dto";

export class FindAddressOutputDto extends PartialType(CreateAddressDto) {}

export class FindAddressResponseDto extends SuccessRequestResponseDto {
    @ApiProperty({ description: "Retorno do cadastro de endereço.", example: {
        id: 'f1a4e4af-dc52-41e8-bb01-ecf143a5f66d',
        street: "Rua teste",
        number: "123",
        neighborhood: "Bairro teste",
        city: "São Paulo",
        state: "SP",
        zipCode: "12345-678",
        phone: "(11) 98765-4321",
        reference: "Próximo ao mercado",
        user: "f1a4e4af-dc52-41e8-bb01-ecf143a5f66d"
    }})
    data: FindAddressOutputDto;
}