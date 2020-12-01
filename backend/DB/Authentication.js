const mongoose=require('mongoose')
bcrypt=require('bcrypt')
const Schema=mongoose.Schema;
const userSchema=new Schema({
    name:{type: String,required:true,trim:true},
username:{type: String,required:true,trim:true,unique:true,minlength:6},password:{type:String,minlength:8,
required:true,trim:true},branch:{type:String,required:true}
    ,rollno:{type:String,required:true,unique:true},role:{type:String,required:true,trim:true}},{timestamps:true}
);

const User=mongoose.model('User',userSchema)
module.exports=User;