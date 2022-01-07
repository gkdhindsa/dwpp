const express=require('express')
const multer=require('multer')
const sharp=require('sharp')
const User=require('../models/users')
const auth=require('../middleware/auth')
const router= new express.Router()

//Add a new User
router.post('/users', async (req,res)=>{
    const user=new User(req.body)
   
    try{
        await user.save()
        const token=await user.generateAuthToken()
        res.status(201).send({user, token})
    }catch(e){
        res.status(400).send(e)
    }
 
   
})

//Read All Users
router.get('/users/me',auth ,async (req,res)=>{
    try{
        
        res.send(req.user)
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
//post profile picture
const upload =multer({
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb){
        if(!file.originalname.match(/\.(jpeg|jpg|png)$/)){
            return cb(new Error('Please upload an image'))
        }

       cb(undefined, true)

    }
})

const errorMiddleware=(req,res)=>{
    throw new Error('From my middleware')
}

router.post('/users/me/avatar', auth, upload.single('avatar'), async (req, res)=>{
    const buffer=await sharp(req.file.buffer).resize({width: 250, height: 250}).png().toBuffer()
    req.user.avatar=buffer
    await req.user.save()
    res.send()
}, (error, req, res, next)=>{
    res.status(400).send({error: error.message})
})
//get profile picture using id

router.get('/users/:id/avatar', async (req, res)=>{
    try{
        const user=await User.findById(req.params.id)
        if(!user || !user.avatar){
            throw new Error()
        }

        res.set('Content-Type','image/png')
        res.send(user.avatar)

    }catch(e){
        res.status(404).send()
    }
})
//delete profile picture
router.delete('/users/me/avatar', auth, async (req, res) => {
    try {
      
        req.user.avatar=undefined
        await req.user.save()
        res.send(req.user)
    } catch (e) {
        res.status(500).send()
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

//Login
router.post('/users/login', async(req,res)=>{
    try{
        const user=await User.findByCredentials(req.body.email, req.body.password)
        const token=await user.generateAuthToken()
        res.send({user, token})
   }catch(e){
       res.status(400).send() 
   }
})
//Logout
router.post('/users/logout', auth, async(req,res)=>{
    try {
        console.log(req.token)
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })
        await req.user.save()

        res.send()
    } catch (e) {
        res.status(500).send()
    }
})

module.exports=router
