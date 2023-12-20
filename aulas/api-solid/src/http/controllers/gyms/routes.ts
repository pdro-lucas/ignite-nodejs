import type { FastifyInstance } from 'fastify'

import { verifyJWT } from '../../middlewares/verify-jwt'

export async function gymsRoutes(app: FastifyInstance): Promise<void> {
  app.addHook('onRequest', verifyJWT)
}
