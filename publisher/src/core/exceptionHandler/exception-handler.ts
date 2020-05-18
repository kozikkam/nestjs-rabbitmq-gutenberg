import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';
import { HttpArgumentsHost } from '@nestjs/common/interfaces';
import * as HttpStatusCodes from 'http-status-codes';
import { ValidateError } from '../validator/validate.error';
import { ILogger } from '../logger/logger.interface';
import { inspect } from 'util';

@Catch()
export class ExceptionHandler implements ExceptionFilter {
    private readonly _logger: ILogger;

    constructor(logger: ILogger) {
        this._logger = logger;
    }

    public catch(exception: unknown, host: ArgumentsHost): void {
        const ctx: HttpArgumentsHost = host.switchToHttp();
        const response: any = ctx.getResponse();
        const request: any = ctx.getRequest();

        const status: number =
            exception instanceof HttpException
                ? exception.getStatus()
                : HttpStatus.INTERNAL_SERVER_ERROR;
        
        let message: any = exception;
        if (exception instanceof HttpException) {
            message = HttpStatusCodes.getStatusText(status);
        }

        if (status >= 500) {
            this._logger.error(inspect({
                status,
                timestamp: new Date().toISOString(),
                path: request.url,
                messsage: exception,
            }));
        } else {
            this._logger.info(inspect({
                status,
                timestamp: new Date().toISOString(),
                path: request.url,
                messsage: exception,
            }));
        }

        response.status(status).json({
            status,
            object: null,
            errorMessage: message,
        });
    }
}
