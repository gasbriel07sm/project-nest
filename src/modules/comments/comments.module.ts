import { Module } from '@nestjs/common'
import { RequestContextService } from '../../common/service/request-context/request-context.service'
import { PrismaService } from '../../prisma.service'
import { CommentsController } from './comments.controller'
import { CommentsService } from './comments.service'

@Module({
  controllers: [CommentsController],
  providers: [CommentsService, PrismaService, RequestContextService],
})
export class CommentsModule {}
