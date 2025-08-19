const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const {v4: uuidv4} = require("uuid");
const methodOverride = require("method-override");


app.use(express.urlencoded({ extended: true }))

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")))  //*we want to use css file

app.use(methodOverride("_method"));  //*to use patch and delete method in form  


let posts = [             //*let kara haij kuyki agar const kar dete to delete nahi kar pate 
    {   id: uuidv4(),         //*posts ka array banaya hai
        username : "apnacollege",
        content : "I love coding"
    },
    {
        id: uuidv4(),
        username : "Anshul",
        content : "If not today then when"
    },
    {
        id: uuidv4(),
        username : "XXXXX",
        content : "I love coding"
    }
]


app.get("/posts", (req, res) => {
    res.render("index.ejs", {posts});
})

app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
})

app.get("/posts/:id", (req, res) => {
    let {id} = req.params;
    let post = posts.find((p) => id ===p.id);   //*id ko match karke post ko dhoonda gya hai
    res.render("show.ejs", {post});
})

app.post("/posts", (req, res) => {
    let {username, content} = req.body;
    let id = uuidv4();  //*new post ka id generate kara
    posts.push({id, username, content});
    res.redirect("/posts");
})


app.patch("/posts/:id", (req, res) => {
    let  {id} = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id ===p.id); 
    post.content = newContent;  //*post ka content update kara
    res.redirect("/posts");  //*redirect kara post ke show page pe
    
})

app.get("/posts/:id/edit", (req, res) => {
    let {id} = req.params;
    let post = posts.find((p) => id ===p.id);
    res.render("edit.ejs", {post});
})

app.delete("/posts/:id", (req, res) => {
    let {id} = req.params;
    posts = posts.filter((p) => id !== p.id);  //*filter kara post ko delete kara
    res.redirect("/posts");
})




app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})




//?REDIRECT 

//*USED TO CONNECT PAGES --- KISI AUR URL PE REQ BHEJ SAKTE HAIN



//?CREATE ID FOR POSTS

//* USING UUID 
//*NPM I UUID


