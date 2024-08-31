import { PartialType } from "@nestjs/mapped-types";
import { ApiProperty } from "@nestjs/swagger";
import { SuccessRequestResponseDto } from "src/shared/core/dto/success-request.response";
import { CreateCategoryDto } from "./create-category-input.dto";

export class CreateCategoryOutputDto extends PartialType(CreateCategoryDto) {}

export class CreateCategoryResponseDto extends SuccessRequestResponseDto {
    @ApiProperty({ description: "Retorno do cadastro da categoria.", example: [{
        id: 'f1a4e4af-dc52-41e8-bb01-ecf143a5f66d',
        name: "Jogos eletrônicos",
        description: "Jogos para console ou PCs",
    }] })
    data: CreateCategoryOutputDto;
}