import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsOptional } from "class-validator";
import { ErrorConstant } from "src/shared/core/errors/error.constants";

export class CreateAddressDto {
    @IsNotEmpty({ message: ErrorConstant.MUST_HAVE })
    @IsString({ message: ErrorConstant.INVALID_TYPE_STRING })
    @ApiProperty({ example: "Rua das Flores", description: "Nome da rua" })
    street: string;

    @IsOptional()
    @IsString({ message: ErrorConstant.INVALID_TYPE_STRING })
    @ApiProperty({ example: "Bairro Jardim", description: "Nome do bairro", required: false })
    neighborhood?: string;

    @IsNotEmpty({ message: ErrorConstant.MUST_HAVE })
    @IsString({ message: ErrorConstant.INVALID_TYPE_STRING })
    @ApiProperty({ example: "São Paulo", description: "Nome da cidade" })
    city: string;

    @IsNotEmpty({ message: ErrorConstant.MUST_HAVE })
    @IsString({ message: ErrorConstant.INVALID_TYPE_STRING })
    @ApiProperty({ example: "São Paulo", description: "Nome do estado" })
    state: string;

    @IsNotEmpty({ message: ErrorConstant.MUST_HAVE })
    @IsString({ message: ErrorConstant.INVALID_TYPE_STRING })
    @ApiProperty({ example: "12345-678", description: "Código postal (CEP)" })
    zipCode: string;

    @IsNotEmpty({ message: ErrorConstant.MUST_HAVE })
    @IsString({ message: ErrorConstant.INVALID_TYPE_STRING })
    @ApiProperty({ example: "123", description: "Número do endereço" })
    number: string;

    @IsOptional()
    @IsString({ message: ErrorConstant.INVALID_TYPE_STRING })
    @ApiProperty({ example: "Apt 101", description: "Complemento do endereço", required: false })
    complement?: string;

    @IsNotEmpty({ message: ErrorConstant.MUST_HAVE })
    @IsString({ message: ErrorConstant.INVALID_TYPE_STRING })
    @ApiProperty({ example: "(11) 98765-4321", description: "Número de telefone de contato" })
    phone: string;

    @IsOptional()
    @IsString({ message: ErrorConstant.INVALID_TYPE_STRING })
    @ApiProperty({ example: "Próximo ao mercado X", description: "Ponto de referência", required: false })
    reference?: string;

    @IsNotEmpty({ message: ErrorConstant.MUST_HAVE })
    @ApiProperty({ example: "1asd2-231d", description: "ID do usuário associado" })
    user: string;
}
