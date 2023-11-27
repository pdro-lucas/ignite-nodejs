import { register } from '@/http/controllers/register'
import type { FastifyInstance } from 'fastify'

export async function appRoutes(app: FastifyInstance): Promise<void> {
  app.post('/users', register)
}
