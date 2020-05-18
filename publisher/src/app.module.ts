import { Global, Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { config } from 'dotenv';
import { resolve, join } from 'path';

import { Config } from './core/config/config';
import { IConfig } from './core/config/config.interface';
import { CoreModule } from './core/core.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RequestLoggerMiddleware } from './core/middleware/request-logger';
import { BookModule } from './api/book/book.module';

config({ path: resolve(__dirname, `../.env`) });
const conf: IConfig = new Config();

@Global()
@Module({
    imports: [
        BookModule,
        CoreModule,
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: conf.DB_HOST,
            port: conf.DB_PORT,
            username: conf.DB_USER,
            password: conf.DB_PASSWORD,
            database: conf.DB_DATABASE,
            entities: [join(__dirname, '**', '*.entity.{ts,js}')],
            ssl: conf.NODE_ENV === 'production',
            retryAttempts: Number.MAX_SAFE_INTEGER,
        }),
    ],
    controllers: [],
    providers: [],
    exports: [],
})
export class AppModule {
    public configure(consumer: MiddlewareConsumer): void {
        consumer
            .apply(RequestLoggerMiddleware)
            .forRoutes({ path: '', method: RequestMethod.ALL });
    }
}
