let mongoose=require("mongoose")

const UserSignUpSchema=mongoose.Schema({
    name:{type:String,required:true},
    email:{ type : String , unique : true, required : true },
    password:{type:String,required:true}
})

const UserSignUp=mongoose.model("bmiuser",UserSignUpSchema)


module.exports=UserSignUp