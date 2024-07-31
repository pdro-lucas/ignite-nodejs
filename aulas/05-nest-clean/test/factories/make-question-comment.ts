import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import {
  QuestionComment,
  type QuestionCommentProps,
} from '@/domain/forum/enterprise/entities/question-comment'
import { faker } from '@faker-js/faker'

export function makeQuestionComment(
  override: Partial<QuestionCommentProps> = {},
  id?: UniqueEntityID,
) {
  const questionComment = QuestionComment.create(
    {
      authorId: new UniqueEntityID(),
      questionId: new UniqueEntityID(),
      content: faker.lorem.sentence(),
      ...override,
    },
    id,
  )

  return questionComment
}
