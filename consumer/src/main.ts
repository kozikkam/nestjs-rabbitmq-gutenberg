import { NestFactory } from '@nestjs/core';

import { ExceptionHandler } from './core/exceptionHandler/exception-handler';
import { AppModule } from './app.module';
import { ILogger } from './core/logger/logger.interface';
import { Logger } from './core/logger/logger';
import { INestMicroservice } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';

async function bootstrap(): Promise<void> {
    const logger: ILogger = new Logger();

    const app: INestMicroservice = await NestFactory.createMicroservice(AppModule,
        {
            transport: Transport.RMQ,
            options: {
            urls: [process.env.RABBIT_MQ_HOST],
            queue: 'book-messages',
            prefetchCount: 10,
            noAck: false,
            queueOptions: {
                durable: false
            },
        },
    });
    
    app.useGlobalFilters(new ExceptionHandler(logger));
    await app.listen(() => console.log('Consumer is listening'));
}
bootstrap();
