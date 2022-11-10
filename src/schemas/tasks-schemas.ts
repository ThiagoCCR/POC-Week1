import Joi from "joi";


export const taskSchema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    date: Joi.string().required() || Joi.date(),
    done: Joi.boolean().required(),
    responsible: Joi.string().required(),
})



  
