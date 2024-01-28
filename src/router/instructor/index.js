import { Router } from "express";
import InstructorController from "../../controller/instructor/index.js";

const instructorRouter = Router();

instructorRouter.get("/instructor", InstructorController.getAll);
instructorRouter.get("/single", InstructorController.getOne);

export default instructorRouter;
