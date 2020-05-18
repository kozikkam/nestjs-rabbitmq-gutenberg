export abstract class Response<T> {
    public status: number;
    public errorMessage: string;
    public object: T;

    constructor(status: number, object: T) {
        this.status = status;
        this.object = object;
        this.errorMessage = null;
    }
}
