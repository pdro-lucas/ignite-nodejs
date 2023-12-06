import { CheckInsRepository } from '@/repositories/check-ins-repository'
import { CheckIn } from '@prisma/client'

interface FetchuserChekiInsHistoryUseCaseRequest {
  userId: string
  page: number
}

interface FetchuserChekiInsHistoryUseCaseResponse {
  checkIns: CheckIn[]
}

export class FetchuserChekiInsHistoryUseCase {
  constructor(private checkInsRepository: CheckInsRepository) {}

  async execute({
    userId,
    page,
  }: FetchuserChekiInsHistoryUseCaseRequest): Promise<FetchuserChekiInsHistoryUseCaseResponse> {
    const checkIns = await this.checkInsRepository.findManyByUserId(
      userId,
      page,
    )

    return {
      checkIns,
    }
  }
}
