import { Router } from "express";

const indexRouter = Router();

const messages = [
    {
        id: 0,
        text: "THIS IS SO COOL, ITS LIKE A TIME CAPSULE, IF SOMEONE FROM THE FUTURE IS READING THIS LET ME KNOW IF I MADE IT! HI MOM",
        user: "Amando",
        added: "01/06/2025",
        country: "Albania"
    },
    {
        id: 1,
        text: "tmw odin-main is your emotional support rubber duck 🦆❤️</br>> Type detailed question with 5 screenshots and all relevant links</br>> Proofread it</br>> Spot the obvious mistake</br>> *existential crisis*</br>> Post 'Nevermind, I got it'</br>",
        user: "serialRubberDucker14",
        added: "03/06/2025",
        country: "India"
    },
    {
        id: 1,
        text: "tmw odin-main is your emotional support rubber duck 🦆❤️</br>> Type detailed question with 5 screenshots and all relevant links</br>> Proofread it</br>> Spot the obvious mistake</br>> *existential crisis*</br>> Post 'Nevermind, I got it'</br>",
        user: "serialRubberDucker14",
        added: "03/06/2025",
        country: "India"
    },
    {
        id: 1,
        text: "tmw odin-main is your emotional support rubber duck 🦆❤️</br>> Type detailed question with 5 screenshots and all relevant links</br>> Proofread it</br>> Spot the obvious mistake</br>> *existential crisis*</br>> Post 'Nevermind, I got it'</br>",
        user: "serialRubberDucker14",
        added: "03/06/2025",
        country: "India"
    },
    {
        id: 1,
        text: "tmw odin-main is your emotional support rubber duck 🦆❤️</br>> Type detailed question with 5 screenshots and all relevant links</br>> Proofread it</br>> Spot the obvious mistake</br>> *existential crisis*</br>> Post 'Nevermind, I got it'</br>",
        user: "serialRubberDucker14",
        added: "03/06/2025",
        country: "India"
    },{
        id: 1,
        text: "tmw odin-main is your emotional support rubber duck 🦆❤️</br>> Type detailed question with 5 screenshots and all relevant links</br>> Proofread it</br>> Spot the obvious mistake</br>> *existential crisis*</br>> Post 'Nevermind, I got it'</br>",
        user: "serialRubberDucker14",
        added: "03/06/2025",
        country: "India"
    },
    {
        id: 1,
        text: "tmw odin-main is your emotional support rubber duck 🦆❤️</br>> Type detailed question with 5 screenshots and all relevant links</br>> Proofread it</br>> Spot the obvious mistake</br>> *existential crisis*</br>> Post 'Nevermind, I got it'</br>",
        user: "serialRubberDucker14",
        added: "03/06/2025",
        country: "India"
    },
    {
        id: 1,
        text: "tmw odin-main is your emotional support rubber duck 🦆❤️</br>> Type detailed question with 5 screenshots and all relevant links</br>> Proofread it</br>> Spot the obvious mistake</br>> *existential crisis*</br>> Post 'Nevermind, I got it'</br>",
        user: "serialRubberDucker14",
        added: "03/06/2025",
        country: "India"
    }
];


indexRouter.get("/", (req, res) => {
    res.render("index", { title: "Mini Messageboard", messages: messages });
})

indexRouter.get("/new", (req, res) => {
    res.render("form");
});

indexRouter.post("/new", (req, res) => {
    const { messageText, messageUser, country } = req.body;
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const formattedToday = dd + '/' + mm + '/' + yyyy;

    messages.push({ id: messages.length + 1, text: messageText, user: messageUser, added: formattedToday, country: country });
    res.redirect("/");
});

export default indexRouter;