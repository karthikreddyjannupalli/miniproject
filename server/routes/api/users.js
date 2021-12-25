const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const gravatar = require("gravatar");
// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
// Load User model
const User = require("../../models/User");
const passport = require("passport");
const sendMail = require('./sendMail'); 
//@route POST api/users
const CLIENT_URL = config.get('CLIENT_URL');

router.post("/login", (req, res) => {

  const { errors, isValid } = validateLoginInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }
    const email = req.body.email;
    const password = req.body.password;
  
    User.findOne({ email }).then(user => {
      if (!user) {
        return res.status(404).json({ emailnotfound: "Email not found" });
      }
      console.log(user);
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          if(user.status==="pending") return res.status(404).json({email: "Please check mail for activation link"});  
          const payload = {
            id: user.id,
            name: user.firstname,
            email: user.email,
            userType: user.userType,
            userStatus: user.status,
            avatar: user.avatar
          };
  
          jwt.sign(payload,
            config.get('ACT_TOKEN'),
            {
              expiresIn: 31556926 
            },(err, token) => {
              res.json({
                success: true,
                token: "Bearer " + token
              });
            }
          );
        } else {
          return res
            .status(400)
            .json({ passwordincorrect: "Password incorrect" });
        }
      });
    });
  });
  
router.post("/register", async (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const avatar = gravatar.url(req.body.email,{
        s: '200',
        r: 'pg',
        d: 'mm'
      })
        const newUser = new User({
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          email: req.body.email,
          password: req.body.password,
          avatar: avatar,
          userType: req.body.userType
        });
        const salt = await bcrypt.genSalt(10);
        newUser.password = await bcrypt.hash(newUser.password, salt);
        await newUser.save();

        const payload = {
          newUser: {
            id: newUser.id,
            firstname: newUser.firstname,
            email: newUser.email,
            password: newUser.password
          }
        };
        const activation_token=jwt.sign(
          payload, 
          config.get('ACT_TOKEN'),
          {expiresIn: 360000});
        const url = `${CLIENT_URL}/activate/${activation_token}`;
        sendMail(newUser.email, url, "Verify your email address");
        res.send('Successfully registered');
      }
  } catch (error) {
    console.log(error.message);
  }
});

router.post('/activation',async (req, res)=>{
  try{
    const {activation_token} = req.body;
    const user = jwt.verify(activation_token, config.get('ACT_TOKEN'));
    console.log(user.newUser);
    const {id,firstname,email,password} = user.newUser;
    
    User.updateOne({email: email},{$set:{status: "Active"}},(err,re)=>{
      console.log(err,re);
      if(err) throw err;
      res.json({re});
    })
  } catch(err){
    console.log(err);
  }
})

module.exports= router;