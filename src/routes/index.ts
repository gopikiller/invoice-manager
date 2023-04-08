import { Routes } from '../interfaces/route.interface';
import HealthCheck from './healthcheck.route';

const routes: Routes[] = [new HealthCheck()];

export default routes;
