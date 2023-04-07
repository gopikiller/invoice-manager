import { Router } from 'express';

import { Routes } from '../interfaces/route.interface,';

class HealthCheck implements Routes {
    public path = '/';
    public router = Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(`${this.path}healthcheck`, (_req, res) => {
            res.status(200).json({ status: 'ok' });
        });
    }
}

export default HealthCheck;
