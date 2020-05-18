import { getStatusText, CREATED } from 'http-status-codes';
import { Response } from './response';

export class CreatedResponse<T = string> extends Response<T> {
    constructor(message: T = getStatusText(CREATED) as unknown as T) {
        super(CREATED, message);
    }
}
