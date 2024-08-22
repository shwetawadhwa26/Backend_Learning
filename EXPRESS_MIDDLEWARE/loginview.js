//step 1 : we will create a login form after submissio we will check inputs in middlware 
// if errois there then login page is displayed
//if the code is perfectly fine then main url is called and will diplay welcome msg var express =
var express = require('express');
let app = express();
let expressSession = require('express-session');

let bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.use(expressSession({ secret:"test123!@#", resave:true, saveUninitialized: true}));

app.get("/login", function(req, res){
    res.render("login_view", {msg:""})
});

app.listen(8080, () => {
    console.log("Server started at port 8080");
});

//