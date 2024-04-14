export const RUSSIAN_PHONE_MASK = '+7 (###) ###-##-##';

export const INTERNATIONAL_RUSSIAN_PHONE_NUMBER_REGEXP =
    /^\+7\s?\(\d{3}\)\s?\d{3}-\d{2}-\d{2}$/;

export const PAGINATION_PARAMS_DEFAULT = {
    PAGE_LIMIT: 10,
};

export const isServer = typeof window === 'undefined';

export const STORAGE_IDS = {
    CARTS: 'carts',
    PHONE: 'phone',
};

export const MAX_ALLOWED_PRODUCT_QUANTITY_TO_ORDER = 1000000;
