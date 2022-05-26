const reservationsSeed = require('./01-reservations.json');

exports.seed = function (knex) {
  return knex('reservations').insert(reservationsSeed);
};
