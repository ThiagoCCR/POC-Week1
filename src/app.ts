import express from "express";
import dotenv from "dotenv";
import tasksRouter from "./routers/tasks-router.js";

dotenv.config()

const app = express();

app.use(express.json());

app.use(tasksRouter);

app.listen(process.env.PORT, () => {
    console.log("Server running on port " + process.env.PORT);
  });