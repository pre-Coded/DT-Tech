const { MongoClient } = require("mongodb");

const DB_URL = "";

const client = new MongoClient(DB_URL);

module.exports = {
    client,
}