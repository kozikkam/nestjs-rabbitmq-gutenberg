import { NestFactory } from '@nestjs/core';

import { ExceptionHandler } from './core/exceptionHandler/exception-handler';
import { AppModule } from './app.module';
import { ILogger } from './core/logger/logger.interface';
import { Logger } from './core/logger/logger';
import { SwaggerModule, DocumentBuilder, SwaggerBaseConfig, SwaggerDocument } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

async function bootstrap(): Promise<void> {
    const app: INestApplication = await NestFactory.create(AppModule);
    const logger: ILogger = new Logger();

    app.useGlobalFilters(new ExceptionHandler(logger));

    const baseOptions: SwaggerBaseConfig = new DocumentBuilder()
        .setTitle('Metadata extractor publisher api')
        .setVersion('1.0')
        .build();
    const allDocuments: SwaggerDocument = SwaggerModule.createDocument(app, baseOptions);
    SwaggerModule.setup('swagger', app, allDocuments);

    const port: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
    await app.listen(port);
    console.log(`Publisher is listening on port ${port}`);
}
bootstrap();
