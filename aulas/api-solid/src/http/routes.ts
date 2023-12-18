import { register } from '@/http/controllers/register'
import type { FastifyInstance } from 'fastify'

import { authenticate } from './controllers/authenticate'
import { profile } from './controllers/profile'
import { verifyJWT } from './middlewares/verify-jwt'

export async function appRoutes(app: FastifyInstance): Promise<void> {
  app.post('/users', register)
  app.post('/sessions', authenticate)

  /** AUTHENTICATED */
  app.get(
    '/me',
    {
      onRequest: [verifyJWT],
    },
    profile,
  )
}
