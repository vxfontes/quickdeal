import { PartialType } from "@nestjs/mapped-types";
import { ApiProperty } from "@nestjs/swagger";
import { SuccessRequestResponseDto } from "src/shared/core/dto/success-request.response";
import { CreateProductDto } from "./create-product-input.dto";

export class FindOneProductOutputDto extends PartialType(CreateProductDto) {
    id: string;
}

export class FindOneProductResponseDto extends SuccessRequestResponseDto {
    @ApiProperty({
        description: "Retorno do cadastro de produto.", 
        example: {
            id: "2277c818-33d3-46aa-8bd9-dad610f36553",
            name: "Smartphone X",
            description: "Smartphone de última geração com câmera de 108 MP",
            price: "999.99",
            stockQuantity: 50,
            active: true,
            category: {
                id: "dd93bfcd-5bc2-4db1-8722-6d95699e2df3",
                name: "Jogos eletrônicos",
                description: "Jogos para console ou PCs"
            },
            store: {
                id: "f1a4e4af-dc52-41e8-bb01-ecf143a5f66d",
                name: "João da Silva",
                email: "example@example.com",
                role: "store"
            },
            reviews: [
                {
                    id: "f1a4e4af-dc52-41e8-bb01-ecf143a5f66d",
                    rating: 5,
                    comment: "Ótimo produto, recomendo!",
                    user: "Jão da Silva",
                    createdAt: "2021-09-01T00:00:00.000Z",
                }
            ]
        },
    })
    data: FindOneProductOutputDto;
}