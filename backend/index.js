const express=require("express")
const app=express();
const bodyParser=require('body-parser')
const cors=require('cors')

const AuthRouter = require('./Routes/AuthRouter');
const ProductRouter = require('./Routes/ProductRouter');
require('dotenv').config();
require('./modals/db.js')
const PORT=process.env.PORT || 8080
app.use(cors())
app.get("/ping",(req,res)=>{
    res.send("pong");
})
app.use(bodyParser.json());

app.use('/auth', AuthRouter);
app.use('/products', ProductRouter);
app.listen(PORT,()=>{
    console.log("Server is Running")
})