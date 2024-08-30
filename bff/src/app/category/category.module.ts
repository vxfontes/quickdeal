import { Module } from '@nestjs/common';
import { CategoryModuleV1 } from './v1/category.module';

@Module({
  imports: [CategoryModuleV1],
  controllers: [],
  providers: [],
})
export class CategoryModule {}
