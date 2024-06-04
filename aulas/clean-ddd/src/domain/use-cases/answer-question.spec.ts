import { AnswersRepository } from '../repositories/answers.repository'
import { AnswerQuestionUseCase } from './answer-question'

const fakeAnswersRepository: AnswersRepository = {}

test('create an answer', async () => {
  const answerQuestion = new AnswerQuestionUseCase(fakeAnswersRepository)

  const answer = await answerQuestion.excute({
    content: 'Nova resposta',
    questionId: '1',
    instructorId: '1',
  })

  expect(answer.content).toEqual('Nova resposta')
})
