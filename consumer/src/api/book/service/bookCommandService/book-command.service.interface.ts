import { IBook } from '../../model/book.interface';

export interface IBookCommandService {
    createBook(bookNumber: string): Promise<IBook>;
}
