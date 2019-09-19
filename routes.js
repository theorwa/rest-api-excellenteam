var path = require('path');
const db = require("./db");
const router = require("express").Router();

router.route("/").get( (req, res) => res.sendFile(path.join(__dirname + '/index.html')));

router.route("/params").get( (req, res) => {
    res.send(req.query);
});

router.route("/signup").post( async (req, res) => {
    await db.signup(req.body)
    res.send('registered');
});

router.route("/profile").get( async (req, res) => {
    var profile = await db.profile(req.query['email'])
    res.send(profile);
});

// router.route("/").get( (req, res) => res.send('Hello World!'));
// router.route("/").get( (req, res) => res.send('Hello World!'));

module.exports = router;