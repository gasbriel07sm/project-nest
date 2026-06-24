import { Module } from '@nestjs/common'
import { CloudinaryService } from '../../common/service/cloudinary/cloudinary.service'
import { RequestContextService } from '../../common/service/request-context/request-context.service'
import { PrismaService } from '../../prisma.service'
import { UsersController } from './users.controller'
import { UsersService } from './users.service'

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService, CloudinaryService, RequestContextService],
})
export class UsersModule {}
