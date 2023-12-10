import { GymsRepository } from '@/repositories/gyms-repository'
import type { Gym } from '@prisma/client'

interface SearchGymsUseCaseRequest {
  query: string
  page: number
}

interface SearchGymsUseCaseResponse {
  gym: Gym[]
}

export class SearchGymsUseCase {
  constructor(private gymsRepository: GymsRepository) {}

  async execute({
    query,
    page,
  }: SearchGymsUseCaseRequest): Promise<SearchGymsUseCaseResponse> {
    const gym = await this.gymsRepository.searchMany(query, page)

    return { gym }
  }
}
