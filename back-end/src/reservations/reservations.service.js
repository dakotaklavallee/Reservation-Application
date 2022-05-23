const knex = require('../db/connection.js');

function list(){
    return knex("reservations")
    .select("*")
}


module.exports = {
    list,
}