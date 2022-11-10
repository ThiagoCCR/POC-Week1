import { connection } from "../configs/database.js";
import { Task } from "../protocols/task.js";
import { QueryResult } from "pg";

async function getTasks(): Promise<QueryResult<Task>> {
  return connection.query("SELECT * FROM tasks;");
}

async function insertTask(body: Task): Promise<QueryResult>  {
  return connection.query(
    "INSERT INTO tasks (title, description, date,done,responsible) VALUES ($1,$2,$3,$4,$5);",
    [body.title, body.description, body.date, body.done, body.responsible]
  );
}

async function eraseTask(id: string) {
  return connection.query("DELETE FROM tasks WHERE id=$1", [id]);
}

async function getTaskById(id: string) {
  return connection.query("SELECT * FROM tasks WHERE id=$1;", [id]);
}

export { getTasks, insertTask, eraseTask, getTaskById };
