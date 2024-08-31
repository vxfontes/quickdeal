import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'src/database/data-source-cli';
import { AuthModule } from './auth/auth.module';
import { CategoryModule } from './category/category.module';
import { AddressModule } from './address/address.module';

@Module({
    imports: [
        TypeOrmModule.forRoot(dataSourceOptions), 
        AuthModule, 
        CategoryModule, 
        AddressModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
