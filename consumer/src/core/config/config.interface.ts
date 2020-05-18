export interface IConfig {
    DB_HOST: string;
    DB_PORT: number;
    DB_USER: string;
    DB_PASSWORD: string;
    DB_DATABASE: string;
    NODE_ENV: string;
    
    loadConfiguration(): void;
}
