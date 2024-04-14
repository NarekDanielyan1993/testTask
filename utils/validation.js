import { INTERNATIONAL_RUSSIAN_PHONE_NUMBER_REGEXP } from 'constant';
import Joi from 'joi';

export const productOrderValidationSchema = Joi.object({
    phone: Joi.string().pattern(INTERNATIONAL_RUSSIAN_PHONE_NUMBER_REGEXP),
});
