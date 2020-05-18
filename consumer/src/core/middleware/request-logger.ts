import { NestMiddleware, Inject } from '@nestjs/common';
import { inspect } from 'util';
import { ILogger } from '../logger/logger.interface';
import { COMMON_IDENTIFIERS } from 'src/injectTokens';

export class RequestLoggerMiddleware implements NestMiddleware {
    constructor(
        @Inject(COMMON_IDENTIFIERS.ILogger)
        private readonly _logger: ILogger,
    ) { }

    public use(req: any, res: any, next: any): void {
        if (!req.url.includes('login')
            && !(req.url.match(/.*\/users/) && req.method === 'POST')) {
            const ip: string = req.headers['x-forwarded-for'] as string ||
                req.connection.remoteAddress ||
                req.socket.remoteAddress || null;
            this._logger.info(`
                IP: ${ip}
                Request Body: ${inspect(req.body)}
                `);
        }
        next();
    }
}
