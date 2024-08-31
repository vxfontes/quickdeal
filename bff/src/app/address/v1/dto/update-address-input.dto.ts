import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateAddressDto } from './create-address-input.dto';

export class UpdateAddressDto extends PartialType(CreateAddressDto) {
    @ApiProperty(
        {
            description: 'ID do endereço',
            example: '1iuo-asdh-2333',
        }
    )
    id: string;
}
