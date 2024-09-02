import { PartialType } from "@nestjs/mapped-types";
import { ApiProperty } from "@nestjs/swagger";
import { SuccessRequestResponseDto } from "src/shared/core/dto/success-request.response";
import { CreateProductDto } from "./create-product-input.dto";

export class FindAllProductOutputDto extends PartialType(CreateProductDto) {
    id: string;
}

export class FindAllProductResponseDto extends SuccessRequestResponseDto {
    @ApiProperty({ description: "Retorno do cadastro de produto.", example: [
        {
            id: "2277c818-33d3-46aa-8bd9-dad610f36553",
            name: "Smartphone X",
            description: "Smartphone de última geração com câmera de 108 MP",
            price: 999.99,
            stockQuantity: 50,
            category: "Jogos eletrônicos",
            store: "João da Silva"
        }
    ]})
    data: FindAllProductOutputDto;
}