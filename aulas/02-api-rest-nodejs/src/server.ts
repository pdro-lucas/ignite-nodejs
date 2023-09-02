import fastify from 'fastify';
import { knex } from './database';
import { env } from './env';

const app = fastify();

app.get('/', async (request, reply) => {
  const transactions = await knex('transactions').select('*');

  return transactions;
});

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP server running on http://localhost:3333');
  });
