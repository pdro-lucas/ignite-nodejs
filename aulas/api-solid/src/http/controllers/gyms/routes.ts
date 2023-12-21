import type { FastifyInstance } from 'fastify'

import { verifyUserRole } from '@/http/middlewares/verifyUserRole'
import { verifyJWT } from '../../middlewares/verify-jwt'
import { create } from './create'
import { nearby } from './nearby'
import { search } from './search'

export async function gymsRoutes(app: FastifyInstance): Promise<void> {
  app.addHook('onRequest', verifyJWT)

  app.get('/gyms/search', search)
  app.get('/gyms/nearby', nearby)

  app.post(
    '/gyms',
    {
      onRequest: verifyUserRole('ADMIN'),
    },
    create,
  )
}
