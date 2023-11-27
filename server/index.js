const express = require('express')
const app = express()
const db = require('./config/db')
const seed = require('./config/seed')



app.get('/',(req, res)=>{
    res.send("Welcome To Story App Server")
})

const adminRoutes = require('./routes/adminRoutes')
app.use('/admin',adminRoutes)





app.listen(6001, (err)=>{
    if(err){
        console.log("Error In Server", err);
    }
    else{
        console.log("Server Is running");
    }
})
