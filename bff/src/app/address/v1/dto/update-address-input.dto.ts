import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateAddressDto } from './create-address-input.dto';

export class UpdateAddressDto extends PartialType(CreateAddressDto) {
    @ApiProperty(
        {
            description: 'ID do endereço',
            example: 'f1a4e4af-dc52-41e8-bb01-ecf143a5f66d',
        }
    )
    id: string;
}
