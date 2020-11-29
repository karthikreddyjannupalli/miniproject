const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");
const app = express();
const connectDB = require("./config/db");
var cors = require('cors')


// Initialising Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
app.use(cors());
// Connecting to DB
connectDB();
// Passport middleware
app.use(passport.initialize());
// Passport config
require("./middleware/passport")(passport);
// Routes
app.use("/api/users", users);

const port = process.env.PORT || 5000;
app.get('/', (req,res) => res.send('API Running'));
app.listen(port, () => console.log(`Server up and running on port ${port} !`));