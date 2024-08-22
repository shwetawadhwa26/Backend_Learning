// var express = require('express');
// let app = express();
// let expressSession = require('express-session');
// let bodyParser = require('body-parser');

// app.use(bodyParser.urlencoded({ extended: true }));
// app.set('view engine', 'ejs');
// app.use(expressSession({ secret: "test123!@#", resave: true, saveUninitialized: true }));


// let router = express.Router();

// // router.use((req, res, next) => {
// //     console.log("URL called: " + req.url);
// //     next();
// // });

// router.use("/login",(req,res,next)=>{
//     console.log("url:-"+req.url);
//     console.log("method used :- "+req.method);
//     next();
// });

// app.post("/login",function(req,res){
//     console.log("login form submitted");
//     res.send("<h1> Email:- " +req.body.email+"</h1");
// });


var express=require('express');
let app=express();
let bodyParser=require('body-parser');
let expressSession=require('express-session');
app.use(expressSession({secret:"test123!@#",resave:true,saveUninitialized:true}));
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
let router = express.Router();
//router.use(); //it is use to apply middleware on all urls
//router.METHOD() //get, post, put, delete
/*router.use((req,res,next)=>{
console.log("url called:- "+req.url);
next();
});*/
router.use("/login",(req,res,next)=>{
	console.log("url called:- "+req.url);
	console.log("method used:- "+req.method);
	next();
});
router.post("/contactusSubmit",(req,res,next)=>{
	console.log("name  "+req.body.name);
	console.log("query  "+req.body.uquery);
	next();
});
app.use("/",router); //this statement should come before any app.get or app.post or app.put or app.delete
app.get("/",function(req,res){
res.send("<h1>Welcome to first page </h1>");
});
app.get("/homepage",function(req,res){
	res.send("<h1> welcome to homepage </h1>");
})
app.get("/login",function(req,res){
	console.log("Login form displayed");
	res.render("login_middle");
});
app.post("/login",function(req,res){
	console.log("login form submitted");
	res.send("<h1> Email:-"+req.body.email+"/h1");
});
app.get("/contactus",(req,res)=>{
	res.render("/contactus_view");
})
app.post("/contactusSubmit",function(req,res){
	res.send("<h1>Name:- "+req.body.name+"</h1>
	<h1>Query:- "+req.body.uquery+"</h1>");
});
app.listen(8080,()=>console.log("server running at port no 8080"));


// router.get("/", (req, res) => {
//     res.send("<h1>WELCOME TO MY PAGE</h1>");
// });

// router.get("/homepage", (req, res) => {
//     res.send("<h1>WELCOME TO MY HOMEPAGE</h1>");
// });

// // Use the router
// app.use("/", router);[0]

app.listen(8080, () => console.log("Server running at http://localhost:8080"));




//router.use() - used to apply middleware on all URL
//router.METHOD() - get,post,put, delete
 