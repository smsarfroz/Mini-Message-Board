import { Router } from "express";
import supabase from "../config/supabaseClient.js";

const indexRouter = Router();

const messages = [
    {
        id: 1,
        text: "tmw odin-main is your emotional support rubber duck 🦆❤️</br>> Type detailed question with 5 screenshots and all relevant links</br>> Proofread it</br>> Spot the obvious mistake</br>> *existential crisis*</br>> Post 'Nevermind, I got it'</br>",
        user: "serialRubberDucker14",
        added: "03/06/2025",
        country: "India"
    },
];


indexRouter.get("/", async (req, res) => {
    // console.log(supabase);
    const { data, error } = await supabase
        .from("messages")
        .select("*")
        .order("created_at", { ascending: false });  

    if (error) {
        return res.status(500).send("Database error");
    }
    // console.log(data);
    const formattedMessages = data.map(msg => ({
        id: msg.id,
        text: msg.text,
        user: msg.user,
        added: new Date(msg.created_at).toLocaleDateString(),
        country: msg.country
    }));
    res.render("index", { title: "Mini Messageboard", messages: formattedMessages });

})


indexRouter.get("/new", (req, res) => {
    res.render("form");
});

indexRouter.get("/:id", (req, res) => {
    const { id } = req.params;
    res.send(`Details for message ${id}`);
});
indexRouter.post("/new", async (req, res) => {
    const { messageText, messageUser, country } = req.body;
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const formattedToday = dd + '/' + mm + '/' + yyyy;

    const { error } = await supabase
        .from('messages')
        .insert([{  text: messageText, user: messageUser, added: formattedToday, country: country }])
    
    if (error) {
        console.error(error);
        res.status(500).send("please fill the details correctly");
    }
    // messages.push({ id: messages.length + 1, text: messageText, user: messageUser, added: formattedToday, country: country });
    res.redirect("/");
});

export default indexRouter;