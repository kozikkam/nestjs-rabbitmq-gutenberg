import { Global, Module } from '@nestjs/common';
import { config } from 'dotenv';
import { resolve } from 'path';
import { ConfigModule } from './config/config.module';
import { LoggerModule } from './logger/logger.module';

config({ path: resolve(__dirname, `../.env`) });

@Global()
@Module({
    imports: [
        ConfigModule,
        LoggerModule,
    ],
    controllers: [],
    exports: [
        ConfigModule,
        LoggerModule,
    ],
})
export class CoreModule { }
