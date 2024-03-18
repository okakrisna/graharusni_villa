/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("available", (table) => {
    table.increments("id").primary();
    table.dateTime("available_date").notNullable();
    table.string("description", 100).notNullable();
    table.string("status", 100).notNullable();
    table.integer("id_villa").unsigned();
    table.foreign("id_villa").references("villa.id");
    table.timestamp("update_at").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("available");
};
