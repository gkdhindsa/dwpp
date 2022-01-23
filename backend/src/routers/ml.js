const express=require('express')
const request = require('request');
const router= new express.Router()



router.get('/ml' ,async (req,res)=>{
    try{
    
        res.send(200)    
    }catch(e){
        res.status(500).send(e)
    }
   
})

module.exports=router
