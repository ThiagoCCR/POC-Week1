import express from "express";
import { test } from "./controllers/controller.js";
var app = express();
app.use(express.json());
app.get("/a", test);
app.listen(5000, function () {
    console.log("Server running on port " + 5000);
});
