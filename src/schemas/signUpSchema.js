import Joi from "joi";

export const signUpSchema = Joi.object({
  username: Joi.string().alphanum().required(),
  email: Joi.string().email({ tlds: { allow: false } }).required(),
  password: Joi.string().min(8).required(),
  repeatPassword: Joi.ref('password')
})