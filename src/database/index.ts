import { dirname } from 'path';
import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'gopi',
    password: 'secret',
    database: 'node-express',
    synchronize: false,
    logging: true,
    entities: [`${__dirname}/entities/*.{js,ts}}`],
    migrations: [`${__dirname}/migrations/*.{js,ts}}`],
    subscribers: [],
});

export default AppDataSource;
