import express, { Application } from 'express';
import http from 'http';
import * as v8 from 'v8';
import { CREDENTIALS, ORIGIN, PORT } from '../config';
import cors from 'cors';
import hpp from 'hpp';
import helmet from 'helmet';
import errorMiddleware from '../middleware/error.middleware';
import { Routes } from '../interfaces/route.interface,';

class Server {
    public app: Application;
    public port: string | number;
    public server: http.Server<typeof http.IncomingMessage, typeof http.ServerResponse>;

    constructor(routes: Routes[]) {
        this.app = express();
        this.port = PORT || 3000;
        this.initializeMiddlewares();
        this.initializeRoutes(routes);
        this.initializeErrorHandling();
        this.server = http.createServer(this.app);
    }

    public listen() {
        this.server.listen(this.port, () => {
            const totalHeapSizeInGB = (v8.getHeapStatistics().total_available_size / 1024 / 1024 / 1024).toFixed(2);
            console.log(`*******************************************`);
            console.log(`Total Heap Size ~${totalHeapSizeInGB}GB`);
            console.log(`Server is listening on http://localhost:${this.port}`);
            console.log(`*******************************************`);
        });
    }

    private initializeMiddlewares() {
        this.app.use(cors({ origin: ORIGIN, credentials: CREDENTIALS }));
        this.app.use(hpp());
        this.app.use(helmet());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    private initializeRoutes(routes: Routes[]) {
        routes.forEach(route => {
            this.app.use('/', route.router);
        });
    }

    private initializeErrorHandling() {
        this.app.use(errorMiddleware);
    }
}

export default Server;
