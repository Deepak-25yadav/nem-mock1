
const express=require("express")
const mongoose=require("mongoose")
const {connection} =require("./db")

const cors=require("cors")
require('dotenv').config()

const app=express();
app.use(express.json())
app.use(cors());

app.get("/",(req,res)=>{
    res.status(200).send("Home page")
})

app.listen(process.env.port, async()=>{

await connection
try{
    console.log("connected to DB");
}catch(err){
    console.log("cannot connect to DB");
    console.log(err)
}

console.log(`server is running on port 6060...`)

})