import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, BaseEntity } from 'typeorm';

@Entity({
    name: 'book'
})
export class BookEntity extends BaseEntity {
    @PrimaryGeneratedColumn({
        name: 'id',
        type: 'integer'
    })
    public id: number;

    @Column({
        name: 'authors',
        type: 'varchar',
        nullable: true,
        array: true
    })
    public authors: string[];

    @Column({
        name: 'title',
        type: 'varchar',
        nullable: true,
    })
    public title: string;

    @Column({
        name: 'publisher',
        type: 'varchar',
        nullable: true,
    })
    public publisher: string;

    @Column({
        name: 'published_date',
        type: 'varchar',
        nullable: true,
    })
    public publishedDate: string;

    @Column({
        name: 'language',
        type: 'varchar',
        nullable: true,
    })
    public language: string;

    @Column({
        name: 'subjects',
        type: 'varchar',
        nullable: true,
        array: true,
    })
    public subjects: string[];

    @Column({
        name: 'license_rights',
        type: 'varchar',
        nullable: true,
    })
    public licenseRights: string;

    @CreateDateColumn({
        name: 'created_at',
        type: 'timestamp without time zone',
    })
    public createdAt: Date;
}
