import { ApiProperty } from "@nestjs/swagger";

export class SuccessRequestResponseDto {
    @ApiProperty({ example: true, description: "Status HTTP." })
    success: boolean;

    @ApiProperty({ example: "Requisição ocorreu com sucesso.", description: "Mensagem do response." })
    message: string;
}