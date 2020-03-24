const crypto = require('crypto');

exports.up = function(knex) {
  return knex.schema.createTable('ong', function (table) {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('city').notNullable();
      table.string('uf', 2).notNullable();
      table.string('token').notNullable().defaultTo(crypto.randomBytes(4).toString('HEX'));
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('ong');
};