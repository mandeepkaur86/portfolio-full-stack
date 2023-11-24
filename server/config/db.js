const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://admin:admin@cluster0.ak6deqi.mongodb.net/StoryApp?retryWrites=true&w=majority')
.then(()=>{
    console.log("DB Connection Successfull");
})
.catch(err=>{
    console.log("Error In DB Connection", err);
})
