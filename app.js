// const express = require("express");
// const app= express();
// const PORT = process.env.PORT || 5000;
// app.get("/",(req,res)=>{
//     res.send("hi I am live");
// });


// const start= async() => {
//     try{
//         app.listen(PORT, ()=>{
//         console.log('${PORT} YES I AM CONNECTED');
//     });
// }
// catch(error){
//         console.log(error);
//     }
// };

// start();

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('SHIVU ');
});

app.get('/about', (req, res) => {
    res.send('the about page');
});

app.get('/contact', (req, res) => {
    res.send('the contact page');
});

app.use((req, res) => {
    res.status(404).send('Page not found');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});



