/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
  return knex.schema.createTable("villa", (table) => {
    table.increments("id").primary();
    table.string("name_villa", 100).notNullable();
    table.text("description").notNullable();
    table.string("location", 100).notNullable();
    table.string("type_villa", 100).notNullable();
    table.text("facilities").notNullable();
    table.integer("total_bedroom").notNullable();
    table.string("capacity", 100).notNullable();
    table.decimal("price_pernight", 12, 3).notNullable();
    table.string("img_villa").notNullable();
    table.timestamps();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {
  return knex.schema.dropTable("villa");
};
