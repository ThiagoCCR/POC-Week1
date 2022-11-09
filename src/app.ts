import express from "express";
import {test} from "./controllers/controller.js"; 
import dotenv from "dotenv"
dotenv.config()

const app = express();

app.use(express.json());

app.get("/a", test);

app.listen(process.env.PORT, () => {
    console.log("Server running on port " + process.env.PORT);
  });