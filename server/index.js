const express = require('express')
const app = express()
const db = require('./config/db')
const seed = require('./config/seed')

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.get('/',(req, res)=>{
    res.send("Welcome To Story App Server")
})

const adminRoutes = require('./routes/adminRoutes')
app.use('/admin',adminRoutes)

const readerRoutes = require('./routes/readerRoutes')
app.use('/reader',readerRoutes)






app.listen(6001, (err)=>{
    if(err){
        console.log("Error In Server", err);
    }
    else{
        console.log("Server Is running");
    }
})
