import { Test, TestingModule } from '@nestjs/testing';
import { COMMON_IDENTIFIERS, COMMON_REPOSITORIES } from '../../../../injectTokens';
import { IBookRepository } from '../../repository/book.repository.interface';
import { IBook } from '../../model/book.interface';
import { IBookQueryService } from './book-query.service.interface';
import { BookQueryService } from './book-query.service';

jest.mock('fs');

describe('BookQueryService', () => {
    let mockedModule: TestingModule;
    let bookQueryService: IBookQueryService;
    let bookRepository: IBookRepository;

    beforeEach(async () => {
        jest.resetAllMocks();

        mockedModule = await Test.createTestingModule({
            providers: [
                {
                    provide: COMMON_IDENTIFIERS.IBookQueryService,
                    useClass: BookQueryService,
                },
                {
                    provide: COMMON_REPOSITORIES.IBookRepository,
                    useValue: {
                        createBook: jest.fn(),
                        findMany: jest.fn(),
                        findOne: jest.fn(),
                    } as IBookRepository,
                },
            ],
        }).compile();

        bookQueryService = mockedModule.get(COMMON_IDENTIFIERS.IBookQueryService);
        bookRepository = mockedModule.get(COMMON_REPOSITORIES.IBookRepository);
    });

    describe('fetchBooks', () => {
        it('should fetch all books from database', async () => {
            bookRepository.findMany = jest.fn().mockResolvedValue([{ some: 'book' }]);

            const result: IBook[] = await bookQueryService.fetchBooks();
            
            expect(result).toStrictEqual([{ some: 'book' }]);
        });
    });
});
