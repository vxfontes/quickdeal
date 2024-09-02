import { PartialType } from "@nestjs/mapped-types";
import { ApiProperty } from "@nestjs/swagger";
import { SuccessRequestResponseDto } from "src/shared/core/dto/success-request.response";
import { CreateProductDto } from "./create-product-input.dto";

export class CreateProductOutputDto extends PartialType(CreateProductDto) {
    id: string;
}

export class CreateProductResponseDto extends SuccessRequestResponseDto {
    @ApiProperty({ description: "Retorno do cadastro de produto.", example: [{
        id: 'f1a4e4af-dc52-41e8-bb01-ecf143a5f66d',
        name: "Smartphone X",
        description: "Smartphone de última geração com câmera de 108 MP",
        price: 999.99,
        stockQuantity: 50,
        category: {
            id: 'f1a4e4af-dc52-41e8-bb01-ecf143a5f66d',
            name: "Jogos eletrônicos",
            description: "Jogos para console ou PCs",
        },
        store: {
            id: 'f1a4e4af-dc52-41e8-bb01-ecf143a5f66d',
            email: "example@example.com",
            name: "Example",
            role: "customer",
        },
    }]})
    data: CreateProductOutputDto;
}