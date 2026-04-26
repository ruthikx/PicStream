const mongoose = require('mongoose');

async function connectDB(){
    
    await mongoose.connect(process.env.MANGO_URI)
    
    console.log("Connected to DB")
}

module.exports = connectDB