import { existsSync, mkdirSync } from 'fs';
import { join } from 'path';
import { BaseLogger, pino, transport, TransportMultiOptions, TransportSingleOptions } from 'pino';

import { LOG_DIR } from '../config';
import { AppLogger } from '../interfaces/logger.interface';

class Logger implements AppLogger {
    constructor(private logger: BaseLogger) {}

    info(obj: unknown, msg?: string | undefined): void {
        this.logger.info(obj, msg);
    }
    warn(obj: unknown, msg?: string | undefined): void {
        this.logger.warn(obj, msg);
    }
    error(obj: unknown, msg?: string | undefined): void {
        this.logger.error(obj, msg);
    }
    debug(obj: unknown, msg?: string | undefined): void {
        this.logger.debug(obj, msg);
    }
}

const logger = () => {
    const logDir = join(__dirname, LOG_DIR || '../logs');
    if (!existsSync(logDir)) {
        mkdirSync(logDir);
    }

    const timestamp = () => `,"time":"${new Date(Date.now()).toISOString()}"`;
    const transportOption: TransportMultiOptions = {
        targets: [
            {
                level: 'debug',
                target: 'pino/file',
                options: { destination: logDir + '/debug.log' },
            },
            {
                level: 'error',
                target: 'pino/file',
                options: { destination: logDir + '/error.log' },
            },
        ],
    };
    return new Logger(pino({ level: 'debug', timestamp }, transport(transportOption)));
};

export default logger;
