const express = require("express");
const app= express();
console.dir(app);

app.use((req,res) => {
    console.log(" WE GOT A NEW REQUEST! ");
    // res.send("HELLO, WE GOT YOUR REQUEST! THIS FEELS AMAZING!! ");
    // res.send({color:'red'});
    res.send('<h1>This is my webpage!</h1>');
    
})

app.listen(8080, () =>{
    console.log("LISTENING ON PORT 8080!");
})