import Server from './components/Server';
import routes from './routes';
import validateEnv from './utils/validEnv';

validateEnv();

const app = new Server(routes);

app.listen();
