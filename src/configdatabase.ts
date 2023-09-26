import { Event } from './event.entity';
import { ConnectionOptions } from 'typeorm';

const configdatabase: ConnectionOptions = {
    type: 'mysql',
    host: 'mysql_nestjs',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'nest-js',
    entities: [Event],
    synchronize: true,
};

export default configdatabase;