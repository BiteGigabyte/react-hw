import Joi from "joi";

const commentValidator = Joi.object({
    name: Joi.string().regex(/^.+[A-Za-zА-Яа-яІіЇїҐґЬь]$/).required().messages({
        'string.pattern.base': 'Введіть через пробіл ім\'я та фамілію.',
        'any.required': 'Це поле обов\'язкове.',
        'string.empty': 'Це поле обов\'язкове для заповнення.'
    }),
    email: Joi.string().regex(/^.+@.+[.].{2,4}$/).required().messages({
        'string.pattern.base': 'Введіть коректний email адрес.',
        'any.required': 'Це поле обов\'язкове.',
        'string.empty': 'Це поле обов\'язкове для заповнення.'

    }),
    body: Joi.string().min(2).required().messages({
        'string.pattern.base': 'Введіть опис - мінімум 2 символи',
        // 'string.required': 'required field username'
    })
});

export { commentValidator };


