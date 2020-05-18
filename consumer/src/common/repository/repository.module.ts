import { Global, Module, ClassProvider } from '@nestjs/common';
import { COMMON_REPOSITORIES } from 'src/injectTokens';
import { BookRepository } from '../../api/book/repository/book.repository';

const providers: ClassProvider[] = [
    {
        provide: COMMON_REPOSITORIES.IBookRepository,
        useClass: BookRepository,
    },
];

@Global()
@Module({
    providers,
    exports: providers.map((provider) => provider.provide),
})
export class RepositoryModule { }
