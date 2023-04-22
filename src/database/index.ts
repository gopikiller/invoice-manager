import { DataSource } from 'typeorm';

import { DB_URL, NODE_ENV } from '../config';

const AppDataSource = new DataSource({
    type: 'postgres',
    schema: 'invoice',
    url: DB_URL,
    synchronize: false,
    logging: NODE_ENV === 'development' ? true : false,
    entities: [`${__dirname}/entities/*.{js,ts}`],
    migrations: [`${__dirname}/migrations/*.{js,ts}`],
    subscribers: [],
});

export default AppDataSource;
