import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'src/database/data-source-cli';
import { AuthModule } from './auth/auth.module';
import { CategoryModule } from './category/category.module';

@Module({
    imports: [
        TypeOrmModule.forRoot(dataSourceOptions), 
        AuthModule, 
        CategoryModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
