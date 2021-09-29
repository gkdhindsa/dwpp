/*.env file path definition */
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../config/.env') })

const express = require('express')
require('./db/mongoose')
// const UserRouter=require('./routers/user')
// const TaskRouter=require('./routers/task')

const app = express()
const port = process.env.PORT 

app.use(express.json())
// app.use(UserRouter)
// app.use(TaskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
