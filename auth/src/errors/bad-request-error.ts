import { CustomError } from './custom-error';
export class BadRequestError extends CustomError {
  statusCode = 400;

  constructor(public errorMessage: string) {
    super(`ErrLog: ${errorMessage}`);

    // Required for extending a built in classes, e.g. Error
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }

  serializeErrors() {
    return [{ message: this.errorMessage }];
  }
}
