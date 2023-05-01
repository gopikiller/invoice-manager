import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1682908027214 implements MigrationInterface {
    name = 'Init1682908027214'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "invoice"."invoiceitem" (
                "invoiceitemid" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "quantity" integer NOT NULL DEFAULT '1',
                "productId" uuid,
                "invoiceId" uuid,
                CONSTRAINT "PK_39827f487cbcfbe5c8ae8ac18a5" PRIMARY KEY ("invoiceitemid")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "invoice"."product" (
                "productid" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "product_code" text NOT NULL,
                "name" text NOT NULL,
                "description" text,
                "active" boolean NOT NULL DEFAULT true,
                "price" text NOT NULL,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT "UQ_fb912a8e66bfe036057ba4651fe" UNIQUE ("product_code"),
                CONSTRAINT "PK_0c456f1dba9efe20394c2e722f0" PRIMARY KEY ("productid")
            )
        `);
        await queryRunner.query(`
            CREATE INDEX "IDX_fb912a8e66bfe036057ba4651f" ON "invoice"."product" ("product_code")
        `);
        await queryRunner.query(`
            CREATE TABLE "invoice"."invoice" (
                "invoiceid" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "invoicdnumber" text NOT NULL,
                "status" text NOT NULL DEFAULT 'open',
                "duedate" TIMESTAMP,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                "customerId" uuid,
                CONSTRAINT "UQ_f249ef33be0567ba636a16b547b" UNIQUE ("invoicdnumber"),
                CONSTRAINT "PK_c8365e18f4a54a161a85fd95e20" PRIMARY KEY ("invoiceid")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "invoice"."customer" (
                "customerid" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "name" text NOT NULL,
                "email" text NOT NULL,
                "phone" text,
                "address" text,
                "active" boolean NOT NULL DEFAULT true,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT "UQ_fdb2f3ad8115da4c7718109a6eb" UNIQUE ("email"),
                CONSTRAINT "PK_b05bb4a7b5e1ac3309c733ef321" PRIMARY KEY ("customerid")
            )
        `);
        await queryRunner.query(`
            ALTER TABLE "invoice"."invoiceitem"
            ADD CONSTRAINT "FK_c30ad4ee2442ecfca28f13092bb" FOREIGN KEY ("productId") REFERENCES "invoice"."product"("productid") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "invoice"."invoiceitem"
            ADD CONSTRAINT "FK_58b16c27c52d98746b2665f4440" FOREIGN KEY ("invoiceId") REFERENCES "invoice"."invoice"("invoiceid") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "invoice"."invoice"
            ADD CONSTRAINT "FK_925aa26ea12c28a6adb614445ee" FOREIGN KEY ("customerId") REFERENCES "invoice"."customer"("customerid") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "invoice"."invoice" DROP CONSTRAINT "FK_925aa26ea12c28a6adb614445ee"
        `);
        await queryRunner.query(`
            ALTER TABLE "invoice"."invoiceitem" DROP CONSTRAINT "FK_58b16c27c52d98746b2665f4440"
        `);
        await queryRunner.query(`
            ALTER TABLE "invoice"."invoiceitem" DROP CONSTRAINT "FK_c30ad4ee2442ecfca28f13092bb"
        `);
        await queryRunner.query(`
            DROP TABLE "invoice"."customer"
        `);
        await queryRunner.query(`
            DROP TABLE "invoice"."invoice"
        `);
        await queryRunner.query(`
            DROP INDEX "invoice"."IDX_fb912a8e66bfe036057ba4651f"
        `);
        await queryRunner.query(`
            DROP TABLE "invoice"."product"
        `);
        await queryRunner.query(`
            DROP TABLE "invoice"."invoiceitem"
        `);
    }

}
