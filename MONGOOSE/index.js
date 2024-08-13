const mongoose = require('mongoose');

const dbConnect=async()=>{
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/test');
        console.log("Connection done")
        
    } catch (error) {
        console.log(error)
        
    }
}

dbConnect()