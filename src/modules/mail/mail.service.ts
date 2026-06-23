import { MailerService } from '@nestjs-modules/mailer'
import { Injectable } from '@nestjs/common'

@Injectable()
export class MailService {
  constructor(private readonly mailService: MailerService) {}

  async sendPasswordRequest(email: string, token: string) {
    await this.mailService.sendMail({
      to: email,
      subject: 'Redefinição de senha',
      template: 'forgot-password.hbs',
      context: {
        url: `http://localhost:3000/v1/auth/reset-password?token=${token}`,
      },
    })
  }
}
