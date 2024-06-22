import { left, right, type Either } from '@/core/either'
import type { AnswerCommentsRepository } from '../repositories/answer-comments-repository'

interface DeleteAnswerCommentUseCaseRequest {
  authorId: string
  answerCommentId: string
}

type DeleteAnswerCommentUseCaseResponse = Either<string, Record<string, never>>

export class DeleteAnswerCommentUseCase {
  constructor(private answerCommentsRepository: AnswerCommentsRepository) {}

  async excute({
    authorId,
    answerCommentId,
  }: DeleteAnswerCommentUseCaseRequest): Promise<DeleteAnswerCommentUseCaseResponse> {
    const answerComment =
      await this.answerCommentsRepository.findById(answerCommentId)

    if (!answerComment) {
      return left('Answer comment not found')
    }

    if (answerComment.authorId.toString() !== authorId) {
      return left('You are not allowed to comment on this answer comment')
    }

    await this.answerCommentsRepository.delete(answerComment)

    return right({})
  }
}
