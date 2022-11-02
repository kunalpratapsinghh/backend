const mongoose=require("mongoose");
const MongoUrl="mongodb+srv://kunal:123@cluster0.m2jxbxv.mongodb.net/bmiuser?retryWrites=true&w=majority";
const connection=mongoose.connect(MongoUrl)
module.exports=connection