import 'reflect-metadata';

import Server from './components/Server';
import AppDataSource from './database';
import Database from './database/Database';
import validateEnv from './utils/validEnv';

validateEnv();

const db = new Database(AppDataSource);
const onConnectionClose = () => db.removeDbConnection();
const app = new Server(onConnectionClose);

db.initializeDb()
    .then(() => app.listen())
    .catch(e => console.log(JSON.stringify(e)));
