import { Module } from '@nestjs/common';
import { COMMON_IDENTIFIERS } from 'src/injectTokens';
import { BookQueryService } from './book-query.service';

@Module({
    imports: [],
    providers: [
        {
            provide: COMMON_IDENTIFIERS.IBookQueryService,
            useClass: BookQueryService,
        }
    ],
    exports: [
        COMMON_IDENTIFIERS.IBookQueryService,
    ],
})
export class BookQueryServiceModule { }
