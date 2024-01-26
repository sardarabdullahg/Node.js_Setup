import { Router } from "express";
import instructorRouter from "./instructor/index.js";

const AllRouter = Router();

AllRouter.use(instructorRouter)


export default  AllRouter;