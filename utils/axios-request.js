import axios from 'axios';

export const api = axios.create({
    timeout: 20000,
    baseURL: process.env.NEXT_PUBLIC_SERVER_BASE_URL,
});

export const apiRequest = ({
    method,
    url,
    body = null,
    params = null,
    headers = null,
    options = null,
}) => {
    const config = {
        method: method.toLowerCase(),
        url,
        ...(params && { params: params }),
        ...(body && { data: body }),
        headers: {
            ...(headers && { headers }),
        },
        ...(options && { options }),
    };

    return api.request(config);
};
