import { Logger, LoggerOption } from '@gopikiller/winston-logger/lib';

const loggerOption: LoggerOption = {
    logFileName: 'node-express-server',
    logLevel: 'debug',
    dirName: 'log',
};
const logger = new Logger(loggerOption);

export default logger;
