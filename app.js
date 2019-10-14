const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const accountRouter = require("./routes/account");
const characters = require("./assets/data/data");
const port = 3000;
const app = express();

app.use(session({
    secret: "The Texas Aggies shocked Alabama in 2012",
    resave: false,
    saveUninitialized: true
}));

app.use(express.static("assets"));
app.set("view engine", "pug");
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function(req, res) {
    res.render("index", { title: "Awesome Movie Characters", message: "We Love Movies" });
});

app.get("/characters", function(req, res) {
    res.render("characters", { characters: characters });
});

app.use("/account", accountRouter);

app.get("/characters/:character", function(req, res) {
    let filteredCharacters = characters.filter(character => {
        return character.slug === req.params.character;
    });
    if (filteredCharacters.length < 1) {
        res.send("Character not found");
    }
    res.render("character", { character: filteredCharacters[0] });
});

app.get("/about/us", function(req, res) {
    res.render("about", { title: "Movie Characters", message: "We like movies" });
});

app.get("/account", function(req, res) {
    res.render("account");
});

app.listen(port, () => {
    console.log(`Port ${port} is running`);
});