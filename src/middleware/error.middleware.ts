import { NextFunction, Request, Response } from 'express';

import { HttpException } from '../utils/HttpException';
import logger from '../utils/logger';

const errorMiddleware = (exception: HttpException, req: Request, res: Response, next: NextFunction) => {
    const log = logger;
    try {
        const status: number = exception.status || 500;
        const message: string = exception.message || 'Something went wrong';

        log.info(JSON.stringify({ method: req.method, path: req.path, statusCode: status }));
        res.status(status).json({ error_code: status, error_message: message });
    } catch (error) {
        log.error(error);
        next(error);
    }
};

export default errorMiddleware;
