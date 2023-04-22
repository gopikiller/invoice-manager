import { MigrationInterface, QueryRunner } from "typeorm";

export class AddActiveColumnInCustomers1682125442964 implements MigrationInterface {
    name = 'AddActiveColumnInCustomers1682125442964'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "customers"
            ADD "active" boolean NOT NULL DEFAULT true
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "customers" DROP COLUMN "active"
        `);
    }

}
