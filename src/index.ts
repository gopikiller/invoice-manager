import Server from './components/Server';
import HealthCheck from './routes/healthcheck.route';
import validateEnv from './utils/validEnv';

validateEnv();

const app = new Server([new HealthCheck()]);

app.listen();
