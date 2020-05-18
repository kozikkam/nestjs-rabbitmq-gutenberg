import { Module } from '@nestjs/common';
import { Logger } from './logger';
import { COMMON_IDENTIFIERS } from 'src/injectTokens';

@Module({
    providers: [
        {
            provide: COMMON_IDENTIFIERS.ILogger,
            useClass: Logger,
        }
    ],
    exports: [
        COMMON_IDENTIFIERS.ILogger,
    ],
})
export class LoggerModule { }
