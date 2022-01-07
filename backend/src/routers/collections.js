const express=require('express')
const Collection=require('../models/collections')
const router= new express.Router()


router.post('/collections', async (req,res)=>{
    const col=new Collection(req.body)
    try{
        await col.save()
        res.status(201).send(col)
    }catch(e){
        res.status(400).send(e)
    }
    
})

router.get('/collections', async (req,res)=>{
    try{
        const cols=await Collection.find({})
        console.log(cols)
        res.status(201).send(cols)
    }
    catch(e){
        res.status(500)
        res.send(e)
    }
})

 router.get('/collections/:id', async (req,res)=>{

    try{
        let _id=req.params.id 
        const col=await Collection.findById(_id)
        if(!collection){
            return res.status(404).send()
        }
        res.send(col)
    }catch(e){
        res.status(500).send()
    }

 })

 
 router.patch('/collections/:id', async(req, res)=>{
    const updates=Object.keys(req.body)
    
    try{
         let _id=req.params.id 
         
         const col=await Collection.findOneAndUpdate({ _id: _id }, { $push: { images: req.body } }, {new: true, runValidators: true })
         if(!col){
             return res.status(404).send()
         }
         res.send(col)
    }catch(e){
       return res.status(400).send()
    }
})

router.delete('/collections/:id', async(req, res)=>{
    
    try{
         let _id=req.params.id 
         const col=await Collection.findByIdAndDelete(_id)
         if(!col){
             return res.status(404).send()
         }
         res.send(col)
    }catch(e){
       return res.status(400).send()
    }
})
//delete and image from a collection
router.delete('/collections/:collectionId/images/:imageId', async(req, res)=>{
    
    try{
        
         let collectionId=req.params.collectionId 
         let imageId=req.params.imageId
       
         let result = await Collection.updateOne(
            { _id: collectionId},
            {
              $pull: { "images": { _id: imageId} }
            }
          );
    
          res.send(result);
    }catch(e){
       return res.status(400).send()
    }
})



module.exports=router