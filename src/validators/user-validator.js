import Joi from "joi";

const userValidator = Joi.object({
    name: Joi.string().regex(/^.+ .+$/).required().messages({
        'string.pattern.base': 'Введіть через пробіл ім\'я та фамілію.',
        'any.required': 'required field name'
    }),
    email: Joi.string().regex(/^.+@.+[.].{2,4}$/).required().messages({
        'string.email': 'Введіть коректний email адрес.',
        'any.required': 'required field email'
    }),
    username: Joi.string().regex(/^[a-zA-Zа-яА-ЯёЁіІїЇ]+[a-zA-Zа-яА-ЯёЁіІїЇ0-9'`.\-_]+$/).min(2).required().messages({
        'string.pattern.base': 'Введіть нікнейм - мінімум 2 символи',
        'any.required': 'required field username'
    })
});

export { userValidator };




// import Joi from "joi";
//
// const userValidator = Joi({
//     name: Joi.regex(/^.+ .+$/).required().messages({
//         'pattern.base':'Введіть через пробіл ім\'я та фамілію.',
//         'required':'required field name'
//     }),
//     email: Joi.regex(/^.+@.+[.].{2,4}$/).required().messages({
//         'pattern.base':'Введіть коректний email адрес.',
//         'required':'required field email'
//     }),
//     username: Joi.regex(/^[a-zA-Zа-яА-ЯёЁіІїЇ]+[a-zA-Zа-яА-ЯёЁіІїЇ0-9]+$/).required().messages({
//         'pattern.base':'Введіть нікнейм - мінімум 2 символи',
//         'required':'required field username'
//     })
// });
//
// export {
//     userValidator
// };