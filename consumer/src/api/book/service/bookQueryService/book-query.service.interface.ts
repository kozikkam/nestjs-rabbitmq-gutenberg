import { IBook } from '../../model/book.interface';

export interface IBookQueryService {
    fetchBooks(): Promise<IBook[]>;
}
