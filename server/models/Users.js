const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/crud")
.then(() =>{
    console.log("mongodb connected");
})
.catch(() => {
   console.log('failed');
})

const UserSchema = new mongoose.Schema({
    id:{
        
    },
    name:{
        type:String,
        unique:true
    },
    description:{
        type:String
    }, 
    price:{
        type:Number
    }
})

const user = mongoose.model("user", UserSchema);
module.exports=user;