import { register } from '@/http/controllers/users/register'
import type { FastifyInstance } from 'fastify'

import { verifyJWT } from '../../middlewares/verify-jwt'
import { authenticate } from './authenticate'
import { profile } from './profile'

export async function usersRoutes(app: FastifyInstance): Promise<void> {
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
