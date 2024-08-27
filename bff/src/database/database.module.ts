import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as config from 'config-yml';

import { join } from 'path';

const directoryAbove = join(__dirname, '../'); // Obtém o diretório um nível acima do __dirname
const filePattern = join(directoryAbove, '**', '*.entity.{js,ts}');

@Module({
    imports: [
        ConfigModule.forRoot(),
        TypeOrmModule.forRoot({ // configurações de root
            type: 'postgres',
            host: config.app.host,
            port: config.app.port,
            database: config.app.database,
            username: config.app.username,
            password: config.app.password,
            schema: config.app.schema,
            synchronize: true,
            entities: [filePattern], // buscando todas as entidades ao inves de selecionar individualmente
        }),
    ]
})
export class DatabaseModule { }
