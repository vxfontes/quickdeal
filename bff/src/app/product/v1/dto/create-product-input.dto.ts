import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsNumber, IsPositive, IsInt } from "class-validator";
import { ErrorConstant } from "src/shared/core/errors/error.constants";


export class CreateProductDto {

    @IsNotEmpty({ message: ErrorConstant.MUST_HAVE })
    @IsString({ message: ErrorConstant.INVALID_TYPE_STRING })
    @ApiProperty({ example: "Smartphone X", description: "Nome do produto" })
    name: string;

    @IsNotEmpty({ message: ErrorConstant.MUST_HAVE })
    @IsString({ message: ErrorConstant.INVALID_TYPE_STRING })
    @ApiProperty({ example: "Smartphone de última geração com câmera de 108 MP", description: "Descrição do produto" })
    description: string;

    @IsNotEmpty({ message: ErrorConstant.MUST_HAVE })
    @IsNumber({ allowInfinity: false, allowNaN: false }, { message: ErrorConstant.INVALID_TYPE_NUMBER })
    @IsPositive({ message: ErrorConstant.MUST_BE_POSITIVE })
    @ApiProperty({ example: 999.99, description: "Preço do produto" })
    price: number;

    @IsNotEmpty({ message: ErrorConstant.MUST_HAVE })
    @IsInt({ message: ErrorConstant.INVALID_TYPE_NUMBER })
    @IsPositive({ message: ErrorConstant.MUST_BE_POSITIVE })
    @ApiProperty({ example: 50, description: "Quantidade em estoque do produto" })
    stockQuantity: number;

    @IsNotEmpty({ message: ErrorConstant.MUST_HAVE })
    @ApiProperty({ example: "sd0a3-asdd-d3lm", description: "ID da categoria associada" })
    category: string;

    @IsNotEmpty({ message: ErrorConstant.MUST_HAVE })
    @ApiProperty({ example: 'f1a4e4af-dc52-41e8-bb01-ecf143a5f66d', description: "ID da loja associada (usuário)" })
    store: string;
}
