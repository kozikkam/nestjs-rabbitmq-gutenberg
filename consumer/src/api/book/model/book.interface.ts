export interface IBook {
    readonly id: number;
    readonly authors: string[];
    readonly title: string;
    readonly publisher: string;
    readonly publishedDate: string;
    readonly language: string;
    readonly subjects: string[];
    readonly licenseRights: string;
    readonly createdAt: Date;
}
