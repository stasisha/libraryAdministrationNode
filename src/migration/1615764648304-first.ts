import {MigrationInterface, QueryRunner} from "typeorm";

export class first1615764648304 implements MigrationInterface {
    name = 'first1615764648304'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "firstName" varchar NOT NULL, "lastName" varchar NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "book" ("ASIN" varchar PRIMARY KEY NOT NULL, "title" varchar NOT NULL, "publishYear" integer NOT NULL, "author" varchar NOT NULL, "language" varchar NOT NULL, "pages" integer NOT NULL, "userId" integer)`);
        await queryRunner.query(`CREATE TABLE "temporary_book" ("ASIN" varchar PRIMARY KEY NOT NULL, "title" varchar NOT NULL, "publishYear" integer NOT NULL, "author" varchar NOT NULL, "language" varchar NOT NULL, "pages" integer NOT NULL, "userId" integer, CONSTRAINT "FK_04f66cf2a34f8efc5dcd9803693" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_book"("ASIN", "title", "publishYear", "author", "language", "pages", "userId") SELECT "ASIN", "title", "publishYear", "author", "language", "pages", "userId" FROM "book"`);
        await queryRunner.query(`DROP TABLE "book"`);
        await queryRunner.query(`ALTER TABLE "temporary_book" RENAME TO "book"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "book" RENAME TO "temporary_book"`);
        await queryRunner.query(`CREATE TABLE "book" ("ASIN" varchar PRIMARY KEY NOT NULL, "title" varchar NOT NULL, "publishYear" integer NOT NULL, "author" varchar NOT NULL, "language" varchar NOT NULL, "pages" integer NOT NULL, "userId" integer)`);
        await queryRunner.query(`INSERT INTO "book"("ASIN", "title", "publishYear", "author", "language", "pages", "userId") SELECT "ASIN", "title", "publishYear", "author", "language", "pages", "userId" FROM "temporary_book"`);
        await queryRunner.query(`DROP TABLE "temporary_book"`);
        await queryRunner.query(`DROP TABLE "book"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
