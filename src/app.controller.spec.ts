import { Test, TestingModule } from '@nestjs/testing'
import { AppController } from './app.controller'
import { AppService } from './app.service'

describe('AppController', () => {
  let controller: AppController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile()

    controller = module.get<AppController>(AppController)
  })

  describe('HealthCheck', () => {
    it('should return "API is running"', () => {
      expect(controller.getHealthCheck()).toEqual({
        message: 'API is running',
      })
    })
  })
})
