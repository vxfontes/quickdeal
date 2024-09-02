import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/models/v1/user/user.entity';
import { Category } from 'src/models/v1/category/category.entity';
import { Product } from 'src/models/v1/product/product.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            User,
            Category,
            Product,
        ]),
    ],
    controllers: [ProductController],
    providers: [ProductService],
})
export class ProductModuleV1 { }
