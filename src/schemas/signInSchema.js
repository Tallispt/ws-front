import Joi from "joi";

export const signInSchema = Joi.object({
  username: Joi.alternatives().try(
    Joi.string().email({ tlds: { allow: false } }),
    Joi.string().alphanum()
  ).required(),
  password: Joi.string().required()
})