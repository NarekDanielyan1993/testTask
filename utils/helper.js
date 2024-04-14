import {
    COMMON_ERROR_TYPES
} from 'constant';

export const transformErrorData = (error) => {
    const err = {};

    err.isError = true;
    err.errors = error?.response?.data?.errors || [];
    err.title =
        error?.response?.data?.title ||
        COMMON_ERROR_TYPES.INTERNAL_SERVER_ERROR.title;
    err.msg =
        error?.response?.data?.msg ||
        error.msg ||
        COMMON_ERROR_TYPES.INTERNAL_SERVER_ERROR.msg;
    return err;
};