import { JwtService } from '@nestjs/jwt'
import { Test, TestingModule } from '@nestjs/testing'
import { PrismaService } from '../../prisma.service'
import { UsersService } from '../users/users.service'
import { AuthController } from './auth.controller'
import { AuthModule } from './auth.module'
import { AuthService } from './auth.service'

describe('AuthController', () => {
  let controller: AuthController
  let service: AuthService
  let userService: UsersService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AuthModule],
    })
      .overrideProvider(AuthService)
      .useValue(service)
      .overrideProvider(PrismaService)
      .useValue({ $connect: jest.fn() })
      .overrideProvider(JwtService)
      .useValue({
        sign: jest.fn().mockReturnValue('123'),
        verify: jest.fn(),
      })
      .overrideProvider(UsersService)
      .useValue(userService)
      .compile()

    controller = module.get<AuthController>(AuthController)
    service = module.get<AuthService>(AuthService)
    userService = module.get<UsersService>(UsersService)
  })

  describe('signUp', () => {
    it('should be able to sign up a new user', async () => {
      const user = mockedUsers[0]
      const mockedResponse = {
        token: '123',
      }
    })
  })
})
