import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'src/database/data-source-cli';
import { AuthModule } from './auth/auth.module';
import { CategoryModule } from './category/category.module';
import { AddressModule } from './address/address.module';
import { ProductModule } from './product/product.module';

@Module({
    imports: [
        TypeOrmModule.forRoot(dataSourceOptions), 
        AuthModule, 
        CategoryModule, 
        AddressModule,
        ProductModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
