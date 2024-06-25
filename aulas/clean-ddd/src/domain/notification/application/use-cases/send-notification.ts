import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { right, type Either } from '@/core/either'
import { Notification } from '../../enterprise/notification'
import type { NotificationsRepository } from '../repositories/notifications-repository'

interface SendNotificationUseCaseRequest {
  recipientId: string
  title: string
  content: string
}

type SendNotificationUseCaseResponse = Either<
  null,
  {
    notification: Notification
  }
>

export class SendNotificationUseCase {
  constructor(private notificationRepository: NotificationsRepository) {}

  async excute({
    recipientId,
    title,
    content,
  }: SendNotificationUseCaseRequest): Promise<SendNotificationUseCaseResponse> {
    const notification = Notification.create({
      recipientId: new UniqueEntityID(recipientId),
      title,
      content,
    })

    await this.notificationRepository.create(notification)

    return right({
      notification,
    })
  }
}
