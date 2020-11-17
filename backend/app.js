const express = require('express');
const authRoutes = require('./routes/auth-router');
const passportSetup = require('./config/passport-setup');

const app = express();

app.set('view engine','ejs');
app.use('/auth',authRoutes);

app.listen(5000, ()=>{
    console.log('app now listening on port 5000');
});