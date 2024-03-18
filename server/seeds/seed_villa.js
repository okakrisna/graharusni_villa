/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("villa").del();
  await knex("villa").insert([
    {
      id: 1,
      name_villa: "2BR Ocean View Villa",
      description: "with 2 bedroom and balroom with pool",
      location: "Br. Medahan, Sukawati, Kemenuh, Gianyar, Bali",
      type_villa: "2 bedroom with view",
      facilities: "pool, bathub, ac, water heater",
      total_bedroom: 2,
      capacity: "Max 3 Adults",
      price_pernight: 1500.465,
      img_villa: "./assets/room-arjuna.jpg",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 2,
      name_villa: "1BR Ocean Front Villa",
      description: "with 1 bedroom and balroom with pool",
      location: "Br. Medahan, Sukawati, Kemenuh, Gianyar, Bali",
      type_villa: "1 bedroom with view rice field",
      facilities: "pool, bathub, ac, water heater",
      total_bedroom: 1,
      capacity: "Max 3 Adults",
      price_pernight: 1600.565,
      img_villa: "./assets/krisna-room.jpg",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 3,
      name_villa: "2BR Ocean Front Cliff Villa",
      description: "with 2 bedroom and balroom with pool",
      location: "Br. Medahan, Sukawati, Kemenuh, Gianyar, Bali",
      type_villa: "1 bedroom with view rice field",
      facilities: "pool, bathub, ac, water heater",
      total_bedroom: 2,
      capacity: "Max 3 Adults",
      price_pernight: 1700.965,
      img_villa: "./assets/bisma-room.jpg",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 4,
      name_villa: "3BR Ocean View Villa",
      description: "with 3 bedroom and balroom with pool",
      location: "Br. Medahan, Sukawati, Kemenuh, Gianyar, Bali",
      type_villa: "1 bedroom with view rice field",
      facilities: "pool, 2 bathub, ac, water heater",
      total_bedroom: 3,
      capacity: "Max 3 Adults",
      price_pernight: 1900.865,
      img_villa: "./assets/duryudana-room.jpg",
      created_at: new Date(),
      updated_at: new Date(),
    },
  ]);
};
