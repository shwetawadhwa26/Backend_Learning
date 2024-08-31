var express = require('express');
let app = express();
let bodyParser = require('body-parser');
let session = require('express-session');
let db = require("./database.js");
app.use(session({secret:"test123!@#",resave:true,saveUninitialized:true}));
const { ObjectId } = require('mongodb');

app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');
app.get("/",(req,res)=>{
	let msg = "";
	
	if(req.session.msg!=undefined && req.session.msg!=""){
		msg = req.session.msg;
	}
	res.render("home",{msg:msg});
});

app.get("/listcategory",async function(req,res){
	const category = db.collection("category");
	const catList = await category.find().toArray();
	//console.log(catList);
	res.render("listcategory_view",{catList:catList});
	//res.send("");
});

app.get("/addcategory",(req,res)=>{
	res.render("addcategory_view");
});

app.post("/addCategorySubmit",async function(req,res){
	const category = db.collection("category");
	const result = await category.insertOne({catname:req.body.catname});
	
	if(result.acknowledged === true){
		req.session.msg = "Category added";
		res.redirect("/");
	}
	else{
		req.session.msg = "can not add category";
		res.redirect("/");
	}
	//res.send("ack:-"+result.acknowledged + "<br> inserted id "+result.insertedId);
});


app.get("/editcategory",async function(req,res){
	const catid = req.query['catid'];
	const categoryObj = db.collection("category");
	const catData = await categoryObj.findOne({_id:new ObjectId(catid)});
	res.render("editcategory_view",{catData:catData});
});

app.post("/editCategorySubmit", async function(req,res){
	const categoryObj = db.collection("category");
	const updateResult = await categoryObj.updateOne({_id:new ObjectId(req.body.catid)},{$set:{catname:req.body.catname}});
	if(updateResult.modifiedCount==1)
		req.session.msg="Category updated";
	else
		req.session.msg="Category not updated";
	
	res.redirect("/");
});

app.get("/delcategory",async function (req,res){
	const categoryObj = db.collection("category");
	const catid = req.query['catid'];
	const result = await categoryObj.deleteOne({_id:new ObjectId(catid)});
	
	if(result.deletedCount==1)
		req.session.msg="record deleted";
	else
		req.session.msg="deletion failed";
	res.redirect("/");
});
	

app.listen(8080,()=>console.log("CRUD server running at port no. 8080"));

