import { Server } from './components/Server';
import validateEnv from './utils/validEnv';

validateEnv();

const app = new Server();

app.listen();
