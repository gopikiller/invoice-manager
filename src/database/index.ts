import { DataSource } from 'typeorm';

import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USERNAME, NODE_ENV } from '../config';

const AppDataSource = new DataSource({
    type: 'postgres',
    host: DB_HOST,
    port: Number(DB_PORT),
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    synchronize: false,
    logging: NODE_ENV === 'development' ? true : false,
    entities: [`${__dirname}/entities/*.{js,ts}`],
    migrations: [`${__dirname}/migrations/*.{js,ts}`],
    subscribers: [],
});

export default AppDataSource;
