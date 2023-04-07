import { NextFunction, Request, Response } from 'express';

import { HttpException } from '../utils/HttpException';

const errorMiddleware = (exception: HttpException, req: Request, res: Response, next: NextFunction) => {
    try {
        const status: number = exception.status || 500;
        const message: string = exception.message || 'Something went wrong';

        console.log(`[${req.method}] ${req.path} >> StatusCode:: ${status}, Message:: ${message}`);
        res.status(status).json({ message });
    } catch (error) {
        next(error);
    }
};

export default errorMiddleware;
