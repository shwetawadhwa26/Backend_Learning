const express = require("express");
const app= express();


app.use((req,res,next) => {
    console.log(" WE GOT A NEW REQUEST! ");
    next();
});
    // res.send("HELLO, WE GOT YOUR REQUEST! THIS FEELS AMAZING!! ");
    // res.send({color:'red'});
    // res.send('<h1>This is my webpage!</h1>');

    app.get('/r/subreddit/:postId',(req,res)=>{
        const {postId} = req.params;
        res.send(`THIS IS A SUBREDDIT!!! : ${postId}`);
    });

    app.get('/', (req,res)=>{
        res.send("okay");
    });

    app.post('/cats',(req,res)=>{
        res.send("post request to cats!!!!!");
    });

    app.get('/cats',(req,res)=>{
        res.send("MEOW!!!");
    });

    app.get('/dogs',(req,res) =>{
        res.send("WOOF!!!");
    });

    app.get('/search',(req,res)=>{
        const{q}=req.query;
        res.send('<h1>SEARCH RESULT FOR: ${q}</h1>')
    })

    app.get('*',(req,res)=>{
        res.send("OKOKOKOKOK");
    });

    

    //cats => 'meow'
    //dogs => 'woof'
    // 


app.listen(8080, () =>{
    console.log("LISTENING ON PORT 8080!");
});