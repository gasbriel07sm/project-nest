import { JwtService } from '@nestjs/jwt'
import { Test, TestingModule } from '@nestjs/testing'
import * as bcrypt from 'bcrypt'
import { PrismaService } from '../../prisma.service'
import { MailModule } from '../mail/mail.module'
import { MailService } from '../mail/mail.service'
import { UsersService } from '../users/users.service'
import { AuthService } from './auth.service'
import { mockedUsers } from '../users/users.mocks'

jest.mock('bcrypt')

describe('AuthService', () => {
  let service: AuthService
  let userService: UsersService
  let mailService: MailService
  let prisma: PrismaService
  let jwtService: JwtService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [MailModule],
      providers: [
        AuthService,
        {
          provide: PrismaService,
          useValue: {
            user: {
              update: jest.fn(),
              create: jest.fn(),
            },
          },
        },
        {
          provide: JwtService,
          useValue: {
            sign: jest.fn().mockReturnValue('123'),
            verify: jest.fn(),
          },
        },
        {
          provide: UsersService,
          useValue: {
            create: jest.fn(),
            findByEmail: jest.fn(),
            findById: jest.fn(),
          },
        },
        {
          provide: MailService,
          useValue: {
            sendPasswordRequest: jest.fn(),
          },
        },
      ],
    }).compile()

    service = module.get<AuthService>(AuthService)
    userService = module.get<UsersService>(UsersService)
    prisma = module.get<PrismaService>(PrismaService)
    mailService = module.get<MailService>(MailService)
    jwtService = module.get<JwtService>(JwtService)
  })

  it('should be able to sign up a new user', async () => {
    const user = mockedUsers[0]
  })
})
