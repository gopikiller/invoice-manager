import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdatePriceType1682215818046 implements MigrationInterface {
    name = 'UpdatePriceType1682215818046'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "invoice"."products" DROP COLUMN "price"
        `);
        await queryRunner.query(`
            ALTER TABLE "invoice"."products"
            ADD "price" text NOT NULL
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "invoice"."products" DROP COLUMN "price"
        `);
        await queryRunner.query(`
            ALTER TABLE "invoice"."products"
            ADD "price" numeric NOT NULL
        `);
    }

}
