import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateEntitiy1682212292789 implements MigrationInterface {
    name = 'UpdateEntitiy1682212292789'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "invoice"."products"
            ADD "product_code" text NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "invoice"."products"
            ADD CONSTRAINT "UQ_70b3f77ca8de13149b7f08d725c" UNIQUE ("product_code")
        `);
        await queryRunner.query(`
            CREATE INDEX "IDX_70b3f77ca8de13149b7f08d725" ON "invoice"."products" ("product_code")
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP INDEX "invoice"."IDX_70b3f77ca8de13149b7f08d725"
        `);
        await queryRunner.query(`
            ALTER TABLE "invoice"."products" DROP CONSTRAINT "UQ_70b3f77ca8de13149b7f08d725c"
        `);
        await queryRunner.query(`
            ALTER TABLE "invoice"."products" DROP COLUMN "product_code"
        `);
    }

}
