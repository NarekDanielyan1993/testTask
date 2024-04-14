export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const QUERY_DEFAULT_PARAMS = {
    defaultOptions: {
        queries: {
            staleTime: 10 * 60 * 1000,
            cacheTime: 10 * 60 * 1000,
            retry: 5,
            retryDelay: 5000,
        },
    },
};

export const METHODS = {
    GET: 'GET',
    POST: 'POST',
    DELETE: 'DELETE',
    PUT: 'PUT',
};
