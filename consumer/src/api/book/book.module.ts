import { Module } from '@nestjs/common';
import { BookCommandServiceModule } from './service/bookCommandService/book-command.service.module';
import { BookController } from './book.controller';
import { BookQueryServiceModule } from './service/bookQueryService/book-query.service.module';

@Module({
    imports: [
        BookCommandServiceModule,
        BookQueryServiceModule,
    ],
    controllers: [
        BookController,
    ],
})
export class BookModule { }
