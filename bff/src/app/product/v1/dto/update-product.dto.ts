import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateProductDto } from './create-product-input.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {
    @ApiProperty({
        description: 'ID do produto que deseja atualizar.',
        example: '2277c818-33d3-46aa-8bd9-dad610f36553',
    })
    id: string;
}
