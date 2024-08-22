var express = require('express');
let app = express();
let expressSession = require('express-session');
let bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(expressSession({ secret: "test123!@#", resave: true, saveUninitialized: true }));


let router = express.Router();

router.use((req, res, next) => {
    console.log("URL called: " + req.url);
    next();
});


router.get("/", (req, res) => {
    res.send("<h1>WELCOME TO MY PAGE</h1>");
});

router.get("/homepage", (req, res) => {
    res.send("<h1>WELCOME TO MY HOMEPAGE</h1>");
});

// Use the router
app.use("/", router);

app.listen(8080, () => console.log("Server running at http://localhost:8080"));




//router.use() - used to apply middleware on all URL
//router.METHOD() - get,post,put, delete
