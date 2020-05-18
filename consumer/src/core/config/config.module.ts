import { Module } from '@nestjs/common';
import { Config } from './config';
import { COMMON_IDENTIFIERS } from 'src/injectTokens';

@Module({
    providers: [
        {
            provide: COMMON_IDENTIFIERS.IConfig,
            useClass: Config,
        }
    ],
    exports: [
        COMMON_IDENTIFIERS.IConfig,
    ],
})
export class ConfigModule { }
