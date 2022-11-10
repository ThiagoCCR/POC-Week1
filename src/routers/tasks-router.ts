import express from "express";
import * as tasksController from "../controllers/tasks-controller.js";

const router = express.Router();

router.get("/tasks", tasksController.getAllTasks);

router.post("/tasks", tasksController.createTask);

router.delete("/tasks/:id",tasksController.deleteTask)

export default router;
