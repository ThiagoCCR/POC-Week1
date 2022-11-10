import { Request, Response } from "express";
import * as taskRepository from "../repositories/tasks-repositories.js";
import { Task, TaskEntity } from "../protocols/task.js";
import { QueryResult } from "pg";

async function getAllTasks(req: Request, res: Response) {
  try {
    const tasks: QueryResult<TaskEntity> = await taskRepository.getTasks();
    res.status(200).send(tasks.rows);
  } catch (error) {
    res.sendStatus(500).send(error.message);
  }
}

async function createTask(req: Request, res: Response) {
  const newTask: Task = res.locals.task;
  try {
    await taskRepository.insertTask(newTask);
    res.status(201).send("Task created");
  } catch (error) {
    res.sendStatus(500).send(error.message);
  }
}

async function deleteTask(req: Request, res: Response) {
  const taskId: string = res.locals.taskId;
  try {
    await taskRepository.eraseTask(taskId);
    res.status(204).send("Task Deleted");
  } catch (error) {
    res.sendStatus(500).send(error.message);
  }
}

async function updateTask(req: Request, res: Response) {
  const taskId: string = res.locals.taskId;
  try {
    await taskRepository.updateTask(taskId);
    res.status(200).send("Task updated");
  } catch (error) {
    res.sendStatus(500).send(error.message);
  }
}

async function countTasksByResponsible(req: Request, res: Response) {
  try {
    const response: QueryResult = await taskRepository.countTasks();
    res.status(200).send(response.rows);
  } catch (error) {
    res.sendStatus(500).send(error.message);
  }
}

export {
  getAllTasks,
  createTask,
  deleteTask,
  updateTask,
  countTasksByResponsible,
};
