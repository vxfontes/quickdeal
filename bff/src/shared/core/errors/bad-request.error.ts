import { ApiProperty } from "@nestjs/swagger";

export class BadRequestResponseDto {
    @ApiProperty({ example: true, description: "Status HTTP." })
    success: boolean;

    @ApiProperty({ example: "Houve um erro durante a requisição.", description: "Mensagem do erro." })
    message: string;

    @ApiProperty({ example: "{ }", description: "Algum retorno do tipo de erro." })
    data?: any;
}