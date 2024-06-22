import type { AnswerComment } from '../../enterprise/entities/answer-comment'
import type { AnswerCommentsRepository } from '../repositories/answer-comments-repository'

interface FetchAnswerAnswersUseCaseRequest {
  page: number
  answerId: string
}

interface FetchAnswerAnswersUseCaseResponse {
  answerComments: AnswerComment[]
}

export class FetchAnswerCommentsUseCase {
  constructor(private answerCommentsRepository: AnswerCommentsRepository) {}

  async excute({
    page,
    answerId,
  }: FetchAnswerAnswersUseCaseRequest): Promise<FetchAnswerAnswersUseCaseResponse> {
    const answerComments =
      await this.answerCommentsRepository.findManyByAnswerId(answerId, {
        page,
      })

    return {
      answerComments,
    }
  }
}
