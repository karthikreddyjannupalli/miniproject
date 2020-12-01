const express=require('express');
const cors=require('cors')
const mongoose=require('mongoose')
require('dotenv').config();
const app=express();
const port=process.env.PORT||5000;
app.use(cors());
app.use(express.json());
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true ,useUnifiedTopology: true}
)
console.log("Hello")
const Credentials = require('./routes/Credentials')
const LeaderBoard=require('./routes/LBMange')
const Quote=require('./routes/Quote')
app.use('/list',Credentials)
app.use('/quote',Quote)
app.use('/lb',LeaderBoard)
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})