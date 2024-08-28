import { ApiProperty } from "@nestjs/swagger";

export class BadRequestResponseDto {
    @ApiProperty({ example: 400, description: "Código de status HTTP." })
    statusCode: number;

    @ApiProperty({ example: "Usuário ou senha inválidos", description: "Mensagem de erro." })
    message: string;

    @ApiProperty({ example: "Bad Request", description: "Descrição do tipo de erro." })
    error: string;
}