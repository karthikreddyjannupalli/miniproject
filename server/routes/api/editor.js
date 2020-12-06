const express = require("express");
const router = express.Router();
const hackerearth = require("hackerearth-node");
const axios = require("axios");

router.post("/run",(req,res) => {
    var hackerEarth=new hackerearth("b9e57deca62c92c6784841a5aeb10428e30efb3a",'');
    var config={};
    config.time_limit=1;  //your time limit in integer
    config.memory_limit=323244;  //your memory limit in integer
    config.source=req.body.source;  //your source code for which you want to use hackerEarth api
    config.input=req.body.testcases;  //input against which you have to test your source code
    config.language=req.body.lang; //optional choose any one of them or none

    hackerEarth.run(config,(err,response) => {
        if(err) {
            res.status(400).json(err);
        }
        res.status(200).json(response);
    }
    )
})

module.exports = router;