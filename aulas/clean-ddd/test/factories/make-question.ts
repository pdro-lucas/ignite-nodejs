import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import {
  Question,
  QuestionProps,
} from '@/domain/forum/enterprise/entities/question'
import { Slug } from '@/domain/forum/enterprise/entities/value-objects/slug'

export function makeQuestion(override: Partial<QuestionProps> = {}) {
  const question = Question.create({
    title: 'What is the best way to learn React?',
    content:
      'I am trying to learn React and I am not sure what is the best way to do it. Can someone give me some tips?',
    slug: Slug.create('what-is-the-best-way-to-learn-react'),
    authorId: new UniqueEntityID(),
    ...override,
  })

  return question
}
