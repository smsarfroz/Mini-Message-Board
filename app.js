import express from "express";
import indexRouter from "./routes/indexRouter.js";
import path from "node:path";

const app = express();
const PORT = 8000;
const currentDir = import.meta.dirname;

app.set("views", path.join(currentDir, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));