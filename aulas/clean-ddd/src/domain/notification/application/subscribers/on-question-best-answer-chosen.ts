import { DomainEvents } from '@/core/events/domain-events'
import type { EventHandler } from '@/core/events/event-handler'
import type { AnswersRepository } from '@/domain/forum/application/repositories/answers-repository'
import { QuestionBestAnswerChosenEvent } from '@/domain/forum/enterprise/entities/events/question-best-answer-chosen'
import type { SendNotificationUseCase } from '../use-cases/send-notification'

export class OnQuestionBestAnswerChosen implements EventHandler {
  constructor(
    private answersRepository: AnswersRepository,
    private sendNotification: SendNotificationUseCase,
  ) {
    this.setupSubscriptions()
  }

  setupSubscriptions(): void {
    DomainEvents.register(
      this.sendQuestionBestAnswerNotification.bind(this),
      QuestionBestAnswerChosenEvent.name,
    )
  }

  private async sendQuestionBestAnswerNotification({
    question,
    bestAnswerId,
  }: QuestionBestAnswerChosenEvent) {
    const answer = await this.answersRepository.findById(
      bestAnswerId.toString(),
    )

    if (answer) {
      await this.sendNotification.excute({
        recipientId: answer.authorId.toString(),
        title: `Sua resposta foi escolhida como a melhor resposta!`,
        content: `A resposta que você deu para a pergunta "${question.title.substring(0, 20).concat('...')}" foi escolhida como a melhor resposta. Parabéns!`,
      })
    }
  }
}
