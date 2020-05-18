import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { IBookCommandService } from './book-command.service.interface';
import { IBookRepository } from '../../repository/book.repository.interface';
import { IBook } from '../../model/book.interface';
import xml2js from 'xml2js';
import fs from 'fs';
import path from 'path';
import { COMMON_REPOSITORIES } from '../../../../injectTokens';

@Injectable()
export class BookCommandService implements IBookCommandService {
    constructor(
        @Inject(COMMON_REPOSITORIES.IBookRepository)
        private readonly _bookRepository: IBookRepository,
    ) { }

    public async createBook(bookNumber: string): Promise<IBook> {
        const parser: xml2js.Parser = new xml2js.Parser();
        const appDir: string = path.dirname(require.main.filename);

        let fileData: Buffer;
        try {
            fileData = await new Promise((resolve, reject) =>
                fs.readFile(path.join(appDir, '/../', `files/${bookNumber}/pg${bookNumber}.rdf`),
                (err, data) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(data);
                }));
        } catch (error) {
            throw new NotFoundException(error);
        }

        const parsedFile: any = await parser.parseStringPromise(fileData.toString());

        const ebook: any = parsedFile['rdf:RDF']['pgterms:ebook'][0];

        let authors: string[];
        try {
        authors = ebook['dcterms:creator']
            .map((el: any) => el['pgterms:agent'])
            .reduce((acc: any, el: any) => [...acc, ...el ], [])  // flatMap
            .map((el: any) => el['pgterms:name'])
            .reduce((acc: any, el: any) => [...acc, ...el ], []); // flatMap
        } catch (e) {
            // ignore
        }

        let title: string;
        try {
            title = ebook['dcterms:title'][0];
        } catch (e) {
            // ignore
        }

        let publisher: string;
        try {
            publisher = ebook['dcterms:publisher'][0];
        } catch (e) {
            // ignore
        }

        let publishedDate: string;
        try {
            publishedDate = ebook['dcterms:issued'][0]._;
        } catch (e) {
            // ignore
        }

        let language: string;
        try {
            language = ebook['dcterms:language'][0]['rdf:Description'][0]['rdf:value'][0]._;
        } catch (e) {
            // ignore
        }

        let subjects: string[];
        try {
            subjects = ebook['dcterms:subject']
                .map((el: any) => el['rdf:Description'])
                .reduce((acc: any, el: any) => [...acc, ...el ], []) // flatMap
                .map((el: any) => el['rdf:value'][0]);
        } catch (e) {
            // ignore
        }

        let licenseRights: string;
        try {
            licenseRights = ebook['dcterms:license'][0].$['rdf:resource'];
        } catch (e) {
            // ignore
        }

        const createdBook: IBook = await this._bookRepository.createBook({
            authors,
            title,
            publisher,
            publishedDate,
            language,
            subjects,
            licenseRights,
        });

        return createdBook;
    }
}
