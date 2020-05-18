import {
    Controller,
    Post,
    UsePipes,
    Inject,
    Get,
} from '@nestjs/common';
import { COMMON_PATHS, COMMON_IDENTIFIERS } from 'src/injectTokens';
import { ApiUseTags, ApiResponse, ApiOperation } from '@nestjs/swagger';
import { ValidationPipe } from 'src/core/validator/validation.pipe';
import { OkResponse } from 'src/core/response/ok.response';
import { Response } from 'src/core/response/response';
import { IBookQueryService } from './service/bookQueryService/book-query.service.interface';
import { ClientProxy } from '@nestjs/microservices';

@ApiUseTags('books')
@Controller(`${COMMON_PATHS.apiV1}${COMMON_PATHS.book}`)
export class BookController {
    constructor(
        @Inject(COMMON_IDENTIFIERS.IBookQueryService)
        private readonly _bookQueryService: IBookQueryService,
        @Inject(COMMON_IDENTIFIERS.RabbitMqClient)
        private readonly client: ClientProxy,
    ) { }

    public async onApplicationBootstrap(): Promise<void> {
        await this.client.connect();
    }

    @ApiOperation({
        title: 'Add single book to database',
        description: 'Adds first book found in /files directory to database though a worker job',
    })
    @Post()
    @UsePipes(new ValidationPipe())
    public async createSingleBook(): Promise<Response<{ bookId: string }>> {
        const bookDirectories: string[] = await this._bookQueryService.getBookDirectories();

        this.client.emit<string, { bookId: string }>('create_book', { bookId: bookDirectories[0] });
        return new OkResponse({
            bookId: bookDirectories[0],
        });
    }

    @ApiOperation({
        title: 'Add all books to database',
        description: 'Add jobs for each book in /files dir to be added to database',
    })
    @Post('/populate')
    @UsePipes(new ValidationPipe())
    public async createAllBooks(): Promise<Response<{ bookId: string }>> {
        const bookDirectories: string[] = await this._bookQueryService.getBookDirectories();

        for (const bookDir of bookDirectories) {
            this.client.emit<string, { bookId: string }>('create_book', { bookId: bookDir });
        }

        return new OkResponse({
            bookId: bookDirectories[0],
        });
    }

    @ApiOperation({
        title: 'Fetch all books from database',
        description: 'Creates a job to fetch all books from database. Output will be visible in worker console',
    })
    @Get()
    public async getBooks(): Promise<void> {
        this.client.emit<string, string>('show_books', '');
    }
}
