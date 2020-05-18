import {
    Controller,
    Inject,
} from '@nestjs/common';
import { COMMON_PATHS, COMMON_IDENTIFIERS } from 'src/injectTokens';
import { IBookCommandService } from './service/bookCommandService/book-command.service.interface';
import { CreateSingleBookRequestDto } from './dto/create-single-book.dto';
import { EventPattern, Payload, Ctx, RmqContext } from '@nestjs/microservices';
import { IBookQueryService } from './service/bookQueryService/book-query.service.interface';

@Controller(`${COMMON_PATHS.apiV1}${COMMON_PATHS.book}`)
export class BookController {
    constructor(
        @Inject(COMMON_IDENTIFIERS.IBookCommandService)
        private readonly _bookCommandService: IBookCommandService,
        @Inject(COMMON_IDENTIFIERS.IBookQueryService)
        private readonly _bookQueryService: IBookQueryService,
    ) { }

    @EventPattern('create_book')
    public async createBook(
        @Payload() data: CreateSingleBookRequestDto,
        @Ctx() context: RmqContext,
    ): Promise<void> {
        const channel: any = context.getChannelRef();
        const originalMsg: any = context.getMessage();

        console.log('processing', data);

        try {
            await this._bookCommandService.createBook(data.bookId);
        } catch (error) {
            console.log(error);
            channel.ack(originalMsg);
            return;
        }

        channel.ack(originalMsg);
    }

    @EventPattern('show_books')
    public async getBooks(): Promise<void> {
        console.log(await this._bookQueryService.fetchBooks());
    }
}
