const express = require('express');
const app = express();
const userRouter=require("./routes")
const PORT = 3000;

app.use(express.json());
app.use('/api',userRouter);

app.get('/',(req,res)=>{
    res.send('server is okay');
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});