const express=require('express')
const User=require('../models/users')
const router= new express.Router()

//Add a new User
router.post('/users', async (req,res)=>{
    const user=new User(req.body)
   
    try{
        await user.save()
        console.log(user)
        res.status(201).send(user)
    }catch(e){
        res.status(400).send(e)
    }
 
   
})
//Read All Users
router.get('/users', async (req,res)=>{
    try{
        const users = await User.find({})
        res.send(users)
    }catch(e){
        res.status(500).send(e)
    }
   
})
//Read a user by ID
router.get('/users/:id', async (req,res)=>{
    try{
        let _id=req.params.id 
        const user=await User.findById(_id)
        if(!user)
        {
            return res.status(404).send()
        }
            
        res.send(user)
    }catch(e){
        res.status(500).send()
    }

 
 })
 //Update A user by id
 router.patch('/users/:id', async(req, res)=>{
    const updates=Object.keys(req.body)
    const allowedUpdates=['name', 'password', 'avatar', 'vector', 'likes', 'dislikes', 'weeklyPictures']

    const isValidOperation=updates.every((update)=> allowedUpdates.includes(update))

    if(!isValidOperation){
        return res.status(400).send({error: 'Invalid updates!'})
    }
    try{
         let _id=req.params.id 
         const user=await User.findById(_id)
            updates.forEach((update)=>{
                user[update]=req.body[update]
            })
            console.log(user)
            await user.save()

         if(!user){
             return res.status(404).send()
         }
         res.send(user)
    }catch(e){
       return res.status(400).send()
    }
})
//delete a user by ID
router.delete('/users/:id', async(req, res)=>{
    
    try{
         let _id=req.params.id 
         const user=await User.findByIdAndDelete(_id)
         if(!user){
             return res.status(404).send()
         }
         res.send(user)
    }catch(e){
       return res.status(400).send()
    }
})

module.exports=router
