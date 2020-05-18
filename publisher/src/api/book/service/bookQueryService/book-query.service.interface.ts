export interface IBookQueryService {
    getBookDirectories(): Promise<string[]>;
}
