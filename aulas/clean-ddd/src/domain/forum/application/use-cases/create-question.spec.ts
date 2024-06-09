import { Question } from '../../enterprise/entities/question'
import { QuestionRepository } from '../repositories/questions.repository'
import { CreateQuestionUseCase } from './create-question'

const fakeQuestionsRepository: QuestionRepository = {
  create: async (question: Question) => {},
}

test('create a question', async () => {
  const createQuestion = new CreateQuestionUseCase(fakeQuestionsRepository)

  const { question } = await createQuestion.excute({
    authorId: '1',
    title: 'Nova pergunta',
    content: 'Conteudo da pergunta',
  })

  expect(question.id).toBeTruthy()
})
