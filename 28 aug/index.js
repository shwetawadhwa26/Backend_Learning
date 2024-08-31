var express = require('express');
const app = express();
let bodyParser = require('body-parser');
let expressSession = require('express-session');
let { ObjectId } = require('mongodb');
let db = require('./database.js');

app.use(expressSession({ secret: "node_mongo123!@#", resave: true, saveUninitialized: true }));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
    let msg = "";
    if (req.session.msg != undefined && req.session.msg != "") {
        msg = req.session.msg;
        req.session.msg = ""; // Clear message after displaying it
    }
    res.render('home', { msg: msg });
});

app.get('/listcategory', async function(req, res) {
    try {
        const category = db.collection("category");
        const catList = await category.find().toArray();
        res.render("category_list_view", { catList: catList });
    } catch (err) {
        console.log(err);
        res.status(500).send("Error retrieving categories");
    }
});

app.get('/addcategory', function(req, res) {
    res.render('add_category_view');
});

app.post('/addCategorySubmit', async function(req, res) {
    const category = db.collection('category');
    const result = await category.insertOne({ catname: req.body.catname });

    if (result.acknowledged === true) {
        req.session.msg = "Category Added";
    } else {
        req.session.msg = "Cannot add category";
    }
    res.redirect('/');
});

app.get('/delcategory', async function(req, res) {
    let catid = req.query['catid'];
    const category = db.collection('category');

    try {
        const result = await category.deleteOne({ _id: new ObjectId(catid) });
        if (result.deletedCount == 1) {
            req.session.msg = "Category Deleted";
        } else {
            req.session.msg = "Cannot delete category";
        }
    } catch (err) {
        console.log(err);
        req.session.msg = "Error deleting category";
    }
    
    res.redirect('/');
});

app.get("/editcategory", async function(req, res) {
    const category = db.collection("category"); // Corrected typo
    try {
        const catdata = await category.findOne({ _id: new ObjectId(req.query['catid']) });
        res.render("editcategory_view", { catdata: catdata });
    } catch (err) {
        console.log(err);
        res.status(500).send("Error retrieving category for edit");

    }
});


app.post("/editcategorySubmit", async function(req, res) { // Corrected function name and syntax
    const category = db.collection("category");
    try {
        const result = await category.updateOne(
            { _id: new ObjectId(req.body.catid) }, // Corrected typo in ObjectId
            { $set: { catname: req.body.catname } }
        );
        req.session.msg = result.modifiedCount > 0 ? "Category Updated" : "Category not updated";
    } catch (err) {
        console.log(err);
        req.session.msg = "Error updating category";
    }
    res.redirect('/');
});

app.listen(8080, () => console.log("CRUD Server running at http://localhost:8080/"));