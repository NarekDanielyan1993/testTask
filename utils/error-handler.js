import { COMMON_ERROR_TYPES } from 'constant/errors';

export class HttpError extends Error {
    constructor(
        message = COMMON_ERROR_TYPES.INTERNAL_SERVER_ERROR.msg,
        statusCode = COMMON_ERROR_TYPES.INTERNAL_SERVER_ERROR.status,
        name = COMMON_ERROR_TYPES.INTERNAL_SERVER_ERROR.name,
        title = COMMON_ERROR_TYPES.INTERNAL_SERVER_ERROR.title,
        errors = []
    ) {
        super(message);
        this.status = statusCode;
        this.errors = errors;
        this.msg = message;
        this.name = name;
        this.title = title;
    }
}

export class ValidationError extends HttpError {
    constructor(message, status, err) {
        super(
            message || COMMON_ERROR_TYPES.VALIDATION_ERROR.msg,
            status || COMMON_ERROR_TYPES.VALIDATION_ERROR.status,
            COMMON_ERROR_TYPES.VALIDATION_ERROR.name,
            COMMON_ERROR_TYPES.VALIDATION_ERROR.title,
            err?.errors || []
        );
    }
}

export class NotFoundError extends HttpError {
    constructor(message, status) {
        super(
            message || COMMON_ERROR_TYPES.NOT_FOUND.msg,
            status || COMMON_ERROR_TYPES.NOT_FOUND.status,
            COMMON_ERROR_TYPES.NOT_FOUND.name,
            COMMON_ERROR_TYPES.NOT_FOUND.title
        );
    }
}

export class UnauthorizedError extends HttpError {
    constructor(message, status) {
        super(
            message || COMMON_ERROR_TYPES.UNAUTHORIZED.msg,
            status || COMMON_ERROR_TYPES.UNAUTHORIZED.status,
            COMMON_ERROR_TYPES.UNAUTHORIZED.name,
            COMMON_ERROR_TYPES.UNAUTHORIZED.title
        );
    }
}

export class ForbiddenError extends HttpError {
    constructor(message, status) {
        super(
            message || COMMON_ERROR_TYPES.FORBIDDEN.msg,
            status || COMMON_ERROR_TYPES.FORBIDDEN.status,
            COMMON_ERROR_TYPES.FORBIDDEN.name,
            COMMON_ERROR_TYPES.FORBIDDEN.title
        );
    }
}

export class InternalServerError extends Error {
    constructor(message, status) {
        super(
            message || COMMON_ERROR_TYPES.INTERNAL_SERVER_ERROR.msg,
            status || COMMON_ERROR_TYPES.INTERNAL_SERVER_ERROR.status,
            COMMON_ERROR_TYPES.INTERNAL_SERVER_ERROR.name,
            COMMON_ERROR_TYPES.INTERNAL_SERVER_ERROR.title
        );
    }
}

export class ErrorHandler {
    static handleError(error, message, status) {
        switch (error.name) {
            case COMMON_ERROR_TYPES.VALIDATION_ERROR.name: {
                return ErrorHandler.handleValidationError(
                    error,
                    message,
                    status
                );
            }
            case COMMON_ERROR_TYPES.NOT_FOUND.name: {
                return ErrorHandler.handleNotFound(error, message, status);
            }
            case COMMON_ERROR_TYPES.FORBIDDEN.name: {
                return ErrorHandler.handleForbidden(error, message, status);
            }
            case COMMON_ERROR_TYPES.UNAUTHORIZED.name: {
                return ErrorHandler.handleUnauthorized(error, message, status);
            }
            default: {
                return ErrorHandler.handleInternalError(error, message, status);
            }
        }
    }

    static handleValidationError(err, message, status) {
        const error = new ValidationError(
            message || err.msg,
            status || err?.status,
            err
        );

        return error;
    }

    static handleNotFound(err, message, status) {
        const error = new NotFoundError(
            message || err?.msg,
            status || err?.status
        );

        return error;
    }

    static handleUnauthorized(err, message, status) {
        const error = new UnauthorizedError(
            message || err?.msg,
            status || err?.status
        );

        return error;
    }

    static handleForbidden(err, message, status) {
        const error = new ForbiddenError(
            message || err?.msg,
            status || err?.status
        );

        return error;
    }

    static handleInternalError(err, message, status) {
        const error = new InternalServerError(
            message || err?.msg,
            status || err?.status
        );

        return error;
    }
}

export const logError = (error, info) => {
    console.error('Error Logging: ', error);
    console.error('Error Info: ', info);
};
