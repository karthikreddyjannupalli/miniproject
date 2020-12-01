const mongoose=require('mongoose')
const Schema=mongoose.Schema;
const LBSchema=new Schema({
    name:{type: String,required:true,trim:true},points:{type:Number,required:true}
    ,rank:{type:Number,required:true,unique:true}},{timestamps:true}
);
const LeaderBoard=mongoose.model('LeaderBoard',LBSchema)
module.exports=LeaderBoard;