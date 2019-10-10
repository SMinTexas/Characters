const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    if (req.session && req.session.name) {
        res.redirect("/account/dashboard");
    } else {
        res.redirect("/account/login");
    }
});

router.get("/login", function(req, res) {
    if (req.session && req.session.name) {
        res.redirect("/dashboard");
    }
    res.render("login");
});

router.post("/login", function(req, res) {
    if (req.session) {
        req.session.name = req.body.name;
    }
    res.redirect("/account");
});

router.post("/add", function(req, res) {
    if (req.session) {
        if (!req.session.favMovies) req.session.favMovies = [];
        req.session.favMovies.push({ title: req.body.title });
    }
    res.redirect("/account/dashboard");
});

router.get("/dashboard", (req, res) => {
    var data = {};
    if (req.session && req.session.favMovies) {
        data.favMovies = req.session.favMovies;
    } else {
        data.message = "No favorite movies listed.";
    }
    res.render("dashboard", data);
});

router.get("/logout", (req, res) => {
    req.session.destroy(() => {
        res.redirect("/account/login");
    });
});

module.exports = router;