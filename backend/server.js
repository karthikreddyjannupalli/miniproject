const express=require('express');
const cors=require('cors')
const mongoose=require('mongoose')
require('dotenv').config();
const app=express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
const port=process.env.PORT||5000;

app.use(cors());
app.use(express.json());
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true ,useUnifiedTopology: true}
)
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})
io.on('connection', (socket) => {
  console.log('a user connected');
  let lb=db.collection('leaderboards')
  console.log(lb)
 setInterval(
  ()=>{lb.find().limit(10).sort({rank:1}).toArray(function(err,res){
    if(err){
      console.log("ERROR RETRIEVING DATA")
      throw err
    }

    socket.emit('get',res)
  })},1000)
}
);

console.log("Hello")
const Credentials = require('./routes/Credentials')
const LeaderBoard=require('./routes/LBMange')
const Quote=require('./routes/Quote');
const { db } = require('./DB/LBSchema');
app.use('/list',Credentials)
app.use('/quote',Quote)
app.use('/lb',LeaderBoard)
http.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

