import { Injectable, InternalServerErrorException } from '@nestjs/common';
import * as dotenv from 'dotenv';
import { IConfig } from './config.interface';

@Injectable()
export class Config implements IConfig {
    public DB_HOST: string;
    public DB_PORT: number;
    public DB_USER: string;
    public DB_PASSWORD: string;
    public DB_DATABASE: string;
    public NODE_ENV: string;
    public RABBITMQ_HOST: string;

    private readonly requiredEnvs: string[];

    constructor() {
        this.requiredEnvs = [
            'DB_HOST',
            'DB_PORT',
            'DB_USER',
            'DB_PASSWORD',
            'DB_DATABASE',
            'NODE_ENV',
            'RABBITMQ_HOST',
        ];
        this.loadConfiguration();
    }

    public loadConfiguration(): void {
        dotenv.config();

        for (const key of this.requiredEnvs) {
            if (!process.env[key]) {
                throw new Error(`${key} is required, and is not specified in environment variables`);
            }
        }

        this.DB_HOST = process.env.DB_HOST;
        this.DB_PORT = parseInt(process.env.DB_PORT, 10);
        if (isNaN(this.DB_PORT)) {
            throw new InternalServerErrorException('Cannot load config. Appropriate database port must be specified');
        }
        this.DB_USER = process.env.DB_USER;
        this.DB_PASSWORD = process.env.DB_PASSWORD;
        this.DB_DATABASE = process.env.DB_DATABASE;
        this.NODE_ENV = process.env.NODE_ENV;
        this.RABBITMQ_HOST = process.env.RABBITMQ_HOST;
    }
}
