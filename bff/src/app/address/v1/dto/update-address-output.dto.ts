import { ApiProperty } from '@nestjs/swagger';
import { SuccessRequestResponseDto } from 'src/shared/core/dto/success-request.response';
import { UpdateAddressDto } from './update-address-input.dto';

export class UpdateAddressResponseDto extends SuccessRequestResponseDto {
    @ApiProperty({ description: "Retorno do update de endereço.", example: {
        id: 'f1a4e4af-dc52-41e8-bb01-ecf143a5f66d',
        street: "Rua teste",
        number: "123",
        neighborhood: "Bairro teste",
        city: "São Paulo",
        state: "SP",
        zipCode: "12345-678",
        phone: "(11) 98765-4321",
        reference: "Próximo ao mercado",
        user: "f1a4e4af-dc52-41e8-bb01-ecf143a5f66d"
    }})
    data: UpdateAddressDto;
}