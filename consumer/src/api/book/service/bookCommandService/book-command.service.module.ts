import { Module } from '@nestjs/common';
import { BookCommandService } from './book-command.service';
import { COMMON_IDENTIFIERS } from 'src/injectTokens';
import { BookQueryServiceModule } from '../bookQueryService/book-query.service.module';

@Module({
    imports: [BookQueryServiceModule],
    providers: [
        {
            provide: COMMON_IDENTIFIERS.IBookCommandService,
            useClass: BookCommandService,
        }
    ],
    exports: [
        COMMON_IDENTIFIERS.IBookCommandService,
    ],
})
export class BookCommandServiceModule { }
