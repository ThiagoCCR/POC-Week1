import express from "express";
import * as tasksController from "../controllers/tasks-controller.js";
import * as joiMiddlewares from "../middlewares/joi-middlewares.js";
import * as tasksMiddlewares from "../middlewares/task-middlewares.js";

const router = express.Router();

router.get("/tasks", tasksController.getAllTasks);

router.get("/tasks/count", tasksController.countTasksByResponsible);

router.post(
  "/tasks",
  joiMiddlewares.validateTaskSchema,
  tasksController.createTask
);

router.delete(
  "/tasks/:id",
  tasksMiddlewares.validateTaskId,
  tasksController.deleteTask
);

router.put(
  "/tasks/status/:id",
  tasksMiddlewares.validateTaskId,
  tasksController.updateTask
);

export default router;
