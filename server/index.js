const express = require('express')
const app = express()
const db = require('./config/db')



app.get('/',(req, res)=>{
    res.send("Welcome To Story App Server")
})


app.listen(6001, (err)=>{
    if(err){
        console.log("Error In Server", err);
    }
    else{
        console.log("Server Is running");
    }
})
