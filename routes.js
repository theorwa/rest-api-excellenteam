var path = require('path');
const db = require("./db");
const router = require("express").Router();

router.route("/").get( (req, res) => res.send("Home Dir!"));

router.route("/params").get( (req, res) => {
    res.send(req.query);
});

router.route("/signup").post( async (req, res) => {
    try {await db.signup(req.body)} catch {res.send('duplicated');}
    res.send('registered');
});

router.route("/profile").get( async (req, res) => {
    var profile = await db.profile(req.query['email'])
    if (profile) res.send(profile);
    else res.send("email not found"); 
});


router.route("/html").get( (req, res) => res.sendFile(path.join(__dirname + '/index.html')));


module.exports = router;