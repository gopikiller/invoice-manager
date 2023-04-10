import { Router } from 'express';

import { AppLogger } from '../interfaces/logger.interface';
import { Routes } from '../interfaces/route.interface';
import logger from '../utils/logger';

class HealthCheck implements Routes {
    public path = '/';
    public router = Router();
    private logger: AppLogger;

    constructor() {
        this.initializeRoutes();
        this.logger = logger();
    }

    private initializeRoutes() {
        this.router.get(`${this.path}healthcheck`, (_req, res) => {
            res.status(200).json({ status: 'ok', is_healthy: true });
            return;
        });
    }
}

export default HealthCheck;
