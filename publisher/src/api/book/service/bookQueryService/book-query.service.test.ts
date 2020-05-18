import { IBookQueryService } from './book-query.service.interface';
import { Test, TestingModule } from '@nestjs/testing';
import { COMMON_IDENTIFIERS } from '../../../../injectTokens';
import { BookQueryService } from './book-query.service';

jest.mock('fs');

describe('BookQueryService', () => {
    let mockedModule: TestingModule;
    let bookQueryService: IBookQueryService;

    beforeEach(async () => {
        jest.resetAllMocks();

        mockedModule = await Test.createTestingModule({
            providers: [
                {
                    provide: COMMON_IDENTIFIERS.IBookQueryService,
                    useClass: BookQueryService,
                },
            ],
        }).compile();

        bookQueryService = mockedModule.get(COMMON_IDENTIFIERS.IBookQueryService);
    });

    describe('getBookDirectories', () => {
        it('should fetch all book directories from files dir', async () => {
            const readdir: any = jest.fn((path: string, options: object, cb: (err: any, files: any) => void) => {
                cb(undefined, ['some', 'files']);
            });
            require('fs').readdir = readdir;

            const result: string[] = await bookQueryService.getBookDirectories();

            expect(result).toEqual(['some', 'files']);
        });

        it('should throw error if cant find directory to read from', async () => {
            const readdir: any = jest.fn((path: string, options: object, cb: (err: any, files: any) => void) => {
                cb(new Error(), null);
            });
            require('fs').readdir = readdir;

            await expect(bookQueryService.getBookDirectories()).rejects.toStrictEqual(new Error());
        });
    });
});
