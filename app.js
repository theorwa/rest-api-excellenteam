var app = require('express')();



// ========== MiddleWares ===========
var bodyParser = require('body-parser');
app.use(bodyParser.json());

var cookieParser = require('cookie-parser');
app.use(cookieParser());

var errorHandler = require('errorhandler');
app.use(errorHandler());

var cors = require('cors');
app.use(cors());
// ===================================


// ==== Simple Example 1 ====
app.get('/simple1',function(req,res){
    res.send('Hello World!');
});
// ==========================


// ==== Simple Example 2 ====
app.get('/simple2',function(req,res){
    res.write("WELCOME!\n");
    res.end('Hello World!');
});
// ==========================



// ==== use external file routes.js ====
app.use('/', require('./routes'))
// =====================================



// ==== MiddleWare not found ====
app.use(function(req, res, next) {
    res.status(404).send("Sorry, that route doesn't exist. Have a nice day :)");
});
// ==============================


// app.listen(9001);


let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
