import { NextFunction, Request, Response } from "express";
import { Task, TaskEntity } from "../protocols/task.js";
import * as taskRepository from "../repositories/tasks-repositories.js";
import { QueryResult } from "pg";

async function validateTaskId(req: Request, res: Response, next: NextFunction) {
  const taskId: string = req.params.id;
  if (!taskId) res.status(400).send("Please inform a task ID");
  try {
    const validateId: QueryResult<TaskEntity> =
      await taskRepository.getTaskById(taskId);

    if (validateId.rowCount === 0) {
      return res.status(404).send("Task not found");
    }
    res.locals.taskId = taskId;
    next();
  } catch (error) {
    res.sendStatus(500).send(error.message);
  }
}

export { validateTaskId };
