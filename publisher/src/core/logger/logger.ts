import { Injectable } from '@nestjs/common';
import { ILogger } from './logger.interface';
import moment from 'moment';

@Injectable()
export class Logger implements ILogger {
    public info(message: string): void {
        const formattedMessage: string = this.getFormattedMessage(message);
        console.log(formattedMessage);
    }

    public warn(message: string): void {
        const formattedMessage: string = this.getFormattedMessage(message);
        console.log(formattedMessage);
    }

    public error(message: string): void {
        const formattedMessage: string = this.getFormattedMessage(message);
        console.log(formattedMessage);
    }

    private getFormattedMessage(message: string): string {
        let formattedMessage: string = message;

        formattedMessage = `[${moment.utc().toISOString()}] ${message}`;

        return formattedMessage;
    }
}
