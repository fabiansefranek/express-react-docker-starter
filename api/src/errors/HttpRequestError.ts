import ApplicationError from "./ApplicationError";

class HttpRequestError extends ApplicationError {
    constructor(public status: number, message: string) {
        super(message);
        this.name = this.constructor.name;
        this.message = message;
        this.status = status;
    }
}

export default HttpRequestError;
