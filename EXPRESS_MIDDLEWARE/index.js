var express = require('express'); 
let app = express();

let middleWareFun = (req, res, next) => {
    console.log("middleware called before main url");
    req.requestTime = Date.now();
    next();
}

app.use(middleWareFun);

app.get("/", function(req, res) {
    console.log("home url called");
    res.send("<h1>Page requested at: " + req.requestTime + "</h1>");
});

app.listen(8080, () => console.log("server running at port 8080"));
