import { DataSource } from 'typeorm';

class Database {
    private dataSource: DataSource;
    constructor(dataSource: DataSource) {
        this.dataSource = dataSource;
    }

    public async initializeDb() {
        await this.dataSource.initialize();
        await this.dataSource.runMigrations({ transaction: 'each' });
        console.log(`[Database.initializeDb] : Database connection is succesfull`);
    }

    public async removeDbConnection() {
        await this.dataSource.destroy();
        console.log(`[Database.removeDbConnection] : Database connection removed`);
    }
}

export default Database;
