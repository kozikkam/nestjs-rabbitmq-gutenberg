import { getStatusText, OK } from 'http-status-codes';
import { Response } from './response';

export class OkResponse<T = string> extends Response<T> {
    constructor(message: T = getStatusText(OK) as unknown as T) {
        super(OK, message);
    }
}
