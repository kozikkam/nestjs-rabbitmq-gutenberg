import { Injectable, Inject } from '@nestjs/common';
import { IBookRepository } from '../../repository/book.repository.interface';
import { IBook } from '../../model/book.interface';
import { IBookQueryService } from './book-query.service.interface';
import { COMMON_REPOSITORIES } from '../../../../injectTokens';

@Injectable()
export class BookQueryService implements IBookQueryService {
    constructor(
        @Inject(COMMON_REPOSITORIES.IBookRepository)
        private readonly _bookRepository: IBookRepository,
    ) { }

    public async fetchBooks(): Promise<IBook[]> {
        return this._bookRepository.findMany();
    }
}
