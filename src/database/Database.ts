import { LoggerInterface } from '@gopikiller/winston-logger/lib';
import { DataSource } from 'typeorm';

import logger from '../utils/logger';

class Database {
    private dataSource: DataSource;
    private logger: LoggerInterface;
    constructor(dataSource: DataSource) {
        this.dataSource = dataSource;
        this.logger = logger;
    }

    public async initializeDb() {
        // initialize database connection
        await this.dataSource.initialize();
        // create invoice schema
        await this.dataSource.query(`CREATE SCHEMA IF NOT EXISTS invoice`);
        // run migration
        await this.dataSource.runMigrations({ transaction: 'each' });
        this.logger.info(`[Database.initializeDb] : Database connection is succesfull`);
    }

    public async removeDbConnection() {
        await this.dataSource.destroy();
        this.logger.info(`[Database.removeDbConnection] : Database connection removed`);
    }
}

export default Database;
