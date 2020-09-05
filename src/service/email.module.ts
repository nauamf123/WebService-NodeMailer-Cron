require('dotenv').config();
import { Module } from '@nestjs/common';
import {  MailerModule } from '@nestjs-modules/mailer';
import { ProdutoController } from './produto.controller';
import { ProdutoService } from './produto.service';
import 'module-alias/register';


@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: ' smtp.mailtrap.io',
        port: 587,
        tls: {
          ciphers: 'STARTTLS ',
        },
        secure: false, 
        auth: {
          user:  '17824ad0a5852c',
          pass:  '0ab06ed9d42678', 
        },
      },
      defaults: {
        from: '"nest-modules" <nauamffgt123@gmail.com>',
      },
   
    }),
  ],
  controllers: [ProdutoController],
  providers: [ProdutoService],
})
export class AppModule {}