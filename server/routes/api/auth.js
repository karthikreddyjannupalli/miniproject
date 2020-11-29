const express = require("express");
const router = express.Router();
const auth = require('../../middleware/passport');

// @route GET api/auth

router.get('/', auth, (req,res) => res.send('Auth route'));

module.exports = router;