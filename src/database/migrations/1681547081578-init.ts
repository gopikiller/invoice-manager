import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1681547081578 implements MigrationInterface {
    name = 'Init1681547081578'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "invoiceitems" (
                "invoiceitemid" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "quantity" integer NOT NULL DEFAULT '1',
                "productId" uuid,
                "invoiceId" uuid,
                CONSTRAINT "PK_df3beeffaeebaba792575e97b43" PRIMARY KEY ("invoiceitemid")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "products" (
                "productid" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "name" text NOT NULL,
                "description" text,
                "active" boolean NOT NULL DEFAULT false,
                "price" numeric NOT NULL,
                CONSTRAINT "PK_30db402199e2667c88b7309cf15" PRIMARY KEY ("productid")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "invoices" (
                "invoiceid" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "invoicdnumber" text NOT NULL,
                "status" text NOT NULL DEFAULT 'open',
                "duedate" TIMESTAMP,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                "customerId" uuid,
                CONSTRAINT "UQ_04b395019c7432a9194d9ceddbd" UNIQUE ("invoicdnumber"),
                CONSTRAINT "PK_d7066156b908c6bd9d8126951e6" PRIMARY KEY ("invoiceid")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "customers" (
                "customerid" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "name" text NOT NULL,
                "email" text NOT NULL,
                "phone" text NOT NULL,
                "address" text NOT NULL,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT "UQ_8536b8b85c06969f84f0c098b03" UNIQUE ("email"),
                CONSTRAINT "UQ_88acd889fbe17d0e16cc4bc9174" UNIQUE ("phone"),
                CONSTRAINT "PK_d3574ae29b24a081be8895c0f89" PRIMARY KEY ("customerid")
            )
        `);
        await queryRunner.query(`
            ALTER TABLE "invoiceitems"
            ADD CONSTRAINT "FK_6f09660f2ee245fa2c86085b160" FOREIGN KEY ("productId") REFERENCES "products"("productid") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "invoiceitems"
            ADD CONSTRAINT "FK_852ccdb1e94863acd9ae2dc8c1b" FOREIGN KEY ("invoiceId") REFERENCES "invoices"("invoiceid") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "invoices"
            ADD CONSTRAINT "FK_1df049f8943c6be0c1115541efb" FOREIGN KEY ("customerId") REFERENCES "customers"("customerid") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "invoices" DROP CONSTRAINT "FK_1df049f8943c6be0c1115541efb"
        `);
        await queryRunner.query(`
            ALTER TABLE "invoiceitems" DROP CONSTRAINT "FK_852ccdb1e94863acd9ae2dc8c1b"
        `);
        await queryRunner.query(`
            ALTER TABLE "invoiceitems" DROP CONSTRAINT "FK_6f09660f2ee245fa2c86085b160"
        `);
        await queryRunner.query(`
            DROP TABLE "customers"
        `);
        await queryRunner.query(`
            DROP TABLE "invoices"
        `);
        await queryRunner.query(`
            DROP TABLE "products"
        `);
        await queryRunner.query(`
            DROP TABLE "invoiceitems"
        `);
    }

}
