import { NextFunction, Request, Response } from "express";
import { Task } from "../protocols/task.js";
import { taskSchema } from "../schemas/tasks-schemas.js";

async function validateTaskSchema(req:Request, res:Response, next:NextFunction) {
  const newTask = req.body as Task;
  const { error } = taskSchema.validate(newTask, {
    abortEarly: false,
  });

  if (error) {
    const errorMessages: string[] = error.details.map((value) => value.message);
    return res.status(422).send(errorMessages);
  }

  res.locals.task = newTask;
  next();
}

export { validateTaskSchema };
