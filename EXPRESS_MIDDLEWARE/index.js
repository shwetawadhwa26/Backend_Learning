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


// app.get('/user/:id', (req, res, next) => {
//   // if the user ID is 0, skip to the next route
//   if (req.params.id === '0') next('route')
//   // otherwise pass the control to the next middleware function in this stack
//   else next()
// }, (req, res, next) => {
//   // send a regular response
//   res.send('regular')
// })

// // handler for the /user/:id path, which sends a special response
// app.get('/user/:id', (req, res, next) => {
//   res.send('special')
// })
