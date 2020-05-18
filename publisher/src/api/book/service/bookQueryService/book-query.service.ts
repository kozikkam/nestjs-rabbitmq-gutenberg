import { Injectable } from '@nestjs/common';
import { IBookQueryService } from './book-query.service.interface';
import fs from 'fs';
import path from 'path';

@Injectable()
export class BookQueryService implements IBookQueryService {

    public async getBookDirectories(): Promise<string[]> {
        const appDir: string = path.dirname(require.main.filename);

        const directories: string[] = await new Promise((resolve, reject) =>
            fs.readdir(path.join(appDir, '/../', `files/`), {}, (err, files) => {
                if (err) {
                    reject(err);
                }
                resolve(files as string[]);
            }));

        return directories;
    }
}
