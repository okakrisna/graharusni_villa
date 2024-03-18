/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("reservation", (table) => {
    table.increments("id").primary();
    table.string("gues_name", 100).notNullable();
    table.string("guest_email", 100).notNullable();
    table.integer("guest_tlfn").notNullable();
    table.dateTime("date_check_in").notNullable();
    table.dateTime("date_chech_out").notNullable();
    table.integer("guest_total").notNullable();
    table.string("status_payment").notNullable();
    table.integer("id_villa").unsigned();
    table.foreign("id_villa").references("villa.id");
    table.integer("id_user").unsigned();
    table.foreign("id_user").references("users.id");
    table.timestamps();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("reservation");
};
