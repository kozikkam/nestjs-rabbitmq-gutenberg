import { IBookRepository, ICreateBook } from './book.repository.interface';
import { RepositoryBase } from 'src/core/repository/base.repository';
import { BookEntity } from '../model/book.entity';
import { IBook } from '../model/book.interface';
import { Repository } from 'typeorm';

export class BookRepository extends RepositoryBase<BookEntity> implements IBookRepository {
    protected entity: new () => BookEntity = BookEntity;

    public async createBook(data: ICreateBook): Promise<IBook> {
        const repository: Repository<BookEntity> = await this.getRepository();

        const newBook: BookEntity = new BookEntity();
        newBook.authors = data.authors;
        newBook.title = data.title;
        newBook.publisher = data.publisher;
        newBook.publishedDate = data.publishedDate;
        newBook.language = data.language;
        newBook.subjects = data.subjects;
        newBook.licenseRights = data.licenseRights;

        const savedBook: BookEntity = await repository.save(newBook);

        return this.map(savedBook);
    }

    public async findMany(): Promise<IBook[]> {
        const repository: Repository<BookEntity> = await this.getRepository();

        const books: BookEntity[] = await repository.find();

        return books.map((d) => this.map(d));
    }

    public async findOne(id: number): Promise<IBook> {
        const repository: Repository<BookEntity> = await this.getRepository();

        const book: BookEntity = await repository.findOne(id);

        return this.map(book);
    }

    private map(entity: BookEntity): IBook {
        if (!entity) {
            return null;
        }
        
        return {
            id: entity.id,
            authors: entity.authors,
            title: entity.title,
            publisher: entity.publisher,
            publishedDate: entity.publishedDate,
            language: entity.language,
            subjects: entity.subjects,
            licenseRights: entity.licenseRights,
            createdAt: entity.createdAt,
        };
    }
}
