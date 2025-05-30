import { Router } from "express";
import path from "path";

const currentDir = import.meta.dirname;
const indexRouter = Router();

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    }
];

console.log(currentDir);

indexRouter.get("/", (req, res) => {
    res.render("index", { messages: messages });
})

export default indexRouter;