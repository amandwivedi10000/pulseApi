class ApiError<T = unknown> extends Error {
    public readonly statusCode: number;
    public readonly success: false;
    public readonly errors: string[];
    public readonly data: T | null;
    constructor(
        statusCode: number,
        message = "Something went wrong",
        errors = [],
        data: T | null,
    ) {
        super(message);

        this.statusCode = statusCode;
        this.data = data;
        this.message = message;
        this.success = false;
        this.errors = errors;

        Object.setPrototypeOf(this, new.target.prototype);
        Error.captureStackTrace(this, this.constructor);
    }
}

export { ApiError };
