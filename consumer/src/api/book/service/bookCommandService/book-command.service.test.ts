import { Test, TestingModule } from '@nestjs/testing';
import { COMMON_IDENTIFIERS, COMMON_REPOSITORIES } from '../../../../injectTokens';
import { IBookCommandService } from './book-command.service.interface';
import { BookCommandService } from './book-command.service';
import { IBookRepository } from '../../repository/book.repository.interface';
import { NotFoundException } from '@nestjs/common';
import { bookFixture } from './fixtures/book';
import { IBook } from '../../model/book.interface';

jest.mock('fs');

describe('BookQueryService', () => {
    let mockedModule: TestingModule;
    let bookCommandService: IBookCommandService;
    let bookRepository: IBookRepository;

    beforeEach(async () => {
        jest.resetAllMocks();

        mockedModule = await Test.createTestingModule({
            providers: [
                {
                    provide: COMMON_IDENTIFIERS.IBookCommandService,
                    useClass: BookCommandService,
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

        bookCommandService = mockedModule.get(COMMON_IDENTIFIERS.IBookCommandService);
        bookRepository = mockedModule.get(COMMON_REPOSITORIES.IBookRepository);
    });

    describe('createBook', () => {
        it('should throw error if given book cannot be read', async () => {
            const readFile: any = jest.fn((path: string, cb: (err: any, files: any) => void) => {
                cb(new Error(), undefined);
            });
            require('fs').readFile = readFile;

            await expect(bookCommandService.createBook('any'))
                .rejects.toStrictEqual(new NotFoundException(new Error()));
        });

        it('should parse and save selected book', async () => {
            const readFile: any = jest.fn((path: string, cb: (err: any, files: any) => void) => {
                cb(undefined, bookFixture);
            });
            require('fs').readFile = readFile;
            bookRepository.createBook = jest.fn().mockResolvedValue({ some: 'book' });

            const result: IBook = await bookCommandService.createBook('any');

            expect(bookRepository.createBook).toHaveBeenCalledTimes(1);
            expect(bookRepository.createBook).toHaveBeenCalledWith({
                authors: ['Jefferson, Thomas'],
                title: 'The Declaration of Independence of the United States of America',
                publisher: 'Project Gutenberg',
                publishedDate: '1971-12-01',
                language: 'en',
                subjects: [
                    'United States. Declaration of Independence',
                    'United States -- History -- Revolution, 1775-1783 -- Sources',
                    'E201',
                    'JK',
                ],
                licenseRights: 'license',
            });
            expect(result).toStrictEqual({ some: 'book' });
        });
    });
});
