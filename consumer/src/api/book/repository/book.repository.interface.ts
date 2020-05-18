import { IBaseRepository } from 'src/core/repository/base.repository.interface';
import { IBook } from '../model/book.interface';

export interface IBookRepository extends IBaseRepository {
    createBook(data: ICreateBook): Promise<IBook>;
    findMany(): Promise<IBook[]>;
    findOne(id: number): Promise<IBook>;
}

export interface ICreateBook extends Omit<IBook, 'id' | 'createdAt'> {
}
