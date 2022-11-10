import { Request, Response } from "express";
import * as taskRepository from "../repositories/tasks-repositories.js";
import { Task } from "../protocols/task.js";
import { taskSchema } from "../schemas/tasks-schemas.js";

async function getAllTasks(req: Request, res: Response) {
  try {
    const tasks = await taskRepository.getTasks();
    res.status(200).send(tasks.rows);
  } catch (error) {
    res.sendStatus(500).send(error.message);
  }
}

async function createTask(req: Request, res: Response) {
  const newTask = req.body as Task;
  const validation = taskSchema.validate(newTask, { abortEarly: false });

  if (validation.error) {
    const error: string[] = validation.error.details.map(
      (value) => value.message
    );
    return res.status(422).send(error);
  }

  try {
    await taskRepository.insertTask(newTask);
    res.status(201).send("Task created");
  } catch (error) {
    res.sendStatus(500).send(error.message);
  }
}

async function deleteTask(req: Request, res: Response) {
  const taskId: string = req.params.id;
  if (!taskId) res.status(400).send("Please inform a task ID");
  try {
    const validateId = await taskRepository.getTaskById(taskId);

    if (validateId.rowCount === 0) {
      return res.status(404).send("Task not found");
    }

    await taskRepository.eraseTask(taskId);

    res.status(204).send("Task Deleted");
  } catch (error) {
    res.sendStatus(500).send(error.message);
  }
}

export { getAllTasks, createTask, deleteTask };
