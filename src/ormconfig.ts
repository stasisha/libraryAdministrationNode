import User from "./models/User";
import Book from "./models/Book";

const config = {
  type: "sqlite",
  database: __dirname + "/../storage/db.sqlite",
  migrationsTableName: "custom_migration_table",
  migrations: ["src/migration/*.js"],
  cli: {
    migrationsDir: "src/migration"
  },
  entities: [
    User, Book
  ],
};

export default config;
