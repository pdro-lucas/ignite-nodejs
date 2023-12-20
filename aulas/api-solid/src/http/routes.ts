import { register } from '@/http/controllers/users/register'
import type { FastifyInstance } from 'fastify'

import { authenticate } from './controllers/users/authenticate'
import { profile } from './controllers/users/profile'
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
