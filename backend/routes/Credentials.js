const router=require('express').Router();
let User=require('../DB/Authentication')
const bcrypt=require('bcrypt')
const salt=10
router.route('/').post((req,res)=>{
    const uname=req.body.username
    const pwd=req.body.password
    console.log(uname)
    console.log(pwd)
    User.findOne({username:uname},function(err,user){
        if(err){
            console.log(err)
            return res.status(500).send()
        }
        var val=bcrypt.compareSync(pwd,user.password)
        if(val){
        console.log("User Exists")
        return res.status(200).send();
    }
    console.log("Invalid credentials")
    return res.status(404).send();

})
}
);
router.route('/add').post((req,res)=>{
    const name=req.body.name
    const branch=req.body.branch    
const username=req.body.username
var password=req.body.password
const rollno=req.body.rollno
const role=req.body.role
var hash = bcrypt.hashSync(password, 10);
console.log(hash)
password=hash
const newUser= new User({name,username,password,branch,rollno,role})          
newUser.save()
.then(()=>res.json('User Added'))
.catch(err=>res.status(400).json('Error:'+err))
});
module.exports=router;