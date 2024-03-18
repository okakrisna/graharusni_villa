/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("payment", (table) => {
    table.increments("id").primary();
    table.string("payment_method", 100).notNullable();
    table.string("payment_status", 100).notNullable();
    table.decimal("payment_total").notNullable();
    table.dateTime("payment_date").notNullable();
    table.integer("reserv_id").unsigned();
    table.foreign("reserv_id").references("reservation.id");
    table.timestamps();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("payment");
};
