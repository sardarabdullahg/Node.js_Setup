import Express from "express";
import InstructorController from "./controller/instructor/index.js";
import instructorRouter from "./router/instructor/index.js";
import AllRouter from "./router/index.js";

const app = Express();
// app.get("/instructor", InstructorController.getall);

app.use(AllRouter)
app.listen(3001, () => console.log("Server is running on port 3001"));
