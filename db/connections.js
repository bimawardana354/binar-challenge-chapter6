const { Client } = require('pg');

module.exports = async function dbConection() {
  const client = new Client({
    user: 'postgres',
    password: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'challenge_chapter_6',
  });

  await client.connect();

  return client;
};
