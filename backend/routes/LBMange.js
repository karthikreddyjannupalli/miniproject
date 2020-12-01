const router=require('express').Router();
let LeaderBoard=require('../DB/LBSchema')
router.route('/').get((req,res)=>{
    LeaderBoard.find()
    .then(users=>res.json(users))
    .catch(err=>res.status(400).json('Error:'+err))
});
router.route('/lblist').post((req,res)=>{
    const name=req.body.name
    const points=req.body.points   
    const rank=req.body.rank
const newLB= new LeaderBoard({name,rank,points})          
newLB.save()
.then(()=>res.json('User Added to LB'))
.catch(err=>res.status(400).json('Error:'+err))
});
module.exports=router;