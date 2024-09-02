import { Module } from '@nestjs/common';
import { ProductModuleV1 } from './v1/product.module';

@Module({
    imports: [ProductModuleV1],
    controllers: [],
    providers: [],
})
export class ProductModule { }
