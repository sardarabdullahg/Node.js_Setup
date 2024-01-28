import Express from "express";
import InstructorController from "./controller/instructor/index.js";
import instructorRouter from "./router/instructor/index.js";
import AllRouter from "./router/index.js";
import { ConnectDb } from "./db/config.js";

const app = Express();
ConnectDb(); // This is db connection path

app.use(AllRouter);

app.listen(3001, () => console.log("Server is running on port 3001"));
