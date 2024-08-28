import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
import * as config from 'config-yml';
import { join } from "path";

const directoryAbove = join(__dirname, '../models/');
const filePattern = join(directoryAbove, '**', '*.entity.{js,ts}');

export const dataSourceOptions: PostgresConnectionOptions = {
    type: 'postgres',
    host: config.db.postgres.host,
    port: config.db.postgres.port,
    database: config.db.postgres.database,
    username: config.db.postgres.username,
    password: config.db.postgres.password,
    schema: config.db.postgres.schema,
    synchronize: config.db.postgres.synchronize,
    entities: [filePattern],
    
};