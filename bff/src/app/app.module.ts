import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'src/database/data-source-cli';

@Module({
    imports: [TypeOrmModule.forRoot(dataSourceOptions)],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
