import { path as customer } from './customer';
import { path as healthCheck } from './healthcheck';

export default {
    ...healthCheck,
    ...customer,
};
