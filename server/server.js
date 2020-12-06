const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const editor = require("./routes/api/editor");
const users = require("./routes/api/users");
const contest = require("./routes/api/contest");
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
app.use("/api/editor", editor);
app.use("/api/contest",contest);

const port = process.env.PORT || 5000;
app.get('/', (req,res) => res.send('API Running'));
app.listen(port, () => console.log(`Server up and running on port ${port} !`));