import 'reflect-metadata';

import Server from './components/Server';
import AppDataSource from './database';
import routes from './routes';
import validateEnv from './utils/validEnv';

validateEnv();

const app = new Server(routes);

AppDataSource.initialize()
    .then(dataSource => dataSource.runMigrations({ transaction: 'each' }))
    .then(() => app.listen())
    .catch(e => console.log(e));
