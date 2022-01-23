const express=require('express')
const request = require('request');
const router= new express.Router()


//Search by category
router.get('/search' ,async (req,res)=>{
    let categories={'hats':1, 'space':2, 'sunglasses':4, 'ties':7, 'boxes':5, 'clothes':15, 'sinks':14}
    try{
        console.log('yo')
        let category=req.query.category
        console.log(category)
        let limit=req.query.limit 
        let page=req.query.page 
        let url='https://api.thecatapi.com/v1/images/search?'
        console.log(`${url}category_ids=${categories[category]}&limit=${limit}&page=${page}&order=asc`)
        request(`${url}category_ids=${categories[category]}&limit=${limit}&page=${page}&order=asc`, { json: true }, (err, response, body) => {
        if (err) { return console.log(err); }
        res.send(body)
    });
    

        
    }catch(e){
        res.status(500).send(e)
    }
   
})

module.exports=router
