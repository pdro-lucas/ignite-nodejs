import type { DomainEvent } from '@/core/events/domain-event'
import type { Answer } from '../answer'
import type { UniqueEntityID } from '@/core/entities/unique-entity-id'

export class AnswerCreatedEvent implements DomainEvent {
  public ocurredAt: Date
  public answer: Answer

  constructor(answer: Answer) {
    this.ocurredAt = new Date()
    this.answer = answer
  }

  getAggregateId(): UniqueEntityID {
    return this.answer.id
  }
}
