const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const editor = require("./routes/api/editor");
const users = require("./routes/api/users");
const contest = require("./routes/api/contest");
const app = express();
const connectDB = require("./config/db");
var cors = require('cors');
const { db } = require("./models/User");
var http = require('http').createServer(app);
var io = require('socket.io')(http);


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

io.on('connection', (socket) => {
lb=db.collection('results')
console.log(lb)
lb.find({},{limit:2}).sort({"points":-1}).toArray(function(err,res){
  socket.emit('get',res) 
}) 
}
);
app.use("/api/users", users);
app.use("/api/editor", editor);
app.use("/api/contest",contest);

const port = process.env.PORT || 5000;
app.get('/', (req,res) => res.send('API Running'));
http.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});