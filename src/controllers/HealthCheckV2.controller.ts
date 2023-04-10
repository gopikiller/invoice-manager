import { Request, Response } from 'express';

class HealthCheckV2 {
    public healthCheck(req: Request, res: Response) {
        res.status(200).json({ status: 200, message: 'Service is working normally!', is_healthy: true });
    }
}

const healthCheckController = new HealthCheckV2();

export const healthCheck = healthCheckController.healthCheck.bind(healthCheckController);
