import express from "express";
import indexRouter from "./routes/indexRouter.js";

const app = express();
const PORT = 8000;

app.use("/", indexRouter);

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));