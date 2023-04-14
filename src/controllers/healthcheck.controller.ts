import { Request, Response } from 'express';

class HealthCheck {
    public healthCheck(req: Request, res: Response) {
        res.status(200).json({ status: 200, message: 'Service is working normally!', is_healthy: true });
    }
}

const healthCheckController = new HealthCheck();

export const healthCheck = healthCheckController.healthCheck.bind(healthCheckController);
