import Express from "express";
import InstructorController from "./controller/instructor/index.js";

const app = Express();
// app.get("/instructor", InstructorController.getall);

app.get("/instructor", InstructorController.getAll)
app.get("/single", InstructorController.getOne)
app.listen(3001, () => console.log("Server is running on port 3001"));
