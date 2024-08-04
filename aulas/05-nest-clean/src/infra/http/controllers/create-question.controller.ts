import { CreateQuestionUseCase } from '@/domain/forum/application/use-cases/create-question'
import { CurrentUser } from '@/infra/auth/current-user-decorator'
import { UserPayload } from '@/infra/auth/jwt.strategy'
import { ZodValidationPipe } from '@/infra/http/pipes/zod-validation-pipe'
import { BadRequestException, Body, Controller, Post } from '@nestjs/common'
import { z } from 'zod'

const createQuestionBodySchema = z.object({
  title: z.string(),
  content: z.string(),
})

export type CreateQuestionBodySchema = z.infer<typeof createQuestionBodySchema>

const bodyValidationPipe = new ZodValidationPipe(createQuestionBodySchema)
@Controller('/questions')
export class CreateQuestionController {
  constructor(private createQuestion: CreateQuestionUseCase) {}

  @Post()
  async handle(
    @Body(bodyValidationPipe) body: CreateQuestionBodySchema,
    @CurrentUser() user: UserPayload,
  ) {
    const { title, content } = body
    const { sub: authorId } = user

    const result = await this.createQuestion.execute({
      title,
      content,
      authorId,
      attachmentsIds: [],
    })

    if (result.isLeft()) {
      throw new BadRequestException()
    }
  }
}
