import { DataSource } from 'typeorm';

import { AppLogger } from '../interfaces/logger.interface';
import logger from '../utils/logger';

class Database {
    private dataSource: DataSource;
    private logger: AppLogger;
    constructor(dataSource: DataSource) {
        this.dataSource = dataSource;
        this.logger = logger();
    }

    public async initializeDb() {
        await this.dataSource.initialize();
        await this.dataSource.runMigrations({ transaction: 'each' });
        this.logger.info(`[Database.initializeDb] : Database connection is succesfull`);
    }

    public async removeDbConnection() {
        await this.dataSource.destroy();
        this.logger.info(`[Database.removeDbConnection] : Database connection removed`);
    }
}

export default Database;
