import { Injectable } from '@nestjs/common';
import { IBaseRepository } from './base.repository.interface';
import { BaseEntity, Connection, Repository } from 'typeorm';
import { InjectConnection } from '@nestjs/typeorm';

@Injectable()
export abstract class RepositoryBase<Entity extends BaseEntity> implements IBaseRepository {
    protected abstract entity: new () => Entity;

    constructor(
        @InjectConnection()
        private readonly _connection: Connection,
    ) {
    }

    protected async getRepository(): Promise<Repository<Entity>> {
        return this._connection.manager.getRepository<Entity>(this.entity.name);
    }
}
