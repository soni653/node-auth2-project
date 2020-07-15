const cleaner = require("knex-cleaner");
exports.seed = function (knex) {
  return cleaner.clean(knex, {
    ignoreTables: ["knex_migration", "knex_migrations_lock"], // Dont empty migration tables
  });
};
