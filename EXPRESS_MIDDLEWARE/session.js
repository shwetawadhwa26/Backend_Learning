var express = require('express');
let app = express();
var bodyParser = require('body-parser');
const session = require('express-session');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.use(session({ secret: "test123!@POK", resave: true, saveUninitialized: true }));

let sessionMiddleware = (req, res, next) => {
    req.session.msg = "MIDDLEWARE says Hello ";
    console.log("Session id: " + req.session.id);
    res.send("<h1> end of request cycle</h1>")
    //next();
    //if next() is not present in middleware code then it gets tuck in an infinite loop 
};
app.use(sessionMiddleware);

app.get("/", function (req, res) {
    console.log("session called");
    res.send("<h2>Message from middleware: " + req.session.msg + "</h2>");
});

app.listen(8080, () => console.log("Server running at port 8080"));
