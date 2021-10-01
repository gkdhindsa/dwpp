/*.env file path definition */
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../config/.env') })
const express = require('express')
require('./db/mongoose')


const UserRouter=require('./routers/users')
const CollectionRouter=require('./routers/collections')

const app = express()
const port = process.env.PORT 

//parses incoming json to an object
app.use(express.json())
app.use(UserRouter)
app.use(CollectionRouter)



app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const myFunction=async()=>{
    
}