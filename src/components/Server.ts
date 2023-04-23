import { createTerminus } from '@godaddy/terminus';
import { LoggerInterface } from '@gopikiller/winston-logger/lib';
import cors from 'cors';
import express, { Application } from 'express';
import { middleware } from 'express-openapi-validator';
import helmet from 'helmet';
import hpp from 'hpp';
import http from 'http';
import { serve, setup } from 'swagger-ui-express';
import * as v8 from 'v8';

import { CREDENTIALS, ORIGIN, PORT } from '../config';
import errorMiddleware from '../middleware/error.middleware';
import * as openApiSpec from '../openapi';
import logger from '../utils/logger';

class Server {
    public app: Application;
    public port: string | number;
    public server: http.Server<typeof http.IncomingMessage, typeof http.ServerResponse>;
    private logger: LoggerInterface;

    constructor(disconnectDb: () => Promise<void>) {
        this.app = express();
        this.port = PORT || 3000;
        this.logger = logger;
        this.initializeMiddlewares();
        this.initializeOpenApi();
        this.initializeErrorHandling();
        this.server = http.createServer(this.app);
        this.initializeCreateTerminus(disconnectDb);
        this.listenToServerEvents();
    }

    public getServer() {
        return this.server;
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

    private initializeOpenApi() {
        this.app.use('/api-docs', serve, setup(openApiSpec.spec));
        this.app.use(middleware(openApiSpec.openapi));
    }

    private initializeErrorHandling() {
        this.app.use(errorMiddleware);
    }

    private initializeCreateTerminus(disconnectDb: () => Promise<void>) {
        createTerminus(this.server, {
            timeout: 10000,
            signals: ['SIGTERM', 'SIGINT'],
            logger: (msg, err) => {
                if (err) {
                    this.logger.error(err.message);
                    this.logger.info(msg);
                } else {
                    this.logger.info(msg);
                }
            },
            onSignal: disconnectDb,
            onShutdown: async () => {
                this.logger.info(`[Server.onShutdown]: All signals handled`);
            },
        });
    }

    private listenToServerEvents() {
        this.server.on('close', () => {
            this.logger.info('[Server.listenToServerEvents]: Server is closed from accepting new request');
        });
    }
}

export default Server;
