import 'reflect-metadata';

import Database from './components/Database';
import Server from './components/Server';
import AppDataSource from './database';
import routes from './routes';
import validateEnv from './utils/validEnv';

validateEnv();

const db = new Database(AppDataSource);
const app = new Server(routes, () => db.removeDbConnection());

db.initializeDb()
    .then(() => app.listen())
    .catch(e => console.log('Error connecting to Database' + e));
