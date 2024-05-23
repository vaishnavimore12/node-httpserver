const express=require("express")
const router=express.Router()
const path=require("path")
const mysql=require('mysql2')


router.get("/",(req,res)=>{
    
    res.sendFile(path.join(process.cwd(),"pages","login.html"))
    
 })



module.exports=router