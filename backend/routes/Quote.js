
const router=require('express').Router();
let Quote=require('../DB/QuoteSchema')
router.route('/add').post((req,res)=>{
    const quote=req.body.quote
const newQuote= new Quote({quote})          
newQuote.save()
.then(()=>res.json('Quotes Added'))
.catch(err=>res.status(400).json('Error:'+err))
});
module.exports=router;