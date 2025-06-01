import { Router } from "express";

const indexRouter = Router();

const messages = [
    {
        id: 0,
        text: "Hi there!",
        user: "Amando",
        added: new Date(),
        country: "Albania"
    },
    {
        id: 1,
        text: "Hello World!",
        user: "Charles",
        added: new Date(),
        country: "France"
    }
];


indexRouter.get("/", (req, res) => {
    res.render("index", { title: "Mini Messageboard" ,messages: messages });
})

indexRouter.get("/new", (req, res) => {
    res.render("form");
});

indexRouter.post("/new", (req, res) => {
    const { messageText, messageUser, country } = req.body;
    messages.push({id: messages.length + 1 , text: messageText, user: messageUser, added: new Date(), country: country });
    res.redirect("/");
});

export default indexRouter;