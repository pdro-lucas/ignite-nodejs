import { PrismaCheckInsRepository } from '@/repositories/prisma/prisma.check-ins-repository'
import { FetchuserChekiInsHistoryUseCase } from '../fetch-user-check-ins-history'

export function makeFetchUserCheckInsHistoryUseCase() {
  const checkInsRepository = new PrismaCheckInsRepository()
  const useCase = new FetchuserChekiInsHistoryUseCase(checkInsRepository)

  return useCase
}
