import { useQuery } from '@tanstack/react-query';
import { REVIEW_PATHS } from 'constant';
import { METHODS } from 'constant/api';
import { useErrorBoundary } from 'react-error-boundary';
import { apiRequest } from 'utils';

export const GET_REVIEWS = 'GET_REVIEWS';

export const getReviews = async () => {
    const { data } = await apiRequest({
        method: METHODS.GET,
        url: REVIEW_PATHS.GET_REVIEWS,
    });
    return data;
};

export const useGetReviews = () => {
    const { showBoundary } = useErrorBoundary();

    return useQuery({
        queryKey: [GET_REVIEWS],
        queryFn: getReviews,
        onError: (error) => {
            showBoundary(error);
        },
    });
};
