import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookQueryServiceModule } from './service/bookQueryService/book-query.service.module';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { COMMON_IDENTIFIERS } from '../../injectTokens';
import { config } from 'dotenv';
import { resolve } from 'path';
import { Config } from '../../core/config/config';
import { IConfig } from '../../core/config/config.interface';

config({ path: resolve(__dirname, `../../.env`) });
const conf: IConfig = new Config();

@Module({
    imports: [
        BookQueryServiceModule,
        ClientsModule.register([
            {
                name: COMMON_IDENTIFIERS.RabbitMqClient,
                transport: Transport.RMQ,
                options: {
                    urls: [conf.RABBITMQ_HOST],
                    queue: 'book-messages',
                    queueOptions: {
                      durable: false
                    },
                },
            },
        ]),
    ],
    controllers: [
        BookController,
    ],
})
export class BookModule { }
