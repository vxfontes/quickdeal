import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";
import { ErrorConstant } from "src/shared/core/errors/error.constants";

export class CreateCategoryDto {
    @IsNotEmpty({ message: ErrorConstant.MUST_HAVE })
    @IsString({ message: ErrorConstant.INVALID_TYPE_STRING })
    @ApiProperty({ example: "Jogos eletrônicos", description: "Nome da categoria" })
    name: string;

    @IsNotEmpty({ message: ErrorConstant.MUST_HAVE })
    @IsString({ message: ErrorConstant.INVALID_TYPE_STRING })
    @ApiProperty({ example: "Jogos para console ou PCs", description: "Descrição da categoria" })
    description: string;
}