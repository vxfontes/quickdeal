import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from 'src/models/v1/category/category.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Category
    ]),
  ],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModuleV1 { }
