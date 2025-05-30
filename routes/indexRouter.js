import { Router } from "express";
import path from "path";

const currentDir = import.meta.dirname;
const indexRouter = Router();

console.log("in Index router");
console.log(currentDir);

indexRouter.get("/", (req, res) => {
    let indexPath = path.join(currentDir, "../index.html")
    res.sendFile(indexPath);
})

export default indexRouter;